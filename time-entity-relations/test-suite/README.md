# RDF test suite for OWL-Time entity relations 

This folder contains a set of RDF resources that may be used to test conformance to the rules for the temporal relations specified in [Extensions to the OWL-Time Ontology - entity relations](https://www.w3.org/TR/vocab-owl-time-rel/). 
It is composed of 

1. [time-test-indiduals.ttl](../../time/test-suite/time-test-indiduals.ttl) contains a set of named individuals of type `time:Instant`, `time:Interval`, `time:ProperInterval` (this is the same set used in the OWL-Time basic test-suite)
2. files named `xxx-true.ttl` each contain a set of **true** axioms concerning those individuals, with the predicate `xxx` (e.g. `equals`, `hasInside`, etc) 
3. files named `yyy-false.ttl` each contain a set of **false** axioms concerning those individuals, with the predicate `yyy` (e.g. `disjoint`, `notDisjoint`, etc) 

SJDC
2021-01-12
