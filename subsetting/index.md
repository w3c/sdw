Persistent Identifiers for Subsets of Data
==========================================
Datasets can be extremely large. Examples include meteorological records spanning decades and covering large geographical areas, @@@ non-meteo examples@@@. Such datasets are very rarely processed ''en masse'', rather, an application will typically require a specific subset of the dataset, such as the temperature records for a particular location for the previous 24 hours, @@@other subset examples@@@.

These subsets are typically accessed through an API that accepts HTTP GET requests and so the API call, or query, can be encoded directly in the URL thus:

<code>http://example.com/api/?sql= Blah blah - CGI-encoded SQL query</code>
@@@ Other examples@@@


