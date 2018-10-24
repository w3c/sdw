# Spatial Data on the Web Best Practice Implementation Report

## Title
TITLE

## Documentation root
[LINK TO SERVICE](LINK)

## Description of service
DESCRIPTION OF SERVICE

## Best Practice Scorecard

| #1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 | #12 | #13 | #14
---|---|---|---|---|---|---|---|---|---|---|---|---|---
| <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul>

### [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
Check that within the data [Spatial Things](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), such as countries, regions and people, are referred to by HTTP URIs or by short identifiers that can be converted to HTTP URIs. Ideally dereferencing the URIs should return the [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), however, they have value as globally scoped variables whether they dereference or not | <ul><li>- [x] </li></ul>


#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 2: Make your spatial data indexable by search engines](https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
Using a Web browser, search for the landing page of your dataset | <ul><li>- [x] </li></ul>
Using a Web browser, check that you can browse to human-readable HTML pages for each [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing) that the dataset describes | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 3: Link resources together to create the Web of Data](https://www.w3.org/TR/sdw-bp/#linking)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
Check that hyperlinks are distinguishable within the data — a string-literal that happens to contain a URL is insufficient | <ul><li>- [x] </li></ul>
Check that hyperlinks use global identifiers, preferably HTTP URIs, to identify the link target | <ul><li>- [x] </li></ul>
Check that hyperlinks use typed relationships, and that the definition of the link relation type can be located in order to determine how to interpret the hyperlink | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 4: Use spatial data encodings that match your target audience](https://www.w3.org/TR/sdw-bp/#semantic-thing)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
Check if spatial data is encoded, so that it can be understood and re-used reliably | <ul><li>- [x] </li></ul>
Consider the main target audience or audiences of a web page or service, and check if spatial information is provided in a way appropriate for that audience | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
[Geometries](https://www.w3.org/TR/sdw-bp/#dfn-geometry) are made available in possibly different formats and levels of complexity, considering their intended uses and their consumption on the Web | <ul><li>- [x] </li></ul>
The chosen [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions comply with [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries), [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice), and [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs) | <ul><li>- [x] </li></ul>
The (possibly) alternative [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions can be accessible via standard mechanisms, as HTTP content negotiation | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
Check if the original and most detailed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data is available | <ul><li>- [x] </li></ul>
Check if a compressed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data can be obtained via HTTP content negotiation or other mechanisms | <ul><li>- [ ] </li></ul>
Check if centroids and bounding boxes are made available, without the need of downloading and processing the relevant [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data | <ul><li>- [ ] </li></ul>
Check if it is possible to get a 2-dimensional representation of a 3-dimensional [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) | n/a
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different levels of precision, e.g., by allowing users to specify the maximum number of decimals in point coordinates | <ul><li>- [ ] </li></ul>
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different scales / spatial resolutions | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
Check that [geospatial data](https://www.w3.org/TR/sdw-bp/#dfn-geographic-information-(also-geospatial-data)) (i.e. data about things located relative to the Earth) is available, as a minimum, in a global [coordinate reference system](https://www.w3.org/TR/sdw-bp/#dfn-coordinate-reference-system-(crs)): for vector data, this should be WGS 84 Lat/Long ([EPSG:4326](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4326)) or WGS 84 Lat/Long/Elevation ([EPSG:4979](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4979)); for raster data this should be Web Mercator ([EPSG:3857](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::3857)) | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms
---|---
For a given [spatial data](https://www.w3.org/TR/sdw-bp/#dfn-spatial-data) publication, check that users can find information about the coordinate axes, their order and unit of measurement, plus the [datum](https://www.w3.org/TR/sdw-bp/#dfn-datum) used | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 9: Describe relative positioning](https://www.w3.org/TR/sdw-bp/#relative-position)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms?
---|---
Check that, when positions of entities are described as relative to other entities, these descriptions can be interpreted by a machine as well as humans, and the positions of the reference entities can be retrieved through their link relations. | <ul><li>- [ ] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms?
---|---
Check that hyperlinks use typed relationships, and that link relation type can be located in order to determine how to interpret the hyperlink. | <ul><li>- [x] </li></ul>
Check that the source and target of the hyperlink are Spatial Things, unless the link relation type definition indicates that this should be otherwise (e.g. when relating a Spatial Thing to its geometry). | <ul><li>- [ ] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 11: Provide information on the changing nature of spatial things](https://www.w3.org/TR/sdw-bp/#desc-changing-properties)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms?
---|---
Information about a given [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), or set of Spatial Things, will be relevant for a particular time or time-period. Check that this information is stated. | <ul><li>- [x] </li></ul>
Check that dataset metadata provides details about how often the dataset is updated; e.g. date of most recent publication, frequency of update. | <ul><li>- [ ] </li></ul>
If a version history of changes is available, check that [links](https://www.w3.org/TR/sdw-bp/#dfn-link) to previous versions are available. | n/a
If the Spatial Thing contains an attribute that varies with time, check that those attribute values are provided as a time-series. | n/a

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 12: Expose spatial data through 'convenience APIs'](https://www.w3.org/TR/sdw-bp/#convenience-apis)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms?
---|---
Check if a test client can simulate calls and the API returns the expected responses. | <ul><li>- [x] </li></ul>
Check that the service avoids using http as a tunnel for calls to custom methods, and check that URIs do not contain method names. | <ul><li>- [x] </li></ul>
Check that every call enabled by your API is described in your documentation. Make sure you provide details of what parameters are required or optional and what each call returns. | <ul><li>- [x] </li></ul>
Check the Time To First Successful Call (i.e. being capable of doing a successful request to the API within a few minutes will increase the chances that the developer will stick to your API). | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 13: Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms?
---|---
Check if the spatial metadata for the dataset itself includes the overall features of the dataset in a human-readable format. | <ul><li>- [x] </li></ul>
Check if the descriptive spatial metadata is available in a valid machine-readable format. | <ul><li>- [x] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?

### [Best Practice 14: Describe the positional accuracy of spatial data](https://www.w3.org/TR/sdw-bp/#desc-accuracy)

#### Conformance statement 
 - Conforms 
 - Conforms, but could be improved 
 - Does not conform 

Test | Conforms?
---|---
Check if the metadata contains at least one human and machine readable statement regarding positional accuracy | <ul><li>- [ ] </li></ul>
Check that the kind of statement is relevant to the kind of data, e.g. not an absolute positional accuracy measure for Atlantis | <ul><li>- [ ] </li></ul>
Checking whether the accuracy statement is actually correct is beyond the scope of this best practice. | <ul><li>- [ ] </li></ul>

#### How-to
HOW HAS CONFORMANCE BEEN ACHIEVED

#### To-do
ANYTHING TO DO?
