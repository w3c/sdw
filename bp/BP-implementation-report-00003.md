# Spatial Data on the Web Best Practice Implementation Report

## Title
Spatial Data on the Web Demonstrator for Cadastral and Topographic data in North-Rhine Westphalia

## Documentation root
[https://www.ldproxy.nrw.de/](https://www.ldproxy.nrw.de/)

## Description of service
The geospatial reference data of the surveying and cadastral administration of
North-Rhine Westphalia, Germany, became open data in 2017. The data is provided [in different distributions, depending on the dataset](https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/opendata/index.html). This includes bulk download, data access services and view services (data rendered as bitmap images). Data access and view services are based on current versions of the OGC standards WFS, WCS, WMS and WMTS.

With the publication of the W3C/OGC Spatial Data on the Web Best Practices an activity was launched to explore how selected datasets could be published in accordance with the best practices and evaluate, if this simplifies the use of the data.

A demonstrator has been developed for this purpose in 2017. It has been updated in 2018 with additional capabilities, for example support for additional coordinate reference systems. The current implementation conforms to the [draft WFS 3.0 Core standard](https://cdn.rawgit.com/opengeospatial/WFS_FES/3.0.0-draft.1/docs/17-069.html) and the development has provided input into the drafting of the specification.

The implementation uses [ldproxy](http://interactive-instruments.github.io/ldproxy/),
a Spatial Data on the Web / WFS 3.0 proxy on top of WFS 2.0 instances. That is, the
demonstrator is a facade to the existing WFS 2.0 services for selected open datasets in
North-Rhine Westphalia. The WFS 2.0 services are part of the existing spatial data
infrastructure in North-Rhine Westphalia. See the overview figure below.

![Implementing the Best Practies on the basis of the existing infrastructure](http://portele.de/ldproxy-nrw.png "Implementing the Best Practies on the basis of the existing infrastructure")

Some examples and more information is also included in the
[implementations section in the WFS 3.0 repository](https://github.com/opengeospatial/WFS_FES/blob/master/implementations.md#interactive-instruments).

Note: As this is a German implementation most of the information is in German.

## Best Practice Scorecard

| #1 | #2 | #3 | #4 | #5 | #6 | #7 | #8 | #9 | #10 | #11 | #12 | #13 | #14
---|---|---|---|---|---|---|---|---|---|---|---|---|---
| <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [x] </li></ul> | <ul><li>- [ ] </li></ul>

### [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check that within the data [Spatial Things](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), such as countries, regions and people, are referred to by HTTP URIs or by short identifiers that can be converted to HTTP URIs. Ideally dereferencing the URIs should return the [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), however, they have value as globally scoped variables whether they dereference or not | <ul><li>- [x] </li></ul>


#### How-to
Each Spatial Thing in the geospatial reference datasets already has a persistent
local identifier. The identifier is also used for implementing incremental updates and to
manage different versions of the same Spatial Thing. This local identifier is used as the
feature identifier in the WFS 3.0 URI template.

An example: [https://www.ldproxy.nrw.de/topographie/collections/ax_flugverkehr/items/DENWAT01D000DDUA?f=html](https://www.ldproxy.nrw.de/topographie/collections/ax_flugverkehr/items/DENWAT01D000DDUA?f=html)

More information on identifiers is available in the national specification [GeoInfoDok 6.0.1, section 3.3.10](http://www.adv-online.de/Publications/AFIS-ALKIS-ATKIS-Project/binarywriterservlet?imgUid=8df46f15-1ff9-f216-afd6-ff3072e13d63&uBasVariant=11111111-1111-1111-1111-111111111111).

#### To-do
The current URL is a demonstrator URL and not the final, persistent one. For example, it currently includes "ldproxy", the name of the tool.

The URLs may also change, if the URI template specified by WFS 3.0 will change before the
standard is finalized.

### [Best Practice 2: Make your spatial data indexable by search engines](https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines)

#### Conformance statement
Conforms

Test | Conforms
---|---
Using a Web browser, search for the landing page of your dataset | <ul><li>- [x] </li></ul>
Using a Web browser, check that you can browse to human-readable HTML pages for each [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing) that the dataset describes | <ul><li>- [x] </li></ul>

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

Test | Conforms
---|---
Check that hyperlinks are distinguishable within the data — a string-literal that happens to contain a URL is insufficient | <ul><li>- [x] </li></ul>
Check that hyperlinks use global identifiers, preferably HTTP URIs, to identify the link target | <ul><li>- [x] </li></ul>
Check that hyperlinks use typed relationships, and that the definition of the link relation type can be located in order to determine how to interpret the hyperlink | <ul><li>- [x] </li></ul>

#### How-to
All resources are linked using global, open HTTP URIs. The approach to linking follows
the WFS 3.0 specification and uses IANA link relations consistently ([an
example](https://www.ldproxy.nrw.de/topographie/collections/ax_bahnverkehrsanlage/items/DENWAT01D000AbNu?f=json)
of a feature in GeoJSON with links as an additional member).

#### To-do
In general, the Spatial Things currently do not include links to related information or to
actions related to the Spatial Things. Adding such links would make the data more useful.

Some experimental links have been added in the cadastral parcel data.
In the HTML representation, the properties for the different levels of administrative
units (municipality and higher level units) are links to the Wikipedia page for
the unit. And the cadastral district ("Gemarkung") links to the web site of the
authority responsible for the cadastral parcel. [An example](https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items/DENW36AL10005X65FL?f=html).

### [Best Practice 4: Use spatial data encodings that match your target audience](https://www.w3.org/TR/sdw-bp/#semantic-thing)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check if spatial data is encoded, so that it can be understood and re-used reliably | <ul><li>- [x] </li></ul>
Consider the main target audience or audiences of a web page or service, and check if spatial information is provided in a way appropriate for that audience | <ul><li>- [x] </li></ul>

#### How-to
As the data is reference data that other information can build upon and reference, the
target use (and audience) is broad: The idea is that the data/API could be used by
developers in web applications (once it is no longer a demonstrator), in GIS clients or
just explored in a web browser.

To cover these use cases and the different tools that developers may want to use, both
JSON and XML are supported for all resources (feature data in GeoJSON and GML). In
addition, all resources are also published in HTML for consumption by humans (and
crawlers). In the HTML, all coded values are resolved into labels that are meaningful for
human readers.

#### To-do
In addition, a representation that renders all Spatial Things of a dataset or
collection in a map could be added. This could also leverage Mapbox Vector Tiles
as it is explored in the
[OGC Vector Tiles Pilot](http://www.opengeospatial.org/projects/initiatives/vt-pilot-2018).

### [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry)

#### Conformance statement
Conforms

Test | Conforms
---|---
[Geometries](https://www.w3.org/TR/sdw-bp/#dfn-geometry) are made available in possibly different formats and levels of complexity, considering their intended uses and their consumption on the Web | <ul><li>- [x] </li></ul>
The chosen [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions comply with [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries), [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice), and [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs) | <ul><li>- [x] </li></ul>
The (possibly) alternative [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions can be accessible via standard mechanisms, as HTTP content negotiation | <ul><li>- [x] </li></ul>

#### How-to
Several formats are supported, see Best Practice 4. HTTP content negotiation is supported
to select the desired representation.

The geometries are restricted to those that conform to the OGC Simple Feature standard.
These geometries have broad support in tools and libraries.

WGS 84 with longitude/latitude is used as the coordinate reference system. Again, this global system has good support in tools and libraries.

In addition, other coordinate reference systems used by the German surveying and
cadastral administration and by INSPIRE are supported as well, see Best Practice 7.

In addition, some data has been interpolated for use in maps at larger scales, see also
Best Practice 6.

#### To-do
n/a

### [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries)

#### Conformance statement
Conforms, but could be improved

Test | Conforms
---|---
Check if the original and most detailed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data is available | <ul><li>- [x] </li></ul>
Check if a compressed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data can be obtained via HTTP content negotiation or other mechanisms | <ul><li>- [ ] </li></ul>
Check if centroids and bounding boxes are made available, without the need of downloading and processing the relevant [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data | <ul><li>- [ ] </li></ul>
Check if it is possible to get a 2-dimensional representation of a 3-dimensional [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) | n/a
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different levels of precision, e.g., by allowing users to specify the maximum number of decimals in point coordinates | <ul><li>- [x] </li></ul>
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different scales / spatial resolutions | <ul><li>- [x] </li></ul>

#### How-to
The cadastral and topographic data is the original and most detailed version available. All data is 2D only.

In addition, an API extension for automated generalisation is supported returning geometries for a specific scale.
The following Links all fetch the administrative unit of the city of Bonn:

* [without geometry simplification (102 kB)](https://www.ldproxy.nrw.de/kataster/collections/verwaltungseinheit/items/DE05314000?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/25832)
* [geometry simplification (10 meters, 14 kB)](https://www.ldproxy.nrw.de/kataster/collections/verwaltungseinheit/items/DE05314000?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/25832&maxAllowableOffset=10)
* [geometry simplification (100 meters, 4 kB)](https://www.ldproxy.nrw.de/kataster/collections/verwaltungseinheit/items/DE05314000?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/25832&maxAllowableOffset=100)
* [geometry simplification (1000 meters, 2 kB)](https://www.ldproxy.nrw.de/kataster/collections/verwaltungseinheit/items/DE05314000?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/25832&maxAllowableOffset=1000)

The administrative areas are also available as separate datasets for display in maps at a smaller scale to
reduce the data volume.

#### To-do
Another option to improve the implementation of this best practice could be support for
vector tiling, in particular as Mapbox Vector Tiles.

### [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice)

#### Conformance statement
Conforms, but could be improved.

Test | Conforms
---|---
Check that [geospatial data](https://www.w3.org/TR/sdw-bp/#dfn-geographic-information-(also-geospatial-data)) (i.e. data about things located relative to the Earth) is available, as a minimum, in a global [coordinate reference system](https://www.w3.org/TR/sdw-bp/#dfn-coordinate-reference-system-(crs)): for vector data, this should be WGS 84 Lat/Long ([EPSG:4326](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4326)) or WGS 84 Lat/Long/Elevation ([EPSG:4979](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4979)); for raster data this should be Web Mercator ([EPSG:3857](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::3857)) | <ul><li>- [x] </li></ul>

#### How-to
WGS 84 is supported, but we use http://www.opengis.net/def/crs/OGC/1.3/CRS84 (long/lat), not
http://www.opengis.net/def/crs/EPSG/0/4326 (lat/long) as this is the default in GeoJSON.

In addition, other coordinate reference systems used by the German surveying and
cadastral administration and by INSPIRE are supported as well. Examples:

* A cadastral parcel in [WGS84 long/lat](https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items/DENW07AL0000BiQ0FL?f=json) and in [ETRS89 UTM32N](https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items/DENW07AL0000BiQ0FL?f=json&crs=http://www.opengis.net/def/crs/EPSG/0/25832).
* A request for cadastral parcels in [an area specified in ETRS89 UTM32N coordinates, response in ETRS89 lat/long](https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items?f=json&bbox=341000,5690000,343000,5691000&bbox-crs=http://www.opengis.net/def/crs/EPSG/0/25832&crs=http://www.opengis.net/def/crs/EPSG/0/4258).

#### To-do
n/a

### [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs)

#### Conformance statement
Conforms

Test | Conforms
---|---
For a given [spatial data](https://www.w3.org/TR/sdw-bp/#dfn-spatial-data) publication, check that users can find information about the coordinate axes, their order and unit of measurement, plus the [datum](https://www.w3.org/TR/sdw-bp/#dfn-datum) used | <ul><li>- [x] </li></ul>

#### How-to
The information is documented in the API documentation (for developers) and in the HTML footer (for those browsing the HTML representation).

#### To-do
n/a

### [Best Practice 9: Describe relative positioning](https://www.w3.org/TR/sdw-bp/#relative-position)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check that, when positions of entities are described as relative to other entities, these descriptions can be interpreted by a machine as well as humans, and the positions of the reference entities can be retrieved through their link relations. | <ul><li>- [x] </li></ul>

#### How-to
Only absolute positions are provided.

Some experimental links to nearby Spatial Things
have been added in the cadastral parcel data to explore, the technical feasibility to dynamically
establish spatial relationships to other Spatial Things that are also available
via a WFS 3.0 API. This [request](https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items/DENW36AL100077IvFL?relations=bahnstrecken%2Cgewaesser&resolve=true) returns also railway segments within 500 meter and
standing waters within 4000 meters (all from the topographic dataset). A slightly changed [request](https://www.ldproxy.nrw.de/kataster/collections/flurstueck/items/DENW36AL100077IvFL?relations=bahnstrecken%2Cgewaesser&resolve=false) does not return the related Spatial Things,
but links to them.

#### To-do
It is currently unclear how valuable, for example, links to "nearby" or "neighbouring"
Spatial Things would be, but it would be an option to include those, too. This is
related to Best Practices 3 and 10.

### [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links)

#### Conformance statement
Does not conform

Test | Conforms?
---|---
Check that hyperlinks use typed relationships, and that link relation type can be located in order to determine how to interpret the hyperlink. | <ul><li>- [x] </li></ul>
Check that the source and target of the hyperlink are Spatial Things, unless the link relation type definition indicates that this should be otherwise (e.g. when relating a Spatial Thing to its geometry). | <ul><li>- [ ] </li></ul>

#### How-to
Typed relationships are used (see Best Practice 3), but currently link relations between spatial things are minimal.

#### To-do
See Best Practice 9.

### [Best Practice 11: Provide information on the changing nature of spatial things](https://www.w3.org/TR/sdw-bp/#desc-changing-properties)

#### Conformance statement
Conforms, but could be improved

Test | Conforms?
---|---
Information about a given [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), or set of Spatial Things, will be relevant for a particular time or time-period. Check that this information is stated. | <ul><li>- [x] </li></ul>
Check that dataset metadata provides details about how often the dataset is updated; e.g. date of most recent publication, frequency of update. | <ul><li>- [ ] </li></ul>
If a version history of changes is available, check that [links](https://www.w3.org/TR/sdw-bp/#dfn-link) to previous versions are available. | n/a
If the Spatial Thing contains an attribute that varies with time, check that those attribute values are provided as a time-series. | n/a

#### How-to
The published datasets currently include the latest version of information about the Spatial Things. Attributes are used to describe the temporal validity of the version.

More information on versions of Spatial Things in the dataset is available in the national specification [GeoInfoDok 6.0.1, section 3.4](http://www.adv-online.de/Publications/AFIS-ALKIS-ATKIS-Project/binarywriterservlet?imgUid=8df46f15-1ff9-f216-afd6-ff3072e13d63&uBasVariant=11111111-1111-1111-1111-111111111111).

The dataset metadata includes details about the update frequency, but is currently not linked (see Best Practice 13).

#### To-do
In the OGC Testbed 14 an activity explored how WFS 3.0 could support more advanced requirements like information about
the changing nature of spatial things.
[Here](https://rawgit.com/opengeospatial/D040-Complex_Feature_Handling_Engineering_Report/master/18-021.html#uc-versions)
is a link to a related use case.

If supported by WFS 3.0 in the future, historic data / outdated versions of
Spatial Things could be published via the API, too.

Another improvement would be to include or reference more metadata of the dataset.

### [Best Practice 12: Expose spatial data through 'convenience APIs'](https://www.w3.org/TR/sdw-bp/#convenience-apis)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check if a test client can simulate calls and the API returns the expected responses. | <ul><li>- [x] </li></ul>
Check that the service avoids using http as a tunnel for calls to custom methods, and check that URIs do not contain method names. | <ul><li>- [x] </li></ul>
Check that every call enabled by your API is described in your documentation. Make sure you provide details of what parameters are required or optional and what each call returns. | <ul><li>- [x] </li></ul>
Check the Time To First Successful Call (i.e. being capable of doing a successful request to the API within a few minutes will increase the chances that the developer will stick to your API). | <ul><li>- [x] </li></ul>

#### How-to
As described in Best Practice 4, the data is provided for general use. For this purpose,
the current WFS-3.0-based API so far seems to be an appropriate API. It supports all
aspects listed in "possible approaches to implementation" in the Best Practice document.

In addition, the relevant API best practices from the Data on the Web Best Practices are
supported, too. The use of OpenAPI is a key aspect of this. The API documentation supports
using the API directly as does the HTML representation of the dataset which includes the
ability to filter data.

A convenience extension to the WFS 3.0 Core specification is that spatial search
is not restricted to a bounding box filter with coordinates, but that - using a geocoding
service at the backend - clients can also search using address information. This
[request](https://www.ldproxy.nrw.de/kataster/collections/gebaeudebauwerk/items?locality=Bonn&street=Trierer%20Str&number=70)
returns buildings at Trierer Straße 70 in Bonn.

### [Best Practice 13: Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check if the spatial metadata for the dataset itself includes the overall features of the dataset in a human-readable format. | <ul><li>- [x] </li></ul>
Check if the descriptive spatial metadata is available in a valid machine-readable format. | <ul><li>- [x] </li></ul>

#### How-to
Spatial extent, temporal extent, and the schema of the Spatial Things and their
properties are described and published.

The metadata is also included in the schema.org annotations. As a result, DCAT metadata
for the dataset is effectively published by the server, too. See the annotations
for a dataset in [Google's structured data testing tool](https://search.google.com/structured-data/testing-tool#url=https%3A%2F%2Fwww.ldproxy.nrw.de%2Fkataster%3Ff%3Dhtml).

#### To-do
If available and important for the integration in e-government data portals,
the dataset metadata in such portals could be referenced.

If the WFS 2.0 would provide links to dataset metadata, this could be referenced, too.
Currently, only a link to the service metadata is provided.

### [Best Practice 14: Describe the positional accuracy of spatial data](https://www.w3.org/TR/sdw-bp/#desc-accuracy)

#### Conformance statement
Does not conform

Test | Conforms?
---|---
Check if the metadata contains at least one human and machine readable statement regarding positional accuracy | <ul><li>- [ ] </li></ul>
Check that the kind of statement is relevant to the kind of data, e.g. not an absolute positional accuracy measure for Atlantis | <ul><li>- [ ] </li></ul>
Checking whether the accuracy statement is actually correct is beyond the scope of this best practice. | <ul><li>- [ ] </li></ul>

#### How-to
No information is available in the data published via the WFS 2.0 instances, which
are the data source.
