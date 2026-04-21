# RDF test data for OWL-Time temporal relations

This folder contains RDF resources that may be used to test conformance to the rules for the temporal relations specified in [OWL-Time](https://www.w3.org/TR/owl-time/). 
It is composed of 

1. [TestEntities.ttl](./TestEntities.ttl) contains a set of named individuals of type `time:Instant`, `time:Interval`, `time:ProperInterval`
2. [TestEntityRelations.ttl](./TestEntityRelations.ttl) asserts the full set of relations between these individuals, using the predicates from the extended OWL-Time ontology
3. [SPARQL-compute-relations.md](./SPARQL-compute-relations.md) gives the sequence of SPARQL `INSERT` queries used to generate the relations.
4. [IntervalRelationsTable.csv](./IntervalRelationsTable.csv) is a tabulation of the interval relations

SJDC
2025-09-08
