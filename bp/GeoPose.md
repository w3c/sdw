All physical world objects inherently have a geographically-anchored pose. A real object in space can have three components of translation – up and down (z), left and right (x) and forward and backward (y) and three components of rotation – Pitch, Roll and Yaw. Hence the real object has six degrees of freedom.

The combination of position and orientation with 6 degrees of freedom of objects in computer graphics and robotics are usually referred to as the object’s “pose.” Pose can be expressed as being in relation to other objects and/or to the user. Some part of the object must be recognized as the anchor (or origin) of the position. When a pose is defined relative to a geographical frame of reference or coordinate system, it will be called a geographically-anchored pose, or GeoPose for short.  

When a person seeks to view spatial data on the web, they may wish to see information or a map in position and oriented with respect to the observer (or another view point). Providing the view point's location and orientation with respect to a desired person, place or a thing (which also has a GeoPose) will permit the resulting perspective to accurately reflect the observer and the focus of attention in their respective positions and orientations.

Unfortunately, there is no standard for universally expressing the geographically-anchored pose in a manner which can be interpreted and used by modern computing platforms. 

The purpose of the GeoPose SWG is to develop a standard for geographically-anchored pose (GeoPose) with 6 degrees of freedom referenced to one or more standardized Coordinate Reference Systems (CRSs).

In addition to the standard, the GeoPose SWG is developing guides for reviewers and implementers of GeoPose. 

For more information, the GeoPose SWG description is found [here](https://www.ogc.org/projects/groups/geoposeswg). The draft specification and all work is being conducted in the open on the [GeoPose SWG GitHub repository](https://github.com/opengeospatial/GeoPose). The [GeoPose web site](http://www.geopose.org) will be published shortly.
