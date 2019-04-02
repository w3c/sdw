`Work in progress`

The following is a list of OGC standards which are well-deployed in the geospatial community but less so on the Web, or in other words 'not yet Web-friendly enough'. In the Spatial Data on the Web [roadmap][2] these are listed under the 'Features not covered by ongoing work' section, for now (we might consider naming this section differently or creating a new one). 

(There are many more OGC standards, but most of these are not meant to be used on the web directly. In other words, not all standards need to be "Webby". Not listed are, for example, standards for data exchange by download/import/export or standards that are conceptual models.)  

Criteria we use for a standard to be considered *Webby*: 
- *The standard fully supports and follows the [fundamental concepts of current web architecture][1]*. This includes the use of URIs for identification; interaction using HTTP(S), content negotiation, and linking to other resources, including to secondary resources; and formats with agreed syntax and semantics. A representation of a resource is sent together with metadata, identifying the content-type.
- *The standard is easy and simple enough for non-experts in geospatial data and geospatial information systems to understand and use*. Complexity in geospatial standards often stems from the fact that they cover a wide range of use cases, many of which are not required by non-experts.
- *The standard is web-developer-friendly*, i.e. meets the expectations of many Web developers, for example by using encodings that are common on the Web, using HTTP verbs, etc. Note that this is a different criterium from the previous one; for example, it's about developers preferring encodings such as JSON to XML/GML. Note: what's 'developer-friendly' can be a trend sensitive thing.

## Web Map Service (WMS)
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Web Map Service (WMS)     |      ?       |     ?        |       no     |

Rationale: WMS allows the use of parameterized URLs, but returns XML messages.

(Is WMS using webarch correctly? Is it not too comples for non-experts?) 

## Web Map Tile Service (WMTS)
|       `Scorecard`          | webarch      | simple       | dev-friendly | 
| ------------               |:------------:|:------------:|:------------:|
| Web Map Tile Service (WMTS)|      ?       |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Coverage Service (WCS)
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Web Coverage Service (WCS)|      ?       |     no       |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Coverage Processing Service
|       `Scorecard`              | webarch      | simple       | dev-friendly | 
| ------------                   |:------------:|:------------:|:------------:|
| Web Coverage Processing Service|      ?       |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Catalogue Service (CSW)
|       `Scorecard`          | webarch      | simple       | dev-friendly | 
| ------------               |:------------:|:------------:|:------------:|
| Catalogue Service (CSW)    |      no      |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth. Catalogue services cannot be crawled by web indexers.  

## Web Map Context
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Web Map Context           |      ?       |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Processing Service
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Web Processing Service    |      ?       |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Web Service Common
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Web Service Common        |      ?       |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Sensor Observation Service
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Sensor Observation Service|      ?       |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Sensor Planning Service
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Sensor Planning Service   |      ?       |     ?        |       no     |

Rationale: Using http only as a transport protocol, sending XML messages back and forth.

## Observations and Measurements (O&M) GML encoding
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| O&M GML encoding          |      n.a.    |     ?        |       no     |

Rationale: The encoding is not web-developer-friendly. 

Note: The concepts of the standard have for a large part been incorporated in SSN.

## Timeseries (Profile of Observations and Measurements and the XML Encoding)
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Timeseries                |      n.a.    |     no       |       no     |

Rationale: The XML encoding is too complex and verbose - not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web.

## Moving Features
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| Moving Features           |      n.a.    |     no       |       no     |

Rationale: The XML encoding is too complex and verbose - not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web.

## IndoorGML
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| IndoorGML                 |      n.a.    |     no       |       no     |

Rationale: Too complex and the GML encoding is not web-developer friendly. A JSON encoding might be created from the conceptual model, but people have indicated it may currently be too complicated for that. This standard is potentially relevant for mobile web applications, though.

## CityGML
|       `Scorecard`         | webarch      | simple       | dev-friendly | 
| ------------              |:------------:|:------------:|:------------:|
| CityGML                   |      n.a.    |     no       |       no     |
Rationale: The GML encoding is not web-developer friendly. There is a v0.9 JSON encoding (CityJSON).
  
[1]: https://www.w3.org/TR/webarch/
[2]: https://w3c.github.io/web-roadmaps/sdw/
