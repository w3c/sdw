The following is a list of OGC standards wich are well-deployed in the geospatial community but less so on the Web aka 'not yet Web-friendly enough'. In the roadmap I listed these under 'Features not covered by ongoing work' section, for now (we might consider naming this section differently or creating a new one). 

(There are many more OGC standards, but most of these are not especially meant to be used on the web. I'm not listing, for example, standards for data exchange by download/import/export or standards that are conceptual models.)  

'Webby' = following the fundamental concepts of the [architecture of the Web][1] 

Criteria in general for ending up on this list: 
- It uses http only as a transport protocol. In contrast, standards which use http as an interface are considered 'Webby'.
- It's been replaced with something that's designed to be more web friendly.
- It's too complicated to be used in a Web context.

## Web Map Service (WMS)
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Map Tile Service (WMTS)
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Coverage Service (WCS)
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Coverage Processing Service
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Catalogue Service (CSW)
Rationale: Using http only as a transport protocol, sending XML messages back and forth.  

## Web Map Context
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Processing Service
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Service Common
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Sensor Observation Service
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Sensor Planning Service
Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Observations and Measurements GML encoding
Rationale: Superseded by SSN.

## Timeseries (Profile of Observations and Measurements and the XML Encoding)
Rationale: The XML encoding is too complex and verbose - not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web.

## Moving Features
Rationale: The XML encoding is too complex and verbose - not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web.

## IndoorGML
Rationale: GML encoding is not web friendly. A JSON encoding could be created from the conceptual model, but we suspect it’s currently too complicated for that. This standard is potentially relevant for mobile web applications, though.

## CityGML
Rationale: GML encoding is not web friendly.
  
[1]: https://www.w3.org/TR/webarch/