# Server specifications

This document contains the proposed minimal requirements for the server that exposes SSN, SOSA, and the alignments.

## Redirection from the old namespace

First, a 301 Moved Permanently redirection is set from http://purl.oclc.org/NET/ssnx/ssn to http://www.w3.org/ns/ssn/ssnx

**TODO:** ok with name `ssnx`? It could be anything else.

The ontology defined in `ssnx.ttl` is served in a way similar to the one defined in https://www.w3.org/2015/spatial/wiki/NamespaceIssue

```
Req:
GET /ns/ssn/ssnx
Host: www.w3.org
Accept: text/html

Res:
some documentation, or redirection to a global documentation ?
```

```
Req:
GET /ns/ssn/ssnx
Host: www.w3.org
Accept: text/turtle

Res:
200 OK (potentially 406 Not Acceptable depending on the Accept request header)
Content-Type: text/turtle
Content-Disposition: filename= ssnx.ttl;
Content-Location: http://www.w3.org/ns/ssn/ssnx.ttl

Payload: content of ssnx.ttl
```

```
Req:
GET /ns/ssn/ssnx.ttl
Host: www.w3.org
Accept: text/turtle

Res:
200 OK (potentially 406 Not Acceptable depending on the Accept request header)
Content-Type: text/turtle
Content-Disposition: filename= ssnx.ttl;

Payload: content of ssnx.ttl
```

```
Req:
GET /ns/ssn/ssnx
Host: www.w3.org
Accept: application/rdf+xml

Res:
200 OK (potentially 406 Not Acceptable depending on the Accept request header)
Content-Type: application/rdf+xml
Content-Disposition: filename= ssnx.rdf;
Content-Location: http://www.w3.org/ns/ssn/ssnx.rdf

Payload: RDF/XML equivalent for ssnx.ttl
```

```
Req:
GET /ns/ssn/ssnx.rdf
Host: www.w3.org
Accept: application/rdf+xml

Res:
200 OK (potentially 406 Not Acceptable depending on the Accept request header)
Content-Type: application/rdf+xml
Content-Disposition: filename= ssnx.rdf;

Payload: RDF/XML equivalent for ssnx.ttl
```

HTTP Response Header Content-Disposition is a hint for the browser on how to name the file in case it needs to download it: "ssnx.ttl" or "ssnx.rdf". In the absence of this Response Header, the downloaded file name usually resolves to the last bit of the path in the URI -> string "ssnx" without the file extension.

**TODO:** ok with this specification?
