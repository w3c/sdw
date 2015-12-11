/*************************************************************************/
/*                                                                       */
/*  xml3d_scene_controller.js                                            */
/*  Navigation method for XML3D                                             */
/*                                                                       */
/*  Copyright (C) 2010                                                   */
/*  DFKI - German Research Center for Artificial Intelligence            */
/*                                                                       */
/*  xml3d.js is free software; you can redistribute it and/or modify     */
/*  under the terms of the GNU General Public License as                 */
/*  published by the Free Software Foundation; either version 2 of       */
/*  the License, or (at your option) any later version.                  */
/*                                                                       */
/*  xml3d.js is distributed in the hope that it will be useful, but      */
/*  WITHOUT ANY WARRANTY; without even the implied warranty of           */
/*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.                 */
/*  See the GNU General Public License                                   */
/*  (http://www.fsf.org/licensing/licenses/gpl.html) for more details.   */
/*                                                                       */
/*************************************************************************/

//Check, if basics have already been defined
if(!XML3D)
    XML3D = {};
if(!XML3D.util)
    XML3D.util = {};

XML3D.util.Timer = function() {
    this.start();
};

XML3D.util.Timer.prototype.restart = function() {
    var prevTime = this.time;
    this.start();
    return this.time - prevTime;
};

XML3D.util.Timer.prototype.start = function() {
    this.time = new Date().getTime();
};


XML3D.Camera = function(view) {
    this.view = view;
};

XML3D.Camera.prototype.__defineGetter__("orientation", function() {
    return this.view.orientation;
});
XML3D.Camera.prototype.__defineGetter__("position", function() {
    return this.view.position;
});
XML3D.Camera.prototype.__defineSetter__("orientation", function(orientation) {
    /*xml3d.debug.logError("Orientation: " + orientation);*/
    //xml3d.copyRotation(this.view.orientation, orientation);
    var ax = orientation.axis;
    var str = ax.x + " " + ax.y + " " + ax.z + " " + orientation.angle;
    this.view.setAttribute("orientation", str);
});
XML3D.Camera.prototype.__defineSetter__("position", function(position) {
    //xml3d.copyVector(this.view.position, position);
    var str = position.x + " " + position.y + " " + position.z;
    this.view.setAttribute("position", str);
});
XML3D.Camera.prototype.__defineGetter__("direction", function() {
    return this.view.getDirection();
});
XML3D.Camera.prototype.__defineGetter__("upVector", function() {
    return this.view.getUpVector();
});
XML3D.Camera.prototype.__defineGetter__("fieldOfView", function() {
    return this.view.fieldOfView;
});

XML3D.Camera.prototype.rotateAroundPoint = function(q0, p0) {
    //xml3d.debug.logError("Orientation: " + this.orientation.multiply(q0).normalize());
    var tmp = this.orientation.multiply(q0);
    tmp.normalize();
    this.orientation = tmp;
    var trans = new window.XML3DRotation(this.inverseTransformOf(q0.axis), q0.angle).rotateVec3(this.position.subtract(p0));
    this.position = p0.add(trans);
};

XML3D.Camera.prototype.lookAround = function(rotSide, rotUp, upVector) {
    //xml3d.debug.logError("Orientation: " + this.orientation.multiply(q0).normalize());
    var check = rotUp.multiply(this.orientation);
    var tmp;
    if( Math.abs(upVector.dot(check.rotateVec3(new window.XML3DVec3(0,0,-1)))) > 0.95 )
        tmp = rotSide;
    else
        tmp = rotSide.multiply(rotUp);
    tmp.normalize();
    tmp = tmp.multiply(this.orientation);
    tmp.normalize();
    this.orientation = tmp;
};

XML3D.Camera.prototype.rotate = function(q0) {
    this.orientation = this.orientation.multiply(q0).normalize();
};

XML3D.Camera.prototype.translate = function(t0) {
    this.position = this.position.add(t0);
};

XML3D.Camera.prototype.inverseTransformOf = function(vec) {
    return this.orientation.rotateVec3(vec);
};

