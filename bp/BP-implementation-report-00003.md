# Spatial Data on the Web Best Practice Implementation Report

## Title
Spatial Data on the Web Demonstrator for Cadastral and Topographic data in North-Rhine Westphalia

## Documentation root
[https://www.ldproxy.nrw.de/](https://www.ldproxy.nrw.de/)

## Description of service
The geospatial reference data of the surveying and cadastral administration of
North-Rhine Westphalia, Germany, became open data in 2017. The data is provided [in different distributions, depending on the dataset](https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/opendata/index.html). This includes bulk download, data access services and view services (data rendered as bitmap images). Data access and view services are based on current versions of the OGC standards WFS, WCS, WMS and WMTS.

With the publication of the W3C/OGC Spatial Data on the Web Best Practices an activity was launched to explore how selected datasets could be published in accordance with the best practices and evaluate, if this simplifies the use of the data. 

A demonstrator has been developed for this purpose in 2017. It will be updated in 2018 with additional capabilities. The current implementation conforms to the [draft WFS 3.0 Core standard](https://cdn.rawgit.com/opengeospatial/WFS_FES/3.0.0-draft.1/docs/17-069.html) and the development has provided input into the drafting of the specification.

The implementation uses [ldproxy](http://interactive-instruments.github.io/ldproxy/),
a Spatial Data on the Web / WFS 3.0 proxy on top of WFS 2.0 instances. That is, the
demonstrator is a facade to the existing WFS 2.0 services for selected open datasets
in North-Rhine Westphalia.

Note: As this is a German implementation most of the information is in German.

## Best Practice Scorecard

| #1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 | #12 | #13 | #14
---|---|---|---|---|---|---|---|---|---|---|---|---|---
| <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul>

### [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids)

#### Conformance statement
Conforms

#### How-to
Each Spatial Thing in the geospatial reference datasets already has a persistent
local identifier. The identifier is also used for implementing incremental updates and to
manage different versions of the same Spatial Thing. This local identifier is used as the
feature identifier in the WFS 3.0 URI template.

An example: [https://www.ldproxy.nrw.de/rest/services/topographie/collections/ax_flugverkehr/items/DENWAT01D000DDUA](https://www.ldproxy.nrw.de/topographie/collections/ax_flugverkehr/items/DENWAT01D000DDUA?f=html)

More information on identifiers is available in the national specification [GeoInfoDok 6.0.1, section 3.3.10](http://www.adv-online.de/Publications/AFIS-ALKIS-ATKIS-Project/binarywriterservlet?imgUid=8df46f15-1ff9-f216-afd6-ff3072e13d63&uBasVariant=11111111-1111-1111-1111-111111111111).

#### To-do
The current URL is a demonstrator URL and not the final, persistent one. For example, it currently includes "ldproxy", the name of the tool.

The URLs may also change, if the URI template specified by WFS 3.0 will change before the
standard is finalized.

### [Best Practice 2: Make your spatial data indexable by search engines](https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines)

#### Conformance statement
Conforms

#### How-to
Every resource including each Spatial Thing is linked from the landing page (directly or
indirectly). The Spatial Things are available in different feature collections depending
on the type of the thing. Since some collections contain several millions of Spatial 
Things, the access is in manageable chunks ("pages") that can be browsed with previous/next links. [This example](https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items/?f=html&offset=890) is page 90 of the cadastral parcel collection.

The HTML includes schema.org annotations. [This is an example](https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Fwww.ldproxy.nrw.de%2Ftopographie%2Fcollections%2Fax_bahnverkehrsanlage%2Fitems%2FDENWAT01D000AbNu), using the Google Structured Data Testing Tool.

#### To-do
Understanding the indexing of spatial datasets with millions of Spatial Things by search engines requires more research. Currently only a small subset of the resources are indexed.

### [Best Practice 3: Link resources together to create the Web of Data](https://www.w3.org/TR/sdw-bp/#linking)

#### Conformance statement
Conforms, but could be improved

#### How-to
All resources are linked using global, open HTTP URIs. The approach to linking follows
the WFS 3.0 specification and uses IANA link relations consistently ([an
example](https://www.ldproxy.nrw.de/rest/services/topographie/collections/ax_bahnverkehrsanlage/items/DENWAT01D000AbNu?f=json) 
of a feature in GeoJSON with links as an additional member). 

#### To-do
The Spatial Things currently do not include links to related information or to 
actions related to the Spatial Things. Add such links would make the data more useful.

### [Best Practice 4: Use spatial data encodings that match your target audience](https://www.w3.org/TR/sdw-bp/#semantic-thing)

#### Conformance statement
Conforms

#### How-to
As the data is reference data that other information can build upon and reference, the
target use (and audience) is broad: The idea is that the data /API could be used by 
developers in web applications (once it is no longer a demonstrator), in GIS clients or 
just explored in a web browser.

To cover these use cases and the different tools that developers may want to use, both 
JSON and XML are supported for all resources (feature data in GeoJSON and GML). In
addition, all resources are also published in HTML for consumption by humans (and 
crawlers). In the HTML, all coded values are resolved into labels that are meaningful for
human readers.

#### To-do
In addition, a representation that renders Spatial Things in a map image (using
the available view services) could be added, but this requires more analysis.

### [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry)

#### Conformance statement
Conforms

#### How-to
Several formats are supported, see Best Practice 4. HTTP content negotiation is supported
to select the desired representation. 

The geometries are restricted to those that conform to the OGC Simple Feature standard.
These geometries have broad support in tools and libraries.

WGS 84 with longitude/latitude is used as the coordinate reference system. Again, this global system has good support in tools and libraries.

In addition, some data has been interpolated for use in maps at larger scales, see also 
Best Practice 6.

#### To-do
Support also the coordinate reference systems used by the German surveying and cadastral administration, see Best Practice 7.

### [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries)

#### Conformance statement
Conforms, but could be improved

#### How-to
The cadastral and topographic data is the original and most detailed version available. 

The administrative areas are also available for display in maps at a smaller scale to 
reduce the data volume. 

#### To-do
For WFS 3.0, extensions are planned to support automated generalisation via the API 
(return data for specific scale levels) and "projection" of the results (e.g., return 
only selected properties). Once available, these extensions would improve the support
for this best practice.

### [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice)

#### Conformance statement
Conforms, but could be improved.

#### How-to
WGS 84 is supported.

#### To-do
Support also the coordinate reference systems used by the German surveying and cadastral administration and in INSPIRE as these systems is often used in other German or European
spatial datasets. This is planned for 2018.

### [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs)

#### Conformance statement
Conforms

#### How-to
The information is documented in the API documentation and in the HTML footer.

#### To-do
See Best Practice 7.

### [Best Practice 9: Describe relative positioning](https://www.w3.org/TR/sdw-bp/#relative-position)

#### Conformance statement
Does not conform

#### How-to
Only absolute positions are provided.

#### To-do
It is currently unclear how valuable, for example, links to "nearby" or "neighbouring" 
Spatial Things would be, but it would be an option to include those, too. This is 
related to Best Practices 3 and 10.

### [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links)

#### Conformance statement
Does not conform

#### How-to
Typed relationships are used (see Best Practice 3), but none of them are spatial. 

#### To-do
See Best Practice 9.

### [Best Practice 11: Provide information on the changing nature of spatial things](https://www.w3.org/TR/sdw-bp/#desc-changing-properties)

#### Conformance statement
Conforms, but could be improved

#### How-to
The published datasets currently include the latest version of information about the Spatial Things. Attributes are used to describe the temporal validity of the version.

More information on versions of Spatial Things in the dataset is available in the national specification [GeoInfoDok 6.0.1, section 3.4](http://www.adv-online.de/Publications/AFIS-ALKIS-ATKIS-Project/binarywriterservlet?imgUid=8df46f15-1ff9-f216-afd6-ff3072e13d63&uBasVariant=11111111-1111-1111-1111-111111111111).

#### To-do
In the OGC Testbed 14, which runs until the end of 2018, an activity explores how the 
WFS 3.0 approach could support more advanced requirements like information about 
the changing nature of spatial things.
[Here](https://rawgit.com/opengeospatial/D040-Complex_Feature_Handling_Engineering_Report/master/18-021.html#uc-versions) 
is a link to a related use case.

If supported by WFS 3.0 in the future, historic data / outdated versions of 
Spatial Things could be published via the API, too.

### [Best Practice 12: Expose spatial data through 'convenience APIs'](https://www.w3.org/TR/sdw-bp/#convenience-apis)

#### Conformance statement
Conforms

#### How-to
As described in Best Practice 4, the data is provided for general use. For this purpose, 
the current WFS-3.0-based API so far seems to be an appropriate API. It supports all 
aspects listed in "possible approaches to implementation" in the Best Practice document.

In addition, the relevant API best practices from the Data on the Web Best Practices are 
supported, too. The use of OpenAPI is a key aspect of this.

### [Best Practice 13: Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata)

#### Conformance statement
Conforms

#### How-to
Spatial extent, temporal extent, and the schema of the Spatial Things and their 
properties are described and published.

#### To-do
If available and important for the integration in e-government data portals, 
a DCAT representation of dataset metadata could be referenced.

If the WFS 2.0 would provide links to dataset metadata, this could be referenced, too.
Currently, only a link to the service metadata is provided.

### [Best Practice 14: Describe the positional accuracy of spatial data](https://www.w3.org/TR/sdw-bp/#desc-accuracy)

#### Conformance statement
Does not conform

#### How-to
No information is available in the data published via the WFS 2.0 instances, which 
are the data source.
