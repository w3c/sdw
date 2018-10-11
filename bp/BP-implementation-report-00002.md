# Spatial Data on the Web Best Practice Implementation Report

## Title
Geocoded National Address File (G-NAF) Linked Data Demonstrator

## Description of service

### About

The [G-NAF Linked Data Demonstrator](http://gnafld.net) is a test [Linked Data](https://en.wikipedia.org/wiki/Linked_data) [API](https://en.wikipedia.org/wiki/Application_programming_interface) delivering data from [G-NAF, the Australian Geocoded National Address File](https://www.psma.com.au/products/g-naf).

It is being developed through a joint initiative between [PSMA Australia](https://www.psma.com.au) and [CSIRO](https://csiro.au) to test the application of Linked Data technologies to large spatial datasets. The hope is that Linked Data will allow new applications of data presentation, access, mining and sharing that improve Australia've value from the G-NAF.

### The Linked Data API

The API is a minimal implementation of a RESTful HTTP API that allows portions of the G-NAF dataset to be delivered as human- or machine-readable web resources (web pages and code files). It essentially presents endpoints (URIs; web addresses) for G-NAF items according to various conceptual models. Models such as the [ISO's 19160-1:2015 -- Addressing](https://www.iso.org/standard/61710.html) are related to the elements in G-NAF through deliberate mappings made in the *model* portion of this API's codebase. On web address request, the API extracts data for its various models from the G-NAF database using SQL queries. It then uses HTML templates or in-memory RDF graphs to generate *views* for human or machine reading.

The following programming languages and tools are used by this API:

* [pyLDAPI](https://pypi.org/project/pyldapi/) - a tiny [Python](https://www.python.org) module implementing Linked Data-style functionality on top of the commonly used [Flask](http://flask.pocoo.org/) HTTP framework
* [Python Flask framework](http://flask.pocoo.org/) - the lower-level Python HTTP framework used by this API
* [Apache web server](https://en.wikipedia.org/wiki/Apache_HTTP_Server) - the web server that allows communication with [Flask](http://flask.pocoo.org/) over HTTP
* [Postgres database](https://en.wikipedia.org/wiki/PostgreSQL) - an open source relational database containing the data of the [G-NAF](https://www.psma.com.au/products/g-naf).

### Documentation root
<http://linked.data.gov.au/dataset/gnaf>

### Example
<http://linked.data.gov.au/dataset/gnaf/address/GAACT714845933>

## Best Practice Scorecard

### [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check that within the data [Spatial Things](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), such as countries, regions and people, are referred to by HTTP URIs or by short identifiers that can be converted to HTTP URIs. Ideally dereferencing the URIs should return the [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing), however, they have value as globally scoped variables whether they dereference or not | <ul><li>- [x] </li></ul>

#### How-to
The Linked Data API version of the G-NAF was assigned a URI for identify it, <http://linked.data.gov.au/dataset/gnaf> and, further, spatial objects classes were identified within the dataset according to two main ontologies. One of these ontologies was a seperately published [OWL](https://www.w3.org/2001/sw/wiki/OWL) version of the [ISO's 19160-1:2015 -- Addressing](https://www.iso.org/standard/61710.html), see <http://linked.data.gov.au/def/iso19160-1-address>; the other the G-NAF Ontology <http://linked.data.gov.au/def/gnaf> that was created specifically for this dataset.

Registers of the main items within the G-NAF ontology (e.g. Address, Street, Locality) were created to give access to instances of each class. Each register was assigned a unique URI (e.g. <http://linked.data.gov.au/dataset/gnaf/address/> for Address) and each individual within each Register was assigned a URI based on the Register, e.g. Address 'GAACT714845933' was assigned the URI <http://linked.data.gov.au/dataset/gnaf/address/GAACT714845933>.

Finally, the most significant items classes in the datasets (Address, StreetLocality) were also assigned a second 'top-level' register URI that was not bound to the dataset to highlight the class of items. The URI for the Address register is <http://linked.data.gov.au/address/> which means there are two registers for Address objects resolving to the same API endpoint.

These URIs were all assigned following rules defined by the [Australian Government Linked Data Working Group](http://linked.data.gov.au) which are articulated in their [URI Guidelines](http://linked.data.gov.au/governance).

### [Best Practice 2: Make your spatial data indexable by search engines](https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines)

#### Conformance statement
Conforms

Test | Conforms
---|---
Using a Web browser, search for the landing page of your dataset | <ul><li>- [x] </li></ul>
Using a Web browser, check that you can browse to human-readable HTML pages for each [Spatial Thing](https://www.w3.org/TR/sdw-bp/#dfn-spatial-thing) that the dataset describes | <ul><li>- [x] </li></ul>

#### Evidence

In this API implementation, each item class register is indexable by search engined such as Google. [A search for an address key, such as 'GAACT714845933' using Google](https://www.google.com.au/search?q=GAACT714845933) yields multiple 'hits' on the API's web pages; both the Address register containing a link to Address 'GAACT714845933' and also the item page for Address 'GAACT714845933' itself. However, the API has not been indexed beyond the first page of the register, so only 50 records can be searched this way at the moment. The register is paginated (there are 13.5M addresses), and can be browsed or crawled in its entirety by link-following clients.

Note that cached Google results currently refer to a previous version of the API which will eventually be updated.

#### How-to

Each resource defined within the G-NAF dataset (the dataset itself; registers of items; individual items) is delvered online in both RDF and HTML, as per [Linked Data bast practice](https://www.w3.org/TR/ld-bp/). The HTML delivery ensures that current search engines can 'see' the resources and RDF ensures that Linked Data bots can.

### [Best Practice 3: Link resources together to create the Web of Data](https://www.w3.org/TR/sdw-bp/#linking)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check that hyperlinks are distinguishable within the data — a string-literal that happens to contain a URL is insufficient | <ul><li>- [x] </li></ul>
Check that hyperlinks use global identifiers, preferably HTTP URIs, to identify the link target | <ul><li>- [x] </li></ul>
Check that hyperlinks use typed relationships, and that the definition of the link relation type can be located in order to determine how to interpret the hyperlink | <ul><li>- [x] </li></ul>

#### How-to
Spend some time looking at other ontologies before designing your own. In doing this:
1. reuse existing ontologies wherever possible. Examples of this include ISO Group on Ontology Modeling's (GOM's) 19160-1 -- Addressing Ontology, which was profiled to present a view;
2. describe your things using properties of existing ontologies wherever possible. Exmaples of this include the use of geo:Geometry rather than establishing a new object property for defining a geometry that is specific to this modeling effort; and
3. link your things to existing things wherever possible. Examples of this include linking locality to geonames.org items.
4. use [IANA Link Relations](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1) where possible. Examples of this include the use of previous, next, first and last link relationships in the register at the following URI: http://gnafld.net/address/?page=7&per_page=500.

Once all of these are done, all items in every register that relate to items in another register should result in links being created. e.g., Address links to Street, Locality, and will link to Meshblocks once they’re published, Street links to Locality, Locality links to Geonames, and to itself (neighbours).

#### To-do
Consider the following [IANA Link Relations](http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1): licence (with the link relation type license), hasAlias (with the link relation type: alternative), hasPrimary (with the link relation type: canonical), perhaps the alternates view could use the link relation type “profile”. Link to the register could use the link relation type “up”, as “item” can be used for each register item from the register.

### [Best Practice 4: Use spatial data encodings that match your target audience](https://www.w3.org/TR/sdw-bp/#semantic-thing)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check if spatial data is encoded, so that it can be understood and re-used reliably | <ul><li>- [x] </li></ul>
Consider the main target audience or audiences of a web page or service, and check if spatial information is provided in a way appropriate for that audience | <ul><li>- [x] </li></ul>

#### How-to
Conduct user research to determine what [geospatial data](https://www.w3.org/TR/sdw-bp/#dfn-geographic-information-(also-geospatial-data)) encodings suit your target audience, unless you already know what these are. This includes:
 
 1. publishing data using different content types that suit your target audience. In this implementation, the Flask API that was built for publication supports the following spatial data encodings: GeoSPARQL asWKT/wktLiteral and GeoJSON; and
 2. using profiles that map your data to different ontologies, and which when combined with content types allow users to choose the flavour of your spatial data that matches their needs.

Profile negotiation has been described well as a problem, to be addressed by the Dataset eXchange Working Group (DXWG). However, schema.org profile provides JSONLD with GeoJSON for the schema.org audience, the G-NAF used GeoSPARQL asWKT/wktLiteral which is further encoded by content-type.

#### To-do

Support profile negotiation as described by the DXWG, once it has been approved as a recommendation.

### [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry)

#### Conformance statement
Conforms

Test | Conforms
---|---
[Geometries](https://www.w3.org/TR/sdw-bp/#dfn-geometry) are made available in possibly different formats and levels of complexity, considering their intended uses and their consumption on the Web | <ul><li>- [x] </li></ul>
The chosen [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions comply with [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries), [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice), and [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs) | <ul><li>- [x] </li></ul>
The (possibly) alternative [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) descriptions can be accessible via standard mechanisms, as HTTP content negotiation | <ul><li>- [x] </li></ul>

#### How-to
Conduct user research to:
 
 1. identify the intended uses and applications of the Linked Data API. This resulted in largely Linked Data applications and web consumption scenarios being considered
 2. identify possible future use cases. This added consumption through geospatial applications as a requirement, without any specific target applications being selected. WKT was therefore selected as the Linked Data geometry encoding, used to support consumption through diverse geospatial applications
 3. identify required coordinate reference systems. This resulted in the choice of GDA94-LL being selected and used
 4. identifying the appropriate level of geometry detail. As a point dataset, the user community simply wanted the full resolution to be available.
 
 All of the above resulted in the choice of supported profiles combined with geometry representation. The following were selected:
 1. Schema.org as a profile to support web users consuming point data as coordinates rather than a geospatial object, and
 2. the native G-NAF profile to support other use cases, and using WKT to encode geometries using GeoSPARQL to link the geometry for accessibility and compactness.

#### To-do
In future, the street and locality register items could include links to other geospatial representations (e.g., lines for street, polygons for locality).
 

### [Best Practice 6: Provide geometries at the right level of accuracy, precision, and size](https://www.w3.org/TR/sdw-bp/#multiplegeometries)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check if the original and most detailed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data is available | <ul><li>- [x] </li></ul>
Check if a compressed version of [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data can be obtained via HTTP content negotiation or other mechanisms | n/a
Check if centroids and bounding boxes are made available, without the need of downloading and processing the relevant [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data | <ul><li>- [ ] </li></ul>
Check if it is possible to get a 2-dimensional representation of a 3-dimensional [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) | n/a
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different levels of precision, e.g., by allowing users to specify the maximum number of decimals in point coordinates | <ul><li>- [ ] </li></ul>
Check if [geometry](https://www.w3.org/TR/sdw-bp/#dfn-geometry) data are available at different scales / spatial resolutions | n/a

#### How-to
Due to the close relationship between this best practice and [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry), this was described above.

### [Best Practice 7: Choose coordinate reference systems to suit your user's applications](https://www.w3.org/TR/sdw-bp/#bp-crs-choice)

#### Conformance statement
Conforms

Test | Conforms
---|---
Check that [geospatial data](https://www.w3.org/TR/sdw-bp/#dfn-geographic-information-(also-geospatial-data)) (i.e. data about things located relative to the Earth) is available, as a minimum, in a global [coordinate reference system](https://www.w3.org/TR/sdw-bp/#dfn-coordinate-reference-system-(crs)): for vector data, this should be WGS 84 Lat/Long ([EPSG:4326](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4326)) or WGS 84 Lat/Long/Elevation ([EPSG:4979](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::4979)); for raster data this should be Web Mercator ([EPSG:3857](http://epsg-registry.org/?display=entity&urn=urn:ogc:def:crs:EPSG::3857)) | <ul><li>- [ ] </li></ul>

#### How-to
Due to the close relationship between this best practice and [Best Practice 5: Provide geometries on the Web in a usable way](https://www.w3.org/TR/sdw-bp/#describe-geometry), this was described above.

#### To-do
Need to consider whether a second coordinate reference system, WGS 84, is actually required.

### [Best Practice 8: State how coordinate values are encoded](https://www.w3.org/TR/sdw-bp/#bp-crs)

#### Conformance statement
Conforms

Test | Conforms
---|---
For a given [spatial data](https://www.w3.org/TR/sdw-bp/#dfn-spatial-data) publication, check that users can find information about the coordinate axes, their order and unit of measurement, plus the [datum](https://www.w3.org/TR/sdw-bp/#dfn-datum) used | <ul><li>- [x] </li></ul>

#### How-to
[GeoSPARQL](https://www.w3.org/TR/sdw-bp/#bib-GeoSPARQL)'s extension to Well Known Text ([WKT](https://www.w3.org/TR/sdw-bp/#dfn-well-known-text-(wkt))), it's wktLiteral data type, was used and combined with specifying the [coordinate reference system](https://www.w3.org/TR/sdw-bp/#dfn-coordinate-reference-system-(crs)).

### [Best Practice 9: Describe relative positioning](https://www.w3.org/TR/sdw-bp/#relative-position)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check that, when positions of entities are described as relative to other entities, these descriptions can be interpreted by a machine as well as humans, and the positions of the reference entities can be retrieved through their link relations. | <ul><li>- [x] </li></ul>

#### How-to

The following relative positions were identified, and encoded into the ontology:
1. Localities have neighbour, or next to, relationships which were described using the hasNeighbour object property.

### [Best Practice 10: Use appropriate relation types to link Spatial Things](https://www.w3.org/TR/sdw-bp/#entity-level-links)

#### Conformance statement
Conforms

Test | Conforms?
---|---
Check that hyperlinks use typed relationships, and that link relation type can be located in order to determine how to interpret the hyperlink. | <ul><li>- [ ] </li></ul>
Check that the source and target of the hyperlink are Spatial Things, unless the link relation type definition indicates that this should be otherwise (e.g. when relating a Spatial Thing to its geometry). | <ul><li>- [x] </li></ul>

#### How-to

The following relationships were identified, and encoded into the ontology:
1. Addresses are within Localities.
2. Addresses touch Street Localities.
3. Street Localities are within Localities.
4. Localities link to GeoNames states.

#### To-do

These relationships are currently not typed using [GeoSPARQL](https://www.w3.org/TR/sdw-bp/#bib-GeoSPARQL) relationships, and should be. sfWithin for points within polygons, sfTouches for neighbour relationships.

### [Best Practice 11: Provide information on the changing nature of spatial things](https://www.w3.org/TR/sdw-bp/#desc-changing-properties)

#### Conformance statement
Does not conform

### [Best Practice 12: Expose spatial data through 'convenience APIs'](https://www.w3.org/TR/sdw-bp/#convenience-apis)

#### Conformance statement
Conforms

### [Best Practice 13: Include spatial metadata in dataset metadata](https://www.w3.org/TR/sdw-bp/#spatial-info-dataset-metadata)

#### Conformance statement
Does not conform

#### To-do

Need to assert spatial metadata in the dataset ontology. Things like geo:hasGeometry could be used in the ontology to define Australia in Geonames as the extent, for example. Perhaps the DCAT revision will provide some guidance on how best to do this.

### [Best Practice 14: Describe the positional accuracy of spatial data](https://www.w3.org/TR/sdw-bp/#desc-accuracy)

#### Conformance statement
Does not conform

#### To-do

Need to include geocode reliability to be added to the ontology, and to the data set. It further requires a code list to facilitate discovery of meaning.
