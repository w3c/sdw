
var Xflow = Xflow || {};
var XML3D = XML3D || {};
	
(function() {


Xflow.registerOperator("xflow.deindex", {
    outputs: [
		{type: 'float3', name: 'out_position', customAlloc: true}
	],
    params:  [
        { type: 'float3', source: 'position' },
        { type: 'int', source: 'index'}
    ],
    alloc: function(sizes, position, index)
    {
        sizes['out_position'] = index.length;
    },
	
    evaluate: function(out_position, position, index, info)
	{
        for (var i = 0; i < index.length; i++)
		{
			var idx = index[i];
            out_position[3*i  ] = position[3*idx  ];
            out_position[3*i+1] = position[3*idx+1];
            out_position[3*i+2] = position[3*idx+2];
        }

        return true;
    }
});


})();