XML3D.Xml3dSceneController = function(xml3dElement) {
    this.webgl = typeof(xml3dElement.style) !== 'object';

    this.xml3d = xml3dElement;
    this.canvas = this.webgl ?  xml3dElement.canvas : xml3dElement;

    var view = this.getView();
    if (!view)
    {
        XML3D.debug.logWarning("No view found, rendering disabled!");
        if (xml3dElement.update)
            xml3dElement.update(); // TODO: Test
    }
    if (!this.xml3d || !view)
    {
        XML3D.debug.logError("Could not initialize Camera Controller.");
        return;
    }

    this.camera = new XML3D.Camera(view);
    this.timer = new XML3D.util.Timer();
    this.prevPos = {x: -1, y: -1};
    this.prevTouchPositions = new Array();
    this.prevTouchPositions[0] = {
        x : -1,
        y : -1
    };
    this.prevZoomVectorLength;

    this.mode = "examine";
    this.touchTranslateMode = "twofinger";
    this.revolveAroundPoint = new window.XML3DVec3(0, 0, 0);
    this.rotateSpeed = 1;
    this.zoomSpeed = 20;
    this.spinningSensitivity = 0.3;
    this.isSpinning = false;

    this.upVector = this.camera.upVector;

    this.moveSpeedElement = document.getElementById("moveSpeed");
    this.useKeys = document.getElementById("useKeys");

    var navigations = xml3dElement.getElementsByTagName("navigation");

    if(navigations.length > 0)
    {
        var config = navigations[0];
        this.mode = config.getAttribute("mode");

        if(this.mode == "none")
            return;

        if(this.mode != "walk" && this.mode != "examine" )
            this.mode = "examine";

        this.touchTranslateMode = config.getAttribute("touchtranslate");

        if(this.touchTranslateMode != "twofinger" && this.touchTranslateMode != "threefinger" )
            this.touchTranslateMode = "twofinger";

        if(config.getAttribute("resolveAround")){
            XML3D.debug.logWarning("resolveAround is obsolete. Use 'revolveAround' instead!");
            this.revolveAroundPoint.setVec3Value(config.getAttribute("resolveAround"));
        }
        if(config.getAttribute("revolveAround")){
            this.revolveAroundPoint.setVec3Value(config.getAttribute("revolveAround"));
        }
        if(config.getAttribute("speed"))
        {
            this.zoomSpeed *= config.getAttribute("speed");
        }
    }

    this.attach();
};

XML3D.Xml3dSceneController.prototype.setCamera = function(newCamera) {
    this.camera = new XML3D.Camera(newCamera);
    this.upVector = this.camera.upVector;
};

XML3D.Xml3dSceneController.prototype.setRevolvePoint = function(vec) {
    this.revolveAroundPoint = vec;
};

XML3D.Xml3dSceneController.prototype.attach = function() {
    var self = this;
    this._evt_mousedown = function(e) {self.mousePressEvent(e);};
    this._evt_mouseup = function(e) {self.mouseReleaseEvent(e);};
    this._evt_mousemove = function(e) {self.mouseMoveEvent(e);};
    this._evt_contextmenu = function(e) {self.stopEvent(e);};
    this._evt_keydown = function(e) {self.keyHandling(e);};

    this._evt_touchstart = function(e) {self.touchStartEvent(e);};
    this._evt_touchmove = function(e) {self.touchMoveEvent(e);};
    this._evt_touchend = function(e) {self.touchEndEvent(e);};
    this._evt_touchcancel = function(e) {self.touchEndEvent(e);};


    this.canvas.addEventListener("mousedown", this._evt_mousedown, false);
    document.addEventListener("mouseup", this._evt_mouseup, false);
    document.addEventListener("mousemove",this._evt_mousemove, false);

    this.canvas.addEventListener("touchstart", this._evt_touchstart, false);
    document.addEventListener("touchend", this._evt_touchend, false);
    document.addEventListener("touchmove",this._evt_touchmove, false);
    document.addEventListener("touchcancel", this._evt_touchend, false);

    this.canvas.addEventListener("contextmenu", this._evt_contextmenu, false);
    if (this.useKeys)
        document.addEventListener("keydown", this._evt_keydown, false);
};

