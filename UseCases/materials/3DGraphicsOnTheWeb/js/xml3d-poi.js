var XML3D = XML3D || {};
	
(function() {

XML3D.POI = function( geo, group )
{
	this.group = group || null;
	this.geo = geo || null;
	this.scale = 0.6;
	
	this.idGen = 0;
	
	this.anim = {
		"dest": XML3D.math.mat4.create(),
		"angle": 0,
		"pos": 0,
		"rotspeed": 0.8,
		"movespeed": 4.0,
		"movedist": 28.0
	};

	this.initAnimations();
	this.initType("hint");
	this.initType("cafe");
}


XML3D.POI.prototype.loadPOIDP = function ( api_poi, bbox )
{
	// http://130.206.80.175/api/poi/bbox_search
	// ?category=HTL
	// &max_results=100
	// &component=fw_core,fw_xml3d
	// &north=48.166515078566
	// &south=48.106600464934
	// &west=11.442510286059
	// &east=11.656400361743
	
	var req = $.getJSON(
		api_poi,
		{
			north: bbox.north,
			south: bbox.south,
			west: bbox.west,
			east: bbox.east,
			component: "fw_core,fw_xml3d",
			max_results: 100
		}
	);
		
	var scope = this;
	req.done(function( data ) {
		$.each( data.pois, function( poi_id, poi_data ) {
			scope.addPOI( poi_id, poi_data );
		});
		// console.log(data.pois);
	});
}

XML3D.POI.prototype.loadStaticOverpass = function ( url )
{
	var req = $.getJSON(url);
	req.done(this.handleOverpassData.bind(this));
}

XML3D.POI.prototype.loadOverpass = function ( bbox )
{
	var swne = bbox.south + "," + bbox.west + "," + bbox.north + "," + bbox.east;
	
	var qlQuery = '[out:json];' +
		'node(' + swne + ')["amenity"];' +
		'out;';
	
	var req = $.getJSON(
		'http://overpass-api.de/api/interpreter',
		{
			data: qlQuery
		}
	);
	
	req.done(this.handleOverpassData.bind(this));
}

XML3D.POI.prototype.handleOverpassData = function( data ) {
	var scope = this;
	// console.log(data);
	$.each( data.elements, function( idx, node_data ) {
		scope.addPOI(
			node_data.id,
			{
				fw_core: {
					category: node_data.tags.amenity,
					location: {
						wgs84: {
							latitude: node_data.lat,
							longitude: node_data.lon
						}
					}
				}
			}
		);
	});
	// console.log(data.pois);
}


XML3D.POI.prototype.addPOI = function ( poi_id, poi_data )
{
	// console.log(poi_data);
	
	var id = this.idGen++;
	
	var loc = poi_data.fw_core.location.wgs84;
	var typeName = this.deriveTypeName(poi_data.fw_core.category);
	if (typeName === null)
		return;
	
	var coord = this.geo.project(loc.latitude, loc.longitude);
	// console.log(coord);
	
	var t = XML3D.createElement("transform");
	t.setAttribute("id", "poi_tf_" + poi_id);
	t.setAttribute("translation", coord.x + " 20 " + coord.y);
	t.setAttribute("rotation", "0 1 0 " + (id % Math.PI));
	
	this.group.appendChild(t);
	
	var m = XML3D.createElement("model");
	m.setAttribute("id", "poi_" + poi_id);
	m.setAttribute("src", "#asset_" + typeName);
	m.setAttribute("transform", "#poi_tf_" + poi_id);
	m.setAttribute("ondblclick", "alert('Hello World!');");

	this.group.appendChild(m);
}

XML3D.POI.prototype.deriveTypeName = function(category)
{
	if (category == "cafe")
		return "cafe";
	
	return null;
}

XML3D.POI.prototype.animate = function(delta)
{
	var twoPI = 2*Math.PI;
	this.anim.angle = (this.anim.angle + (this.anim.rotspeed * delta)) % twoPI;
	this.anim.pos = (this.anim.pos + (this.anim.movespeed * delta)) % twoPI;
	var up = 0.5 * this.anim.movedist * (Math.sin(this.anim.pos) + 1.0);
	
	// TODO: reset it not necessary - advancing motion with regard to delta is sufficient
    XML3D.math.mat4.identity(this.anim.dest);
    XML3D.math.mat4.scale(this.anim.dest, this.anim.dest, [this.scale,this.scale,this.scale]);
	XML3D.math.mat4.rotateY(this.anim.dest, this.anim.dest, this.anim.angle);
	XML3D.math.mat4.translate(this.anim.dest, this.anim.dest, [0,up,0]);
	
	this.anim_tf.setScriptValue(this.anim.dest);
}


XML3D.POI.prototype.initAnimations = function() {
	var d = XML3D.createElement("data");
	d.setAttribute("id", "poi_tf");
	
	this.anim_tf = XML3D.createElement("float4x4");
	this.anim_tf.setAttribute("name", "meshTransform");
	d.appendChild(this.anim_tf);
	this.group.appendChild(d);

	this.animate(0);
}


XML3D.POI.prototype.initType = function(typeName) {
	var a = XML3D.createElement("asset");
	a.setAttribute("id", "asset_" + typeName);
	a.setAttribute("src", "resources/basic.xml#asset_poi");

	var ad = XML3D.createElement("assetdata");
	ad.setAttribute("name", "tf");
	a.appendChild(ad);

	var d = XML3D.createElement("data");
	d.setAttribute("src", "#poi_tf");
	ad.appendChild(d);
	
	var ad = XML3D.createElement("assetdata");
	ad.setAttribute("name", "config");
	a.appendChild(ad);
	
	var t = XML3D.createElement("texture");
	t.setAttribute("name", "diffuseTexture");
	ad.appendChild(t);

	var i = XML3D.createElement("img");
	i.setAttribute("src", "resources/poi-marker/" + typeName + ".png");
	t.appendChild(i);

	this.group.appendChild(a);
}


})();