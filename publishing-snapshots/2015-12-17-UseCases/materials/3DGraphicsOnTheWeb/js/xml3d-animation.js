
var XML3D = XML3D || {};
	
(function() {

XML3D.animators = Array();

XML3D.Animator = function() {
	this.lastTime = new Date().getTime();
	this.anims = Array();
	
	XML3D.animators.push(this);
};

XML3D.Animator.prototype.animloop = function (delta) {
	this.anims.forEach (function (anim) {
		anim.animate(delta);
	});
};

XML3D.Animator.prototype.registerAnimation = function (anim) {
	this.anims.push(anim);
};


(XML3D.animloop = function () {
	var t = new Date().getTime();
	var delta = (t - this.lastTime) / 1000;
	this.lastTime = t;
	window.requestAnimationFrame(XML3D.animloop);
	// console.log(delta);
	XML3D.animators.forEach (function (anim) {
		anim.animloop(delta);
	});
})();


})();