XML3D.Xml3dSceneController.prototype.detach = function() {
    this.canvas.removeEventListener("mousedown", this._evt_mousedown, false);
    document.removeEventListener("mouseup", this._evt_mouseup, false);
    document.removeEventListener("mousemove",this._evt_mousemove, false);

    this.canvas.removeEventListener("touchstart", this._evt_touchstart, false);
    document.removeEventListener("touchend", this._evt_touchend, false);
    document.removeEventListener("touchmove",this._evt_touchmove, false);
    document.removeEventListener("touchcancel", this._evt_touchend, false);

    this.canvas.removeEventListener("contextmenu", this._evt_contextmenu, false);
    if (this.useKeys)
        document.removeEventListener("keydown", this._evt_keydown, false);
};

XML3D.Xml3dSceneController.prototype.__defineGetter__("width", function() { return this.canvas.width;});
XML3D.Xml3dSceneController.prototype.__defineGetter__("height", function() { return this.canvas.height;});

XML3D.Xml3dSceneController.prototype.getView = function() {
    var activeView = this.xml3d.activeView;
    XML3D.debug.logInfo("Active View: " + activeView);

    if (activeView)
    {
        if (activeView.substring(0, 1) == '#') {
            activeView = activeView.substring(1);
        }
        XML3D.debug.logInfo("Trying to resolve view '" + activeView +"'");
        activeView = document.getElementById(activeView);
    }

    // if activeView is not defined or the reference is not valid
    // use the first view element
    if (!activeView)
    {
        XML3D.debug.logWarning("No view referenced. Trying to use first view.");
        activeView = this.xml3d.querySelector('view');
    }

    if(false)
    {
        // no view present at all
        // create new one and append it to defs element
        XML3D.debug.logWarning("No view defined. Trying to create view.");

        // create it
        activeView = document.createElementNS(XML3D.xml3dNS, "view");

        var id = "created_xml3d.Xml3dSceneController.view_";
        id += "" + Math.random();
        activeView.setAttribute("id", id);

        // append it to defs
        var defsEl =  document.evaluate('xml3d:defs[1]', this.xml3d, function() {
            return XML3D.xml3dNS;
        }, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

        if(!defsEl)
        {
            defsEl = document.createElementNS(XML3D.xml3dNS, "defs");
            this.xml3d.appendChild(defsEl);
        }

        defsEl.appendChild(activeView);
    }

    return activeView;
};

XML3D.Xml3dSceneController.prototype.stopEvent = function(ev) {
    if (ev.preventDefault)
        ev.preventDefault();
    if (ev.stopPropagation)
        ev.stopPropagation();
    ev.returnValue = false;
};

XML3D.Xml3dSceneController.prototype.update = function() {
    if (this.animation || this.needUpdate) {
        this.needUpdate = false;
        if (this.xml3d.update)
            this.xml3d.update();
    }
};

XML3D.Xml3dSceneController.prototype.NO_MOUSE_ACTION = 0;
XML3D.Xml3dSceneController.prototype.TRANSLATE = 1;
XML3D.Xml3dSceneController.prototype.DOLLY = 2;
XML3D.Xml3dSceneController.prototype.ROTATE = 3;
XML3D.Xml3dSceneController.prototype.LOOKAROUND = 4;

XML3D.Xml3dSceneController.prototype.mousePressEvent = function(event) {

    var ev = event || window.event;

    var button = (ev.which || ev.button);
    switch (button) {
        case 1:
            if(this.mode == "examine")
                this.action = this.ROTATE;
            else
                this.action = this.LOOKAROUND;
            break;
        case 2:
            this.action = this.TRANSLATE;
            break;
        case 3:
            this.action = this.DOLLY;
            break;
        default:
            this.action = this.NO_MOUSE_ACTION;
    }

    this.prevPos.x = ev.pageX;
    this.prevPos.y = ev.pageY;

    this.stopEvent(event);
    return false;
};

XML3D.Xml3dSceneController.prototype.mouseReleaseEvent = function(event) {
    this.stopEvent(event);

    //if (this.action == this.ROTATE && this.mouseSpeed > this.spinningSensitivity)
    //    this.startSpinning();

    this.action = this.NO_MOUSE_ACTION;
    return false;
};

XML3D.Xml3dSceneController.prototype.startSpinning = new function() {
    this.isSpinning = true;
    // TODO
};

XML3D.Xml3dSceneController.prototype.computeMouseSpeed = function(event) {
    var dx = (event.pageX - this.prevPos.x);
    var dy = (event.pageY - this.prevPos.y);
    var dist = Math.sqrt(+dx*dx + dy*+dy);
    this.delay = this.timer.restart();
    if (this.delay == 0)
        this.mouseSpeed = dist;
      else
        this.mouseSpeed = dist/this.delay;
    XML3D.debug.logWarning("Mouse speed: " + this.mouseSpeed);
};

XML3D.Xml3dSceneController.prototype.mouseMoveEvent = function(event, camera) {

    var ev = event || window.event;
    if (!this.action)
        return;
    switch(this.action) {
        case(this.TRANSLATE):
            var f = 2.0* Math.tan(this.camera.fieldOfView/2.0) / this.height;
            var dx = f*(ev.pageX - this.prevPos.x);
            var dy = f*(ev.pageY - this.prevPos.y);
            var trans = new window.XML3DVec3(-dx, dy, 0.0);
            this.camera.translate(this.camera.inverseTransformOf(trans));
            break;
        case(this.DOLLY):
            var dy = this.zoomSpeed * (ev.pageY - this.prevPos.y) / this.height;
            this.camera.translate(this.camera.inverseTransformOf(new window.XML3DVec3(0, 0, dy)));
            break;
        case(this.ROTATE):

            var dx = -this.rotateSpeed * (ev.pageX - this.prevPos.x) * 2.0 * Math.PI / this.width;
            var dy = -this.rotateSpeed * (ev.pageY - this.prevPos.y) * 2.0 * Math.PI / this.height;

            var mx = new window.XML3DRotation(new window.XML3DVec3(0,1,0), dx);
            var my = new window.XML3DRotation(new window.XML3DVec3(1,0,0), dy);
            //this.computeMouseSpeed(ev);
            this.camera.rotateAroundPoint(mx.multiply(my), this.revolveAroundPoint);
            break;
        case(this.LOOKAROUND):
            var dx = -this.rotateSpeed * (ev.pageX - this.prevPos.x) * 2.0 * Math.PI / this.width;
            var dy = this.rotateSpeed * (ev.pageY - this.prevPos.y) * 2.0 * Math.PI / this.height;
            var cross = this.upVector.cross(this.camera.direction);

            var mx = new window.XML3DRotation( this.upVector , dx);
            var my = new window.XML3DRotation( cross , dy);

            this.camera.lookAround(mx, my, this.upVector);
            break;
    }

    if (this.action != this.NO_MOUSE_ACTION)
    {
        this.needUpdate = true;
        this.prevPos.x = ev.pageX;
        this.prevPos.y = ev.pageY;
        event.returnValue = false;

        this.update();
    }
    this.stopEvent(event);
    return false;
};


// -----------------------------------------------------
// touch rotation and movement
// -----------------------------------------------------


XML3D.Xml3dSceneController.prototype.touchStartEvent = function(event) {
    if (event.target.nodeName.toLowerCase() == "xml3d") {
        this.stopEvent(event);
    }

    var ev = event || window.event;

    var button = (ev.which || ev.button);

    switch (ev.touches.length) {
        case 1:
            if(this.mode == "examine")
                this.action = this.ROTATE;
            else
                this.action = this.LOOKAROUND;
            break;
        case 2:
            this.action = this.DOLLY;
            break;
        case 3:
            this.action = this.TRANSLATE;
            break;
        default:
            this.action = this.NO_MOUSE_ACTION;
    }

    var touchPositions = new Array();
    for (var i=0; i<ev.touches.length; i++) {
            touchPositions[i] = {x: ev.touches[i].pageX, y: ev.touches[i].pageY};
    }
    this.prevTouchPositions = touchPositions;

    return false;
};

XML3D.Xml3dSceneController.prototype.touchEndEvent = function(event) {
    if (event.target.nodeName.toLowerCase() == "xml3d") {
        this.stopEvent(event);
    }

    var ev = event || window.event;
    //if (this.action == this.ROTATE && this.mouseSpeed > this.spinningSensitivity)
    //    this.startSpinning();

    switch (ev.touches.length) {
        case 1:
            this.prevZoomVectorLength = undefined;
            if(this.mode == "examine")
                this.action = this.ROTATE;
            else
                this.action = this.LOOKAROUND;
            break;
        case 2:
            this.action = this.DOLLY;
            break;
        case 3:
            this.action = this.TRANSLATE;
            break;
        default:
            this.action = this.NO_MOUSE_ACTION;
    }

    var touchPositions = new Array();
    for (var i=0; i<ev.touches.length; i++) {
            touchPositions[i] = {x: ev.touches[i].pageX, y: ev.touches[i].pageY};
    }
    this.prevTouchPositions = touchPositions;

    return false;
};


XML3D.Xml3dSceneController.prototype.touchMoveEvent = function(event, camera) {
    if (event.target.nodeName.toLowerCase() == "xml3d") {
        this.stopEvent(event);
    }

    var ev = event || window.event;
    if (!this.action)
        return;

    switch(this.action) {
        case(this.TRANSLATE):
            if (this.touchTranslateMode == "threefinger") {
                var f = 2.0* Math.tan(this.camera.fieldOfView/2.0) / this.height;
                var dx = f*(ev.touches[0].pageX - this.prevTouchPositions[0].x);
                var dy = f*(ev.touches[0].pageY - this.prevTouchPositions[0].y);
                var trans = new window.XML3DVec3(-dx*this.zoomSpeed, dy*this.zoomSpeed, 0.0);
                this.camera.translate(this.camera.inverseTransformOf(trans));
            }
            break;
        case(this.DOLLY):
            if (this.touchTranslateMode == "twofinger") {
                //apple-style 2-finger dolly + translate
                var prevMidpoint;

                if (this.prevTouchPositions.length > 1) {
                    prevMidpoint = {x:(this.prevTouchPositions[0].x + this.prevTouchPositions[1].x) / 2 ,
                                    y:(this.prevTouchPositions[0].y + this.prevTouchPositions[1].y) / 2 }
                }

                if (prevMidpoint !== undefined) {
                    var curMidpoint = {x:(ev.touches[0].pageX + ev.touches[1].pageX) / 2 ,
                                       y:(ev.touches[0].pageY + ev.touches[1].pageY) / 2 }
                    var f = 2.0* Math.tan(this.camera.fieldOfView/2.0) / this.height;
                    var dx = f*(curMidpoint.x - prevMidpoint.x);
                    var dy = f*(curMidpoint.y - prevMidpoint.y);
                    var trans = new window.XML3DVec3(-dx*this.zoomSpeed, dy*this.zoomSpeed, 0.0);
                    this.camera.translate(this.camera.inverseTransformOf(trans));
                }
            }

            if (this.prevZoomVectorLength !== undefined) {
                var dv = {x: ev.touches[0].pageX - ev.touches[1].pageX, y: ev.touches[0].pageY - ev.touches[1].pageY};
                var currLength = Math.sqrt(dv.x*dv.x + dv.y*dv.y);

                var dy = this.zoomSpeed * (currLength - this.prevZoomVectorLength) / this.height;
                this.camera.translate(this.camera.inverseTransformOf(new window.XML3DVec3(0, 0, -dy)));

                this.prevZoomVectorLength = currLength;
            } else {
                var dv = {x: ev.touches[0].pageX - ev.touches[1].pageX, y: ev.touches[0].pageY - ev.touches[1].pageY};
                this.prevZoomVectorLength = Math.sqrt(dv.x*dv.x + dv.y*dv.y);
            }

            break;
        case(this.ROTATE):
            var dx = -this.rotateSpeed * (ev.touches[0].pageX - this.prevTouchPositions[0].x) * 2.0 * Math.PI / this.width;
            var dy = -this.rotateSpeed * (ev.touches[0].pageY - this.prevTouchPositions[0].y) * 2.0 * Math.PI / this.height;

            var mx = new window.XML3DRotation(new window.XML3DVec3(0,1,0), dx);
            var my = new window.XML3DRotation(new window.XML3DVec3(1,0,0), dy);
            //this.computeMouseSpeed(ev);
            this.camera.rotateAroundPoint(mx.multiply(my), this.revolveAroundPoint);
            break;
        case(this.LOOKAROUND):
            var dx = -this.rotateSpeed * (ev.touches[0].pageX - this.prevTouchPositions[0].x) * 2.0 * Math.PI / this.width;
            var dy = this.rotateSpeed * (ev.touches[0].pageY - this.prevTouchPositions[0].y) * 2.0 * Math.PI / this.height;
            var cross = this.upVector.cross(this.camera.direction);

            var mx = new window.XML3DRotation( this.upVector , dx);
            var my = new window.XML3DRotation( cross , dy);

            this.camera.lookAround(mx, my, this.upVector);
            break;
    }

    if (this.action != this.NO_MOUSE_ACTION)
    {
        this.needUpdate = true;

        var touchPositions = new Array();
        for (var i=0; i<ev.touches.length; i++) {
            touchPositions[i] = {x: ev.touches[i].pageX, y: ev.touches[i].pageY};
        }
        this.prevTouchPositions = touchPositions;

        event.returnValue = false;

        this.update();
    }

    return false;
};


// -----------------------------------------------------
// key movement
// -----------------------------------------------------

XML3D.Xml3dSceneController.prototype.keyHandling = function(e) {
    var KeyID = e.keyCode;
    if (KeyID == 0) {
        switch (e.which) {
        case 119:
            KeyID = 87;
            break; // w
        case 100:
            KeyID = 68;
            break; // d
        case 97:
            KeyID = 65;
            break; // a
        case 115:
            KeyID = 83;
            break; // s
        }
    }

    var xml3d = this.xml3d;
    // alert(xml3d);
    var camera = this.camera;
    var dir = camera.direction;
    if (xml3d) {
        switch (KeyID) {
        case 38: // up
        case 87: // w
            camera.position = camera.position.add(dir.scale(this.zoomSpeed));
            break;
        case 39: // right
        case 68: // d
            var np = camera.position;
            np.x -= dir.z * this.zoomSpeed;
            np.z += dir.x * this.zoomSpeed;
            camera.position = np;
            break;
        case 37: // left
        case 65: // a
            var np = camera.position;
            np.x += dir.z * this.zoomSpeed;
            np.z -= dir.x * this.zoomSpeed;
            camera.position = np;
            break;
        case 40: // down
        case 83: // s
            camera.position = camera.position.subtract(dir.scale(this.zoomSpeed));
            break;

        default:
            return;
        }
        this.needUpdate = true;
    }
    this.stopEvent(e);
};

//-----------------------------------------------------
//attach/detach of all controllers
//-----------------------------------------------------
XML3D.Xml3dSceneController.attachAllControllers = function() {

    XML3D.debug.logInfo("Attaching all active controllers to xml3d elements.");

    var xml3dList = Array.prototype.slice.call( document.getElementsByTagNameNS(XML3D.xml3dNS, 'xml3d') );
    for(var node in xml3dList) {
        XML3D.Xml3dSceneController.controllers[node].attach();
    }
};

XML3D.Xml3dSceneController.detachAllControllers = function() {

    XML3D.debug.logInfo("Detaching all active controllers from xml3d elements.");

    var xml3dList = Array.prototype.slice.call( document.getElementsByTagNameNS(XML3D.xml3dNS, 'xml3d') );
    for(var node in xml3dList) {
        XML3D.Xml3dSceneController.controllers[node].detach();
    }
};

XML3D.Xml3dSceneController.getController = function(xml3d) {

    var xml3dList = Array.prototype.slice.call( document.getElementsByTagNameNS(XML3D.xml3dNS, 'xml3d') );
    for(var node in xml3dList) {

        var ctrl = XML3D.Xml3dSceneController.controllers[node];
        if(xml3d == ctrl.xml3d)
            return ctrl;
    }

    return null;
};

//-----------------------------------------------------
//loading/unloading
//-----------------------------------------------------

(function() {

    var onload = function() {

        var xml3dList = Array.prototype.slice.call( document.querySelectorAll('xml3d') );

        XML3D.Xml3dSceneController.controllers = new Array();
        for(var i in xml3dList) {
            XML3D.debug.logInfo("Attaching Controller to xml3d element.");
            XML3D.Xml3dSceneController.controllers[i] = new XML3D.Xml3dSceneController(xml3dList[i]);
        };
    };
    var onunload = function() {
        for(var i in XML3D.Xml3dSceneController.controllers)
        {
            XML3D.Xml3dSceneController.controllers[i].detach();
        }
    };

    window.addEventListener('load', onload, false);
    window.addEventListener('unload', onunload, false);
    window.addEventListener('reload', onunload, false);

})();

/***********************************************************************/
