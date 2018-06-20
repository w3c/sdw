# Creating a web technology roadmap about Spatial data on the Web

## Steps
1. list all the features that should be described in the roadmap
1. apply grouping
1. decide if we want just one roadmap page, or several (one per group, each group representing a subtopic of SDW).
1. IF we want several roadmap pages, create images for the front page 
1. set up the roadmap framework
1. write description for each feature
1. categorize the features 

This document contains analysis results for steps 1 and 2. 

## Examples of other roadmaps
- https://www.w3.org/2018/01/web-roadmaps/mobile/
- https://w3c.github.io/web-roadmaps/media/

## Scope
Assuming the scope to be: 
- _(geo)spatial_ +
- _Web_ + 
- _standards_ (in any maturity phase).
- Not only what the SDWIG is discussing, but an overview of the relevant things that exist in SDW space.

## Step 1: List of features
_To help me get a complete list I listed the features by their SDO context._

From SDWWG/IG
- [SDW BP](https://www.w3.org/TR/sdw-bp/)
-	[Sosa](https://www.w3.org/TR/vocab-ssn/) (note: SOSA and SSN can be mentioned in the roadmap as two features of the same spec)
-	[SSN](https://www.w3.org/TR/vocab-ssn/)
- [SSN extensions](https://w3c.github.io/sdw/proposals/ssn-extensions/)
- [Time ontology in OWL](https://www.w3.org/TR/owl-time/)
-	[Coverage JSON](http://w3c.github.io/sdw/coverage-json/)
-	[EO-QB](https://www.w3.org/TR/eo-qb/)
-	[QB4ST](https://www.w3.org/TR/qb4st/)
-	SSN primer (planned)
-	Sensors & observations note (planned)
- Stats BP (planned) [see github](https://github.com/w3c/sdw/tree/gh-pages/stats-bp)

Relevant developments at OGC
- [Observations & Measurements](http://www.opengeospatial.org/standards/om)
- [TimeseriesML](http://www.opengeospatial.org/standards/tsml)
-	[Sensorthings API](http://www.opengeospatial.org/standards/sensorthings)
-	[GeoSPARQL](http://www.opengeospatial.org/standards/geosparql)
-	[GML + Simple Features](http://www.opengeospatial.org/standards/gml)
- [KML (including KMZ)](http://www.opengeospatial.org/standards/kml): list or not? 
-	[GeoRSS](https://www.w3.org/2005/Incubator/geo/XGR-geo/)
- [OpenSearch Geo and Time Extensions](http://www.opengeospatial.org/standards/opensearchgeo)
- [moving features XML and CSV](http://www.opengeospatial.org/standards/movingfeatures)
- [WKT](https://www.iso.org/standard/63094.html)
- [OGC Topic 2 (spatial referencing by coordinates)](http://portal.opengeospatial.org/files/39049)
- "old" WFS/WMS/WMTS/WCS/SOS/CSW etc: propose to not list these in the roadmap
-	[WFS 3.0](https://cdn.rawgit.com/opengeospatial/WFS_FES/3.0.0-draft.1/docs/17-069.html)
-	[Vector tiling](http://docs.opengeospatial.org/per/17-041.html) (very early development, link is to ER) 
- Raster tiling (link?)
- [Cesium 3D tiles](https://github.com/AnalyticalGraphicsInc/3d-tiles)

Relevant developments at W3C
-	[Geolocation API](https://www.w3.org/TR/geolocation-API/)
- [Generic Sensor API](https://www.w3.org/TR/generic-sensor/)
-	[Basic Geo Vocab](https://www.w3.org/2003/01/geo/)
- [DWBP](https://www.w3.org/TR/dwbp/) (should we reference?) 
- [DCAT](https://www.w3.org/TR/vocab-dcat/)
-	[Linked Building Data](https://w3c-lbd-cg.github.io/lbd/charter/) (possible plans,  reference is to a proposed WG charter, not a tech)
- [Data cubes](https://www.w3.org/TR/vocab-data-cube/)

Relevant developments elsewhere
-	Schema.org [Place](http://schema.org/Place) and [Event](http://schema.org/Event)
-	[GeoJSON](https://tools.ietf.org/html/rfc7946)
- [Spatial things in DBpedia](http://dbpedia.org)
- [Spatial things in Wikidata](https://www.wikidata.org/)
- [Geonames](http://www.geonames.org)
- [ISA Location Core Vocabulary](https://www.w3.org/ns/locn)
- [vCard ontology](https://www.w3.org/TR/vcard-rdf/)
- [GeoDCAT-AP](https://joinup.ec.europa.eu/node/139283/)
- [TopoJSON](https://github.com/topojson/topojson)
- [GeoHash](http://geohash.org)
- (not a standard: [GPX](http://www.topografix.com/gpx.asp)
-	[MapML](https://maps4html.github.io/MapML/spec/)
- [CityJSON](http://www.cityjson.org/)
-	[Video geotagging (WebVMT)](https://w3c.github.io/sdw/proposals/geotagging/webvmt/)
- OMLite (link? I only have a link to a [paper](https://content.iospress.com/articles/semantic-web/sw214))

## Step 2: Grouping 
_This is a first attempt at grouping. Problem is, group 1 is much bigger than the others._
### Group 1: Features for any data with a spatial component

- **general guidelines** for sharing spatial data on the web
  - SDWBP
  - DWBP
  - Stats BP
  - SSN primer
  - Sensors & observations note
  - Linked Building Data
- to **represent** spatial data: vocabularies / encodings
  - GeoJSON
  - GML + Simple Features
  - GeoSPARQL (vocab part)
  - Schema.org spatial part 
  - KML
  - Basic Geo Vocab
  - GeoRSS
  - ISA Location Core Vocabulary 
  - vCard ontology
  - TopoJSON
  - CityJSON
- To **describe** a spatial dataset
  - DCAT
  - GeoDCAT-AP 
- To **represent geometry**:
  - WKT
  - GeoHash
- To **reference a location**:
  - by **coordinates**: 
    - OGC Topic 2 (spatial referencing by coordinates)
  - by **name**:  
    - Spatial things in DBpedia http://dbpedia.org
    - Spatial things in Wikidata https://www.wikidata.org/
    - Geonames http://www.geonames.org
 
- To **work with** spatial data on the web
  - To **get** a device's location
    - Geolocation API
  - To **provide access**
    - WFS 3.0
  - To **present a view**    
    - Vector tiling
    - MapML
  - To **query** using spatial operators
     - GeoSPARQL
      - OpenSearch Geo and Time Extensions

### Group 2: Features specifically for sharing sensor data
- to **represent**: vocabularies / encodings
  - SOSA/SSN
  - Observations & Measurements
  - CovJSON
  - EO-QB
- to **work with**:
  - SensorThingsAPI
  - Generic Sensor API

### Group 3: Features specifically for sharing temporal data 
- to **represent**: vocabularies / encodings
  - OWL Time
  - QB4ST
  - TimeseriesML
 
### Group 4: Features specifically for sharing moving object data
- to **represent**: vocabularies / encodings
  - moving features XML and CSV 
- To **geotag video**
    - WebVMT
