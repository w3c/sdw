var XML3D = XML3D || {};
	
(function() {

XML3D.Geo = function ( geo_tf, level, origin )
{
	this.origin = null;
	this.level = level || 16;
	this.tpl = Math.pow(2, this.level);
	this.geo_tf = geo_tf || null;
	this.moveCBs = Array();
	
	//this.adjustTileSize();
	//console.log("Tile size: " + this.tile_size);

	if (origin !== null) this.setOrigin(origin);
}


XML3D.Geo.prototype.xtile = function ( lon ) {
	return this.tpl * (lon + 180.0) / 360.0;
}

XML3D.Geo.prototype.ytile = function ( lat ) {
	return (1 - Math.log(Math.tan(this.deg2rad(lat)) + 1 / Math.cos(this.deg2rad(lat))) / Math.PI) /2 * this.tpl;
}

XML3D.Geo.prototype.project = function ( lat, lon ) {
	return {
		"x": this.tile_size * this.xtile(lon),
		"y": this.tile_size * this.ytile(lat)
	};
}

XML3D.Geo.prototype.backproject = function ( x, y ) {
	return null;
}

XML3D.Geo.prototype.tile = function ( lat, lon ) {
	return {
		"x": Math.floor(this.xtile(lon)),
		"y": Math.floor(this.ytile(lat))
	};
}

XML3D.Geo.prototype.adjustTileSize = function ( ) {
	// The distance represented by one tile T (in meters) is given by
	var C = 40075017; // earth equatorial circumference in meters
	this.tile_size = C * Math.cos(this.deg2rad(this.origin.lat)) / this.tpl
}

XML3D.Geo.prototype.setOrigin = function ( origin ) {
	this.origin = origin;
	this.adjustTileSize();
	// console.log(this.origin);
	if (this.geo_tf !== null) {
		var x = this.xtile(this.origin.lon, this.level);
		var y = this.ytile(this.origin.lat, this.level);
		
		this.geo_tf.setAttribute("translation", -this.tile_size*x + " 0 " + -this.tile_size*y);
	}
	
	this.moveCBs.forEach( function (cb) { cb(origin); } );
}

XML3D.Geo.prototype.registerMoveCallback = function ( cb ) {
	this.moveCBs.push(cb);
	if (this.origin !== null) {
		// call once initially
		cb(this.origin);
	}
}


XML3D.Geo.prototype.goToMyPosition = function ( fail ) {
	var scope = this;
	
	var geo_success = function (position) {
		scope.setOrigin({
			"lat": position.coords.latitude,
			"lon": position.coords.longitude
		});
	}

	var geo_error = function () {
		console.log("Sorry, no position available.");
		if (fail !== null)
			fail.call();
	}

	var geo_options = {
		enableHighAccuracy: true, 
		maximumAge        : 30000, 
		timeout           : 2000
	};

	var wpid = navigator.geolocation.getCurrentPosition(geo_success, geo_error, geo_options);
}


XML3D.Geo.prototype.deg2rad = function ( angle ) {
	return angle * 0.017453292519943295; // (angle / 180) * Math.PI;
}


})();