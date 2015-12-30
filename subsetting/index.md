Persistent Identifiers for Subsets of Data
==========================================
Datasets can be extremely large. Examples include meteorological records spanning decades and covering large geographical areas, @@@ non-meteo examples@@@. Such datasets are very rarely processed ''en masse'', rather, an application will typically require a specific subset of the dataset, such as the temperature records for a particular location for the previous 24 hours, @@@other subset examples@@@.

These subsets are typically accessed through an API that accepts HTTP GET requests and so the API call, or query, can be encoded directly in the URL thus:

`http://example.com/api/?sql= Blah blah - CGI-encoded SQL query`

@@@ Other examples@@@

In this sense, an API call *is* an identifier for a subset of a dataset. The problem is that the identifier is dependent on a specific implementation of a specific technology. If the API is updated, perhaps trivially as a new parameter is added, or substantially to move from an XML message-based to a more RESTful based system, the identifier is likely to no longer apply. Since it is expensive to maintain old systems, or to includes backwards compatibility in new systems, sooner or later, old APIs are likely to be turned off.

Therefore, a URI that includes an API call or query directly should be treated as emphemeral.

To be persistent, a URI must be technology-neutral. An intermediate layer should be used to translate a URI into a query.

The [Linked Data API](https://github.com/UKGovLD/linked-data-api "The Linked Data API") is a well documented and widely implemented method of doing this. It takes a simple URL as input and interprets that as a SPARQL query, returning the output in any number of formats through content negotiation. The aim here is to provide a non-SPARQL interface to Linked Data resources, but the effect is to create persistent URIs for subsets of large datasets. The imntermediate layer could be replaced with en entirely different technology and still return the same data.

[OpenSearch](http://www.opensearch.org/Specifications/OpenSearch/1.1 "OpenSearch") provides something similar, in that a simple URL is converted into an XML message that is posted to a search engine. A future version of OpenSearch could use an entirely different technology whilst the template URL remained unchanged. The OpenSearch URL makes use of the query string portion  (`http://search.example.com/?q=search%20term` for example) however, this is not interpreted directly and is not technology dependent. OGC offers a set of [geo-temporal extensions](http://www.opengis.net/doc/IS/opensearchgeo/1.0 "OpenSearch Geo and Time Extensions") to OpenSearch and these can potentially be considered as persistent identifiers, however, as the query string becomes longer and longer, the more the URL is tied to an existing data structure and implementation.

Persistent Structures
---------------------

Something about intended outcomes.

* `http://weather.example.com/temperature/uk/london` for the current temperature in London
* `http://weather.example.com/temperature/uk/london/2015-12-30/` for temperature readings in London for a specific day
* `http://weather.example.com/temperature/uk/london/2015-12-30/12:00/` for the temperature reading in London for a specific day at a specifc time

Implementation options
----------------------

Mod Rewrite examples

SQL examples etc.
