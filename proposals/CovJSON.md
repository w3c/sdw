
Jon Blower and Maik Riechert of Reading University developed a draft CovJSON proposal, encompassing an encoding scheme for making multi-dimensional gridded environmental data readily available to user-orientated client software, such as a modern JavaScript enabled browsers [1]. 

They also developed a 'Sandbox' environment so that users and developers could explore the possibilities of the encoding with realistic environmental datasets [2].

There are also implementations in Java for use with a specific OGC Web Map Server [3] and in Python for converting from a variety of scientific data formats [4].

The work was presented to, and discussed in, the OGC Technical Committee and the Coverage Standard Working Group. It was not clear at the time on the best approach for JSON encodings that did not fit the more legacy client-server approach, with a strictly defined UML/XML conceptual of the well-established OGC and ISO standards.

One focus of technical discussion was around to decision to use a JSON single dimension array with appropriate counters to store and access a multidimensional grid. This has the advantage of keeping the JSON structure simple and efficient for moderately large data volumes, and avoiding the bloat of the object nesting mechanisms of JSON.

Jon Blower is supportive of an appropriate initiative to standardise CovJSON, but is not resourced to do the necessary time consuming collaboration and consensus building.

This proposal is to agree on the appropriate way forward and Standards Development Organisation to use.

[1] https://covjson.org/ 

[2] https://covjson.org/playground/ 

[3] https://reading-escience-centre.gitbooks.io/ncwms-user-guide/content/ 

[4] https://github.com/Reading-eScience-Centre/pycovjson 
