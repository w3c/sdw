
var Xflow = Xflow || {};
var XML3D = XML3D || {};
	
(function() {


Xflow.registerOperator("xflow.generateFaceNormal", {
    outputs: [
		{type: 'float3', name: 'normal'}
	],
    params:  [
        {type: 'float3', source: 'position'}
    ],
    evaluate: function(normal, position, info)
	{
		for (var i = 0; i < info.iterateCount; i+=3)
		{
			var A = 3* i;
			var B = 3*(i+1);
			var C = 3*(i+2);
			
			var Ax = position[A  ];
			var Ay = position[A+1];
			var Az = position[A+2];

			var Bx = position[B  ];
			var By = position[B+1];
			var Bz = position[B+2];

			var Cx = position[C  ];
			var Cy = position[C+1];
			var Cz = position[C+2];
			
			var Ux = Bx - Ax;
			var Uy = By - Ay;
			var Uz = Bz - Az;
			
			var Vx = Cx - Ax;
			var Vy = Cy - Ay;
			var Vz = Cz - Az;
			
			var N = [
				Uy*Vz - Uz*Vy,
				Uz*Vx - Ux*Vz,
				Ux*Vy - Uy*Vx
			];
			
			// normalize
			var l = Math.sqrt(N[0]*N[0]+N[1]*N[1]+N[2]*N[2]);
			for (var j=0; j<3; j++) N[j] = N[j] / l;
			
			for (var j=0; j<3; j++) {
				normal[A+j] = N[j];
				normal[B+j] = N[j];
				normal[C+j] = N[j];
			}
        }
		return true;
    }
});


})();
