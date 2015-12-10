
var Xflow = Xflow || {};
var XML3D = XML3D || {};
	
(function() {


Xflow.registerOperator("xflow.ensureCCWContour", {
    outputs: [
		{type: 'float2', name: 'out_contour'}
	],
    params:  [
        {type: 'float2', source: 'in_contour'}
    ],
    evaluate: function(out_contour, in_contour, info)
	{

		var n = info.iterateCount; // this.points;
		var tn = 2*n;
		var A = 0.0;

		for (var p=n-1, q=0; q<n; p=q++)
			A += in_contour[2*p]*in_contour[2*q+1] - in_contour[2*q]*in_contour[2*p+1];
	
		if (0.5*A < 0.0) {
			// reverse order of vertices
			for (var i = 0; i < tn; i+=2) {
				out_contour[i  ] = in_contour[tn-i-2];
				out_contour[i+1] = in_contour[tn-i-1];
			}
			
		} else {
			// leave order as it is
			for (var i = 0; i < tn; i+=2) {
				out_contour[i  ] = in_contour[i  ];
				out_contour[i+1] = in_contour[i+1];
			}
			
		}

		return true;
    }
});


})();
