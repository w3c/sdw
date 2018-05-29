See https://github.com/w3c/sdw/issues/1030

First step in creating a web technology roadmap about Spatial data on the Web is to list all the features that should be described in the roadmap. Once we have a list, we can apply grouping and decide if we want just one roadmap page, or several (one per group, each group representing a subtopic of SDW). 

Examples of other roadmaps: 
- https://www.w3.org/2018/01/web-roadmaps/mobile/
- https://w3c.github.io/web-roadmaps/media/

Scope
Assuming the scope to be: (geo)spatial + Web + standards (in any dev / maturity phase). Not only what the SDWIG is discussing, but an overview of the relevant things that exist in SDW space.

Top down thinking: Groups could be
- Features needed to share spatial data on the web
- features needed to share statistical data on the web
- features needed to share sensor data on the web (including coverages / earth obs data)
- features needed to share temporal data on the web 




From SDWWG/IG
-	Sosa https://www.w3.org/TR/vocab-ssn/ https://www.w3.org/ns/sosa/
-	SSN – Semantic Sensor Network ontology https://www.w3.org/TR/vocab-ssn/ http://www.w3.org/ns/ssn/
- Time ontology in OWL https://www.w3.org/TR/owl-time/
-	Coverage JSON http://w3c.github.io/sdw/coverage-json/
-	Earth observation data: Publishing and Using Earth Observation Data with RDF Data Cube and the Discrete Global Grid System https://www.w3.org/TR/eo-qb/
-	QB4ST (Spatio temporal data cubes) https://www.w3.org/TR/qb4st/
-	SSN primer (planned)
-	Sensors & observations note (planned)
- SDW BP https://www.w3.org/TR/sdw-bp/
- Stats BP (planned) https://github.com/w3c/sdw/tree/gh-pages/stats-bp

Relevant developments at OGC
- Observations & Measurements http://www.opengeospatial.org/standards/om
- TimeseriesML http://www.opengeospatial.org/standards/tsml
-	Sensorthings API http://www.opengeospatial.org/standards/sensorthings
-	GeoSPARQL http://www.opengeospatial.org/standards/geosparql
-	GML + Simple Features http://www.opengeospatial.org/standards/gml + http://www.opengeospatial.org/standards/gml
- KML (including KMZ): list or not? http://www.opengeospatial.org/standards/kml
- OpenSearch Geo and Time Extensions http://www.opengeospatial.org/standards/opensearchgeo
- moving features XML and CSV http://www.opengeospatial.org/standards/movingfeatures
- WKT https://www.iso.org/standard/63094.html
- OGC Topic 2 (spatial referencing by coordinates) http://portal.opengeospatial.org/files/39049
- "old" WFS/WMS/WMTS/WCS/SOS/CSW etc: propose to not list these in the roadmap
-	WFS 3.0 https://cdn.rawgit.com/opengeospatial/WFS_FES/3.0.0-draft.1/docs/17-069.html
-	Vector tiling (very early development) http://docs.opengeospatial.org/per/17-041.html

Relevant developments at W3C
-	Geolocation API https://www.w3.org/TR/geolocation-API/
-	Basic Geo Vocab https://www.w3.org/2003/01/geo/
-	GeoRSS https://www.w3.org/2005/Incubator/geo/XGR-geo/
- DWBP (should we reference?) https://www.w3.org/TR/dwbp/
- DCAT https://www.w3.org/TR/vocab-dcat/
-	Linked Building Data (possible plans) https://w3c-lbd-cg.github.io/lbd/charter/ (reference is to a proposed WG charter, not a tech!)

Relevant developments elsewhere
-	Schema.org spatial part http://schema.org/Place and http://schema.org/Event
-	GeoJSON https://tools.ietf.org/html/rfc7946
- Spatial things in DBpedia http://dbpedia.org
- Spatial things in Wikidata https://www.wikidata.org/
- Geonames http://www.geonames.org
- ISA Location Core Vocabulary https://www.w3.org/ns/locn
- vCard ontology https://www.w3.org/TR/vcard-rdf/
- GeoDCAT-AP https://joinup.ec.europa.eu/node/139283/
- TopoJSON https://github.com/topojson/topojson
- GeoHash http://geohash.org
- (not a standard: GPX http://www.topografix.com/gpx.asp)
-	Maps in HTML: MapML https://maps4html.github.io/MapML/spec/
- CityJSON http://www.cityjson.org/
-	Video geotagging (WebVMT) https://w3c.github.io/sdw/proposals/geotagging/webvmt/




Groups:
- Features for data with a spatial component
  - general guidelines
    - SDWBP
    - DWBP
    - Stats BP
    - SSN primer
    - Sensors & observations note
    - Linked Building Data
  - representations / vocabularies / encodings
    - GeoSPARQL vocab part
    - GML + Simple Features
    - KML
    - Basic Geo Vocab
    - GeoRSS
    - Schema.org spatial part 
    - GeoJSON
    - ISA Location Core Vocabulary 
    - vCard ontology
    - TopoJSON
    - CityJSON
  - representation of geometry
    - WKT
    - GeoHash
  - referencing a location
    - by coordinates: 
      - OGC Topic 2 (spatial referencing by coordinates)
    - by name:  
      - Spatial things in DBpedia http://dbpedia.org
      - Spatial things in Wikidata https://www.wikidata.org/
      - Geonames http://www.geonames.org
  - getting a device's location
    - Geolocation API
  - providing access
    - WFS 3.0
    - Vector tiling
    - MapML
  - describing a spatial dataset
    - DCAT
    - GeoDCAT-AP 
- Features for sharing sensor data
  - representations / vocabularies / encodings
    - SOSA/SSN
    - Observations & Measurements
    - CovJSON
    - eo-qb
 - other
    - SensorThingsAPI
-  Features for sharing temporal data
  - representations / vocabularies / encodings
    - OWL Time
    - QB4ST
    - TimeseriesML
- Features for sharing moving object data
  - representations / vocabularies / encodings   
    - moving features XML and CSV 
- Spatial querying
  - GeoSPARQL
  - OpenSearch Geo and Time Extensions
- Geotagging
  - WebVMT