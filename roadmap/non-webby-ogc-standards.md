`Work in progress`

The following is a list of OGC standards which are well-deployed in the geospatial community but less so on the Web, or in other words 'not yet Web-friendly enough'. In the Spatial Data on the Web [roadmap][2] these are listed under the 'Features not covered by ongoing work' section, for now (we might consider naming this section differently or creating a new one). 

(There are many more OGC standards, but most of these are not meant to be used on the web directly. In other words, not all standards need to be "Webby". Not listed are, for example, standards for data exchange by download/import/export or standards that are conceptual models.)  

Criteria we use for a standard to be considered *Webby*:

- __WWW-aligned:__ The standard fully supports and follows the [fundamental concepts of current web architecture][1]*. This includes the use of URIs for identification; interaction using HTTP(S), content negotiation, and linking to other resources, including to secondary resources; and formats with agreed syntax and semantics. A representation of a resource is sent together with metadata, identifying the content-type.
- __Accessible:__ The standard is easy and simple enough for non-experts in geospatial data and geospatial information systems to understand and use*. Complexity in geospatial standards often stems from the fact that they cover a wide range of use cases, many of which are not required by non-experts.
- __Web-oriented:__ The standard is web-developer-friendly*, i.e. meets the expectations of many Web developers, for example by using encodings that are common on the Web, using HTTP verbs, etc. Note that this is a different criteria from the previous one; for example, it's about developers preferring encodings such as JSON to XML/GML. Note: what's 'developer-friendly' can be a trend sensitive thing.

## Web Map Service (WMS)

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__* |
| WWW-aligned               |      Yes     | The fundemental concepts are adhered to. One could argue that a more RESTful approach would be a necessary step towards modernization of the standard. |
| Accessible                |      No      | Many of the required parameters assume a priori knowledge about OGC standards and geospatial concepts such as CRS, BBOX, Layers, Version, Service, etc.  |
| Web-oriented              |      No      | WMS allows the use of parameterized URLs, but returns XML messages. No support for JSON.|

## Web Map Tile Service (WMTS)

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |

## Web Coverage Service (WCS)

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       No     |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |

## Web Coverage Processing Service

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |

## Catalogue Service (CSW)

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       No     | Catalogue services cannot be crawled by web indexers.                   |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |


## Web Map Context

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |

## Web Processing Service

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |

## Web Service Common

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |

## Sensor Observation Service

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using HTTP only as a transport protocol, sending XML messages back and forth. |

## Sensor Planning Service

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       ?      |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | Using http only as a transport protocol, sending XML messages back and forth. |

## Observations and Measurements (O&M) GML encoding

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       N/A    |                                                                         |
| Accessible                |       ?      |                                                                         |
| Web-oriented              |       No     | The encoding is not web-developer-friendly.                             |

> Note: The concepts of the standard have for a large part been incorporated in SSN.

## Timeseries (Profile of Observations and Measurements and the XML Encoding)

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       N/A    |                                                                         |
| Accessible                |       No     | The XML encoding is too complex and verbose.                            |
| Web-oriented              |       No     | Not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web. |

## Moving Features

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       N/A    |                                                                         |
| Accessible                |       No     | The XML encoding is too complex and verbose.                            |
| Web-oriented              |       No     | Not lightweight enough to conduct, for example, enhanced (near) real-time operations involving moving objects, via the Web. |

## IndoorGML

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       N/A    |                                                                         |
| Accessible                |       No     | Too complex and the GML encoding is not web-developer friendly.                            |
| Web-oriented              |       No     | A JSON encoding might be created from the conceptual model, but people have indicated it may currently be too complicated for that. This standard is potentially relevant for mobile web applications, though. |

## CityGML

| __Scorecard__             |              |                                                                         |
| ------------------------- |:------------:|:------------------------------------------------------------------------|
| *__Criteria__*            | *__Rating__* | *__Rational__*                                                          |
| WWW-aligned               |       N/A    |                                                                         |
| Accessible                |       No     | The GML encoding is not web-developer friendly.                         |
| Web-oriented              |       No     | There is a v0.9 JSON encoding (CityJSON).                               |
  
[1]: https://www.w3.org/TR/webarch/
[2]: https://w3c.github.io/web-roadmaps/sdw/
