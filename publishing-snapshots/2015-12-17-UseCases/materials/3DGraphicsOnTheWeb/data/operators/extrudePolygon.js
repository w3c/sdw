
var Xflow = Xflow || {};
var XML3D = XML3D || {};
	
(function() {


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// ported from http://www.flipcode.com/archives/Efficient_Polygon_Triangulation.shtml
var Triangulate = function(contour) {
	
	this.contour = contour;
	// TODO: check whether the first and the last point are the same
	this.points = (this.contour.length / 3) - 1;
};


Triangulate.prototype.GetX = function(idx) {
	// TODO: check idx < this.points
	return this.contour[3*idx];
}

Triangulate.prototype.GetY = function(idx) {
	// TODO: check idx < this.points
	return this.contour[3*idx+2];
}

Triangulate.prototype.EPSILON = 0.0000000001;

// compute area of a contour/polygon
Triangulate.prototype.Area = function(V)
{
	var n = V.length; // this.points;
	var A = 0.0;

	for (var p=n-1, q=0; q<n; p=q++)
		A += this.GetX(V[p])*this.GetY(V[q]) - this.GetX(V[q])*this.GetY(V[p]);
	
	return 0.5*A;
}


// InsideTriangle decides if a point P is Inside of the triangle
// defined by A, B, C.
Triangulate.prototype.InsideTriangle = function(
	Ax, Ay, Bx, By, Cx, Cy,
	Px, Py
){
	var ax, ay, bx, by, cx, cy, apx, apy, bpx, bpy, cpx, cpy;
	var cCROSSap, bCROSScp, aCROSSbp;

	ax = Cx - Bx;  ay = Cy - By;
	bx = Ax - Cx;  by = Ay - Cy;
	cx = Bx - Ax;  cy = By - Ay;
	apx= Px - Ax;  apy= Py - Ay;
	bpx= Px - Bx;  bpy= Py - By;
	cpx= Px - Cx;  cpy= Py - Cy;

	aCROSSbp = ax*bpy - ay*bpx;
	cCROSSap = cx*apy - cy*apx;
	bCROSScp = bx*cpy - by*cpx;

	return ((aCROSSbp >= 0.0) && (bCROSScp >= 0.0) && (cCROSSap >= 0.0));
};


Triangulate.prototype.Snip = function(
	u, v, w,
	n, V
) {
	var p;
	var Ax, Ay, Bx, By, Cx, Cy, Px, Py;

	Ax = this.GetX(V[u]);
	Ay = this.GetY(V[u]);

	Bx = this.GetX(V[v]);
	By = this.GetY(V[v]);

	Cx = this.GetX(V[w]);
	Cy = this.GetY(V[w]);

	if (this.EPSILON > (((Bx-Ax)*(Cy-Ay)) - ((By-Ay)*(Cx-Ax))))
		return false;

	for (p=0; p<n; p++)
	{
		if( (p == u) || (p == v) || (p == w) )
			continue;
		
		Px = this.GetX(V[p]);
		Py = this.GetY(V[p]);

		if (this.InsideTriangle(Ax,Ay, Bx,By, Cx,Cy, Px,Py))
			return false;
	}

	return true;
}

Triangulate.prototype.Process = function(
	result, U
) {

	// allocate and initialize list of Vertices in polygon
	var n = this.points;
	if (n < 3)
		return false;

	// TODO: use typed array
	if (U == null) {
		U = new Array(n);
		for (var v=0; v<n; v++) U[v] = v;
	} else {
		this.points = n = U.length;
	}

	var V = new Array(n);
	// we want a counter-clockwise polygon in V
	if (0.0 < this.Area(U)) {
		for (var v=0; v<n; v++) V[v] = U[v];
	} else {
		for (var v=0; v<n; v++) V[v] = U[(n-1)-v];
	}

	var nv = n;

	// remove nv-2 Vertices, creating 1 triangle every time
	var count = 2*nv;   // error detection

	for (var m=0, v=nv-1; nv>2; )
	{
		// if we loop, it is probably a non-simple polygon
		if (0 >= (count--)) {
			// Triangulate: ERROR - probable bad polygon!
			return false;
		}

		// three consecutive vertices in current polygon, <u,v,w>
		var u = v; if (nv <= u) u = 0;    // previous
		v = u+1; if (nv <= v) v = 0;      // new v
		var w = v+1; if (nv <= w) w = 0;  // next

		if (this.Snip(u, v, w, nv, V))
		{
			var a,b,c,s,t;

			// true names of the vertices
			a = V[u]; b = V[v]; c = V[w];

			// output Triangle
			result.push(a);
			result.push(c);
			result.push(b);

			m++;

			// remove v from remaining polygon
			for (s=v, t=v+1; t<nv; s++, t++) V[s] = V[t]; nv--;

			// reset error detection counter
			count = 2*nv;
		}
	}

	return true;
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


Xflow.registerOperator("xflow.extrudePolygon", {
    outputs: [
		{type: 'float3', name: 'position', customAlloc: true},
		{type: 'int', name: 'index', customAlloc: true}
	],
    params:  [
        {type: 'float3', source: 'contour'},
        {type: 'float', source: 'height'}
    ],
    alloc: function(sizes, contour, height)
    {
		var points = (contour.length / 3) - 1;
        sizes['position'] = 2 * points;
		
		var wall_points = 2 * 3 * points;

		// TODO: use noAlloc: true for indices
		var tri = new Triangulate(contour);
		var result = new Array();
		tri.Process(result);
		var roof_points = result.length;
		
        sizes['index'] = wall_points + roof_points;
    },
	
    evaluate: function(position, index, contour, height, info)
	{
		var points = (contour.length / 3) - 1;
		var nv = (position.length / 3);
		// TODO: check 2*points == nv
		// console.log("points:" + points);
		// console.log("nv:" + nv);

		// clone contour points
        for (var i = 0; i < points; i++)
		{
            position[6*i  ] = contour[3*i  ];
            position[6*i+1] = contour[3*i+1];
            position[6*i+2] = contour[3*i+2];

            position[6*i+3] = contour[3*i  ];
            position[6*i+4] = contour[3*i+1] + height[0];
            position[6*i+5] = contour[3*i+2];
        }

		

		// generate indices for the walls
        for (var i = 0; i < points; i++)
		{
			var tp =  2* i;
			var np = (2*(i+1)) % nv;
			
			// TODO: check order in terms of cracks caused by interpolation issues
            index[6*i  ] = tp+1;
            index[6*i+1] = np;
            index[6*i+2] = tp;
			
            index[6*i+3] = np;
            index[6*i+4] = tp+1;
            index[6*i+5] = np+1;
		}
		
		// generate indices for the roof
		// console.log("position.length:" + position.length);
		var tri = new Triangulate(position);
		var result = new Array();
		// use every odd point from position, which is the upper contour
		var V = new Array();
		for (var i = 1; i < nv; i+=2) V.push(i);
		tri.Process(result, V);
		
		// console.log("V:" + V);
		// console.log("result:" + result);
		// console.log("index.length:" + index.length);
		
		var offset = 6*points;
		// console.log("offset:" + offset);
		for (var i = 0; i < result.length; i++)
			index[offset+i] = result[i];
		
        return true;
    }
});


})();
