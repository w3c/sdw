
var Xflow = Xflow || {};
var XML3D = XML3D || {};
	
(function() {


Xflow.registerOperator("xflow.planeXZ", {
    outputs: [
		{type: 'float3', name: 'out_position'}
	],
    params:  [
        {type: 'float2', source: 'in_position'}
    ],
    evaluate: function(out_position, in_position, info)
	{
        for (var i = 0; i < info.iterateCount; i++)
		{
            out_position[3*i  ] = in_position[2*i  ];
            out_position[3*i+1] = 0.0;
            out_position[3*i+2] = in_position[2*i+1];
        }
        return true;
    }
});


})();
