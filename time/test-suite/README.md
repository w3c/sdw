# RDF test suite for OWL-Time temporal relations

This folder contains a set of RDF resources that may be used to test conformance to the rules for the temporal relations specified in [OWL-Time](https://www.w3.org/TR/owl-time/). 
It is composed of 

1. [time-test-indiduals.ttl](./time-test-indiduals.ttl) contains a set of named individuals of type `time:Instant`, `time:Interval`, `time:ProperInterval`
2. files named `xxx-true.ttl` each contain a set of **true** axioms concerning those individuals, with the predicate `xxx` (e.g. `before`, `intervalMeets`, etc) 
3. files named `yyy-false.ttl` each contain a set of **false** axioms concerning those individuals, with the predicate `yyy` (e.g. `inside`, `intervalFinishedBy`, etc) 

SJDC
2021-01-12
