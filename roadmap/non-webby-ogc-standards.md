The following is a list of OGC standards which are well-deployed in the geospatial community but less so on the Web, or in other words 'not yet Web-friendly enough'. In the Spatial Data on the Web [roadmap][2] these are listed under the 'Features not covered by ongoing work' section, for now (we might consider naming this section differently or creating a new one). 

(There are many more OGC standards, but most of these are not meant to be used on the web directly. In other words, not all standards need to be "Webby". Not listed are, for example, standards for data exchange by download/import/export or standards that are conceptual models.)  

Criteria in general for a standard ending up on this list: 
- *It needs modernization to fully support and follow the fundamental concepts of current web architectures*. For example, it uses http only as a transport protocol. In contrast, standards which use http as an interface are considered 'Webby'.
- *It's considered too complex for most non-GI-experts*. This complexity often stems from the fact that it covers a wide range of use cases, many of which are not required by non-GI-experts. 
- *It's not web-developer-friendly*, i.e. does not meet the expectation of many Web developers. Note that this is is different criterium from the 'too complex' one; for example, it's about developers preferring encodings such as JSON to XML/GML. What's 'developer-friendly' can be a trend sensitive thing.

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
Rationale: not web-developer-friendly. 

## Timeseries (Profile of Observations and Measurements and the XML Encoding)
Rationale: The XML encoding is too complex and verbose - not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web.

## Moving Features
Rationale: The XML encoding is too complex and verbose - not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web.

## IndoorGML
Rationale: Too complex and the GML encoding is not web-developer friendly. A JSON encoding might be created from the conceptual model, but people have indicated it may currently be too complicated for that. This standard is potentially relevant for mobile web applications, though.

## CityGML
Rationale: GML encoding is not web-developer friendly.
  
[1]: https://www.w3.org/TR/webarch/
[2]: https://w3c.github.io/web-roadmaps/sdw/
