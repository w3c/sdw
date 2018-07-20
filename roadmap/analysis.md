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
-	[Map Markup Language (MapML)](https://maps4html.github.io/MapML/spec/)
- [CityJSON](http://www.cityjson.org/)
-	[WebVMT (Video Map Tracks)](https://w3c.github.io/sdw/proposals/geotagging/webvmt/)
- OMLite (link? I only have a link to a [paper](https://content.iospress.com/articles/semantic-web/sw214))

## Step 2: Grouping 
_This is the second attempt at grouping. For earlier attempt see github history._
### Group 1: capture spatial/sensor data
- to get a device's location
  - Geolocation API
- relevant parts of SensorThingsAPI: Sensing, Tasking (?)
- APIs based on the Generic Sensor API
- relevant Web of Things work
- [GeoWeb input forms in MapML](https://github.com/opengeospatial/D012-MapML_Engineering_Report/issues/26)
- to synchronise a device's location with sensor data

### Group 2: represent spatial data
- to represent spatial data: vocabularies / encodings
  - GeoJSON
  - GML + simple features
  - GeoSPARQL ontology
  - Schema.org place and event
  - CoverageJSON
  - CityJSON
  - ISA core location vocabulary
  - Vcard ontology
  - TopoJSON
  - Building ontology
  - GeoRSS
  - KML
  - Basic geo
  - MapML ([example](https://geogratis.gc.ca/api/beta/vectors/canvec/50k/features/?zoom=18&xmin=-75.11672187853553&ymin=45.47833545860482&xmax=-75.07651767420697&ymax=45.495476138097445&projection=WGS84&entry-type=full&alt=xml&max-results=5))
- To represent sensor data
  - SOSA / SSN
  - O&M
- To represent temporal data
  - OWL Time
  - TimeseriesML
- To represent moving features: moving features XML and CSV
- WoT Thing Description
- to represent geometry
  - WKT
  - GeoHash
- to reference a location
  - By coordinates
  - By name
   - Dbpedia
   - Wikidata
   - geonames
- to synchronise location with sensor data
  - WebVMT

### Group 3: publish spatial data on the Web
- general guidelines
  - SDWBP
  - DWBP
- Guidelines for stats
  - Stats BP
- Guidelines for sensor data
  - SSN primer
  - Sensors & observations note (?)
- to describe a spatial dataset
  - DCAT
  - Geo-DCAT-AP
- to present a view
  - MapML ([example](http://geogratis.gc.ca/api/beta/mapml/))
  - WMS
  - WMTS
- to provide access
  - WFS 3.0
  - WCS
- to query using spatial operators
  - GeoSPARQL
  - Opensearch geo and time extensions

### Group 4: transform spatial data (before / after publication)
- Partitioning data for the web 
  - Vector tiles
  - Raster tiles
  - Data cubes
  - EO-QB
   - QB4ST
- WPS
