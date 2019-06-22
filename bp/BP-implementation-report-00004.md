# Spatial Data on the Web Best Practice Implementation Report

## Title
Ordnance Survey Names API

## Documentation root
[https://apidocs.os.uk/docs/os-names-overview](https://apidocs.os.uk/docs/os-names-overview)

## Description of service
OS Names API provides a geocoding convienience API for the discovery or identification of named places in Great Britain. The API can locate a feature using just its name, or it can find the closest location to a given point.
The data is also available in a [download](https://www.ordnancesurvey.co.uk/opendatadownload/products.html) distribution.

## Best Practice Scorecard

| #1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 | #12 | #13 | #14
---|---|---|---|---|---|---|---|---|---|---|---|---|---
| <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul>

### [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids)

#### Conformance statement 
 - Conforms 

Test | Conforms
---|---
Check that within the data [Spatial Things](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), such as countries, regions and people, are referred to by HTTP URIs or by short identifiers that can be converted to HTTP URIs. Ideally dereferencing the URIs should return the [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), however, they have value as globally scoped variables whether they dereference or not | <ul><li>- [x] </li></ul>


#### How-to
Each Spatial Thing in the geospatial reference dataset already has a persistent global identifier as a HTTP URI

For example:

```
{.....
  "NAMES_URI" : "http://data.ordnancesurvey.co.uk/id/4000000074564709",
  "NAME1" : "Southampton",
.....}
```

The id's resolve to individual landing pages for each Spatial Thing on OS' current [linked data service](http://data.ordnancesurvey.co.uk).

#### To-do

None.

### [Best Practice 2: Make your spatial data indexable by search engines](https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines)

#### Conformance statement 

- Conforms, but could be improved 

Test | Conforms
---|---
Using a Web browser, search for the landing page of your dataset | <ul><li>- [x] </li></ul>
Using a Web browser, check that you can browse to human-readable HTML pages for each [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing) that the dataset describes | <ul><li>- [x] </li></ul>

#### How-to
Each spatial thing and the dataset has a landing page via [OS Linked Data](http://data.ordnancesurvey.co.uk) however this does not return strongly in the search engine rankings and the [general product page](https://www.ordnancesurvey.co.uk/business-and-government/products/os-open-names.html]) returns higher.

#### To-do
In future the landing page could be merged with the product pages and the entire Linked Data site needs refreshing and modernising, as well as covering more data.

### [Best Practice 3: Link resources together to create the Web of Data](https://www.w3.org/TR/sdw-bp/#linking)

#### Conformance statement 
- Does not conform

Test | Conforms
---|---
Check that hyperlinks are distinguishable within the data — a string-literal that happens to contain a URL is insufficient | <ul><li>- [ ] </li></ul>
Check that hyperlinks use global identifiers, preferably HTTP URIs, to identify the link target | <ul><li>- [x] </li></ul>
Check that hyperlinks use typed relationships, and that the definition of the link relation type can be located in order to determine how to interpret the hyperlink | <ul><li>- [ ] </li></ul>

#### How-to

Links use HTTP URIs however do not use link relation types appropriately, and are string literals for example:

```
{...
"COUNTRY" : "England",
"COUNTRY_URI" : "http://data.ordnancesurvey.co.uk/id/country/england",
"SAME_AS_GEONAMES" : "http://sws.geonames.org/2637487"
....}
```

#### To-do
Links should use typed relationships and IANA relations consistently. In addition, to provide management of the API it requires an API key to access this. Future versions of this could include merging OS linked data landing pages and this convienience API.

### [Best Practice 4: Use spatial data encodings that match your target audience](https://www.w3.org/TR/sdw-bp/#semantic-thing)

#### Conformance statement 
 - Conforms, but could be improved 

Test | Conforms
---|---
Check if spatial data is encoded, so that it can be understood and re-used reliably | <ul><li>- [x] </li></ul>
Consider the main target audience or audiences of a web page or service, and check if spatial information is provided in a way appropriate for that audience | <ul><li>- [x] </li></ul>

#### How-to
Spatial data is encoded in JSON (not GeoJSON) which is easy to be used by the intended web developer users.

#### To-do

Conformance could be significantly improved by utilising GeoJSON as the encoding in this aspect. 

### [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry)

#### Conformance statement 
 - Conforms, but could be improved 

Test | Conforms
---|---
[Geometries](https://www.w3.org/TR/sdw-bp/#dfn-geometry) are made available in possibly different formats and levels of complexity, considering their intended uses and their consumption on the Web | <ul><li>- [ ] </li></ul>
The chosen [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions comply with [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries), [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice), and [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs) | <ul><li>- [x] </li></ul>
The (possibly) alternative [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions can be accessible via standard mechanisms, as HTTP content negotiation | <ul><li>- [ ] </li></ul>

#### How-to
Spatial data is provided in British National Grid, aligned to many of OS' users and provides both a point plus a bounding box for web maps to zoom into.
Multiple geometries are provided for each Spatial Thing - namely a point and minimum bounding box.

#### To-do
Conformance could be improved by providing the data in WGS84 and Web Mercator to improve the ease of use in web mapping clients - whether by use of the a parameter 

### [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries)

#### Conformance statement 
 - Conforms, but could be improved 

Test | Conforms
---|---
Check if the original and most detailed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data is available | <ul><li>- [x] </li></ul>
Check if a compressed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data can be obtained via HTTP content negotiation or other mechanisms | <ul><li>- [ ] </li></ul>
Check if centroids and bounding boxes are made available, without the need of downloading and processing the relevant [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data | <ul><li>- [x] </li></ul>
Check if it is possible to get a 2-dimensional representation of a 3-dimensional [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) | n/a
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different levels of precision, e.g., by allowing users to specify the maximum number of decimals in point coordinates | <ul><li>- [ ] </li></ul>
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different scales / spatial resolutions | <ul><li>- [ ] </li></ul>

#### How-to 
Multiple geometries have been provided (point and bounding box) and parameters on the convienience API can be used to either filter results of a specific bounding box, or bias the geocoding results so that certain Spatial Things have improved ranking in the results based on falling within the bounding box bias area.

#### To-do
Geometries have been provided to the meter level - appropriate for the precision of place names, road names and postcodes that the API contains, which is also the most detailed geometry available. However if most gazetteer or address data was available in future versions or similar OS APIs then further options around precision would be appropriate.

### [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice)

#### Conformance statement 
 - Does not conform

Test | Conforms
---|---
Check that [geospatial data](https://www.w3.org/TR/sdw-bp/#dfn-geographic-information-(also-geospatial-data)) (i.e. data about things located relative to the Earth) is available, as a minimum, in a global [coordinate reference system](https://www.w3.org/TR/sdw-bp/#dfn-coordinate-reference-system-(crs)): for vector data, this should be WGS 84 Lat/Long ([EPSG:4326](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4326)) or WGS 84 Lat/Long/Elevation ([EPSG:4979](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4979)); for raster data this should be Web Mercator ([EPSG:3857](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::3857)) | <ul><li>- [ ] </li></ul>

#### How-to
Spatial data is provided in British National Grid, aligned to many of OS' users

#### To-do
Conformance could be improved by providing the data in WGS84 and Web Mercator to improve the ease of use in web mapping clients - whether by use of the a parameter 

### [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs)

#### Conformance statement 
 - Confirms but could be improved

Test | Conforms
---|---
For a given [spatial data](https://www.w3.org/TR/sdw-bp/#dfn-spatial-data) publication, check that users can find information about the coordinate axes, their order and unit of measurement, plus the [datum](https://www.w3.org/TR/sdw-bp/#dfn-datum) used | <ul><li>- [x] </li></ul>

#### How-to
Whilst much of this is within the [API documentation](https://apidocs.os.uk/docs/os-names-find) it is not contained the payload itself.

#### To-do
This information could be contained in metadata around the payload as is the case for [OS Places](https://apidocs.os.uk/docs/os-places-service-metadata) our address verification convienience API, but would be best contained with the coordinates themselves.

### [Best Practice 9: Describe relative positioning](https://www.w3.org/TR/sdw-bp/#relative-position)

#### Conformance statement 
 - Conforms 

Test | Conforms?
---|---
Check that, when positions of entities are described as relative to other entities, these descriptions can be interpreted by a machine as well as humans, and the positions of the reference entities can be retrieved through their link relations. | <ul><li>- [x] </li></ul>

#### How-to
Only absolute positions are provided.

#### To-do
It is currently unclear how valuable, for example, links to "nearby" or "neighbouring"
Spatial Things would be, but it would be an option to include those, too. This is
related to Best Practices 3 and 10.

### [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links)

#### Conformance statement 
 - Conforms, but could be improved

Test | Conforms?
---|---
Check that hyperlinks use typed relationships, and that link relation type can be located in order to determine how to interpret the hyperlink. | <ul><li>- [ ] </li></ul>
Check that the source and target of the hyperlink are Spatial Things, unless the link relation type definition indicates that this should be otherwise (e.g. when relating a Spatial Thing to its geometry). | <ul><li>- [x] </li></ul>

#### How-to
Links are used to define the Spatial Things that contain that Spatial Thing, but the relationships are unclear without knowledge of the data. In addition a link to geonames is provided via a sameas:

```
{....
"SAME_AS_GEONAMES" : "http://sws.geonames.org/2637487"
....}

```

#### To-do
Clarity of relationships could be improved, using standard relationship types.

### [Best Practice 11: Provide information on the changing nature of spatial things](https://www.w3.org/TR/sdw-bp/#desc-changing-properties)

#### Conformance statement 
 - Does not conform 

Test | Conforms?
---|---
Information about a given [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), or set of Spatial Things, will be relevant for a particular time or time-period. Check that this information is stated. | <ul><li>- [ ] </li></ul>
Check that dataset metadata provides details about how often the dataset is updated; e.g. date of most recent publication, frequency of update. | <ul><li>- [ ] </li></ul>
If a version history of changes is available, check that [links](https://www.w3.org/TR/sdw-bp/#dfn-link) to previous versions are available. | n/a
If the Spatial Thing contains an attribute that varies with time, check that those attribute values are provided as a time-series. | n/a

#### How-to
The API itself does not provide information on when and how often the dataset is updated.

#### To-do
More metadata around the dataset itself could be provided in the resposne, including the date of update and change information on the individual Spatial Things

### [Best Practice 12: Expose spatial data through 'convenience APIs'](https://www.w3.org/TR/sdw-bp/#convenience-apis)

#### Conformance statement 
 - Conforms 

Test | Conforms?
---|---
Check if a test client can simulate calls and the API returns the expected responses. | <ul><li>- [x] </li></ul>
Check that the service avoids using http as a tunnel for calls to custom methods, and check that URIs do not contain method names. | <ul><li>- [x] </li></ul>
Check that every call enabled by your API is described in your documentation. Make sure you provide details of what parameters are required or optional and what each call returns. | <ul><li>- [x] </li></ul>
Check the Time To First Successful Call (i.e. being capable of doing a successful request to the API within a few minutes will increase the chances that the developer will stick to your API). | <ul><li>- [x] </li></ul>

#### How-to
The API is itself a convienience geocoding API, which utilises HTTPS GETs to a defined resources for geocoding and reverse geocoding. All calls and parameters are [documented](https://apidocs.os.uk/docs/os-names-find), including their optionality along with the data returned and examples.
The two resources within the API are operations performing a geocoding search, but this seems unavoidable given any geocoding request will inherently be invoking an operation to find Spatial Things that match the search criteria, rather than directly calling a Spatial Thing. However the links returned provide a direct HTTP link to that Spatial Thing at a unique global HTTP URI.

#### To-do
None.

### [Best Practice 13: Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata)

#### Conformance statement 
 - Conforms, but could be improved 

Test | Conforms?
---|---
Check if the spatial metadata for the dataset itself includes the overall features of the dataset in a human-readable format. | <ul><li>- [ ] </li></ul>
Check if the descriptive spatial metadata is available in a valid machine-readable format. | <ul><li>- [x] </li></ul>

#### How-to
The API itself is purely machine to machine, however the links within it resolve to human readable landing pages for individual Spatial Things.

#### To-do
The metadata included the API response could included a human readable description.

### [Best Practice 14: Describe the positional accuracy of spatial data](https://www.w3.org/TR/sdw-bp/#desc-accuracy)

#### Conformance statement 
 - Does not conform 

Test | Conforms?
---|---
Check if the metadata contains at least one human and machine readable statement regarding positional accuracy | <ul><li>- [ ] </li></ul>
Check that the kind of statement is relevant to the kind of data, e.g. not an absolute positional accuracy measure for Atlantis | <ul><li>- [ ] </li></ul>
Checking whether the accuracy statement is actually correct is beyond the scope of this best practice. | <ul><li>- [ ] </li></ul>

#### How-to
No data is published regarding the positional accuracy in the reference dataset.
