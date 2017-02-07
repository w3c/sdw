# oldSSN/newSSN/SOSA/alignments Integration Proposal

This folder contains a proposal for the various documents that need to be exposed by the W3C server:
 - the document where the old SSN namespace will redirect;
 - the document that contains only the sosa ontology;
 - the document that contains the ssn ontology: it imports sosa, adds additional axioms, and defines more terms;
 - a document for each alignment;
 - a document that specifies how the W3C server should serve the different documents

## Requirements

- be as close as possible with the proposals 5 and 6 made by KJanowicz and Kerry at https://www.w3.org/2015/spatial/wiki/Proposals_for_rewriting_SSN
- be conformant with the linked vocabulary best practices at http://lov.okfn.org/Recommendations_Vocabulary_Design.pdf
- be OWL DL ontologies;
- adopt the implementation option for different namespaces for SOSA/SSN (this can be reverted to use a single namespace)
- implement the mapping table at https://www.w3.org/2015/spatial/wiki/Mapping_Table
- implement the advices from Phil A and agreed by Scott Simmons at https://www.w3.org/2015/spatial/wiki/Proposals_for_rewriting_SSN
- the sosa should

## Checks to do before merging pull requests:

- check the documents implement no more than the changes that are announced in the pull request;
- check that every modification is associated with a GitHub issue;
- check that the requirements are met;
- check that the ontologies are valid OWL DL ontologies;
- solve any mention of ISSUE in the documents.

## Proposed methodology

### Initialization

1. create the stub of the documents: `ssnx.ttl`, `sosa.ttl`, `ssn.ttl`;
2. copy the old SSN document without the DUL alignments, name it `oldssn.ttl`
3. reorder the terms and group them in sections of no more than 8-10 terms;

For oldssn:

1. Copy the prefix declarations, raise and solve issues there.
2. Copy the ontology declaration and its metadata, raise and solve issues there.

For sosa:

1. Copy the prefix declarations, raise and solve issues there.
2. Copy the ontology declaration and its metadata, raise and solve issues there.

For ssn:

1. Copy the prefix declarations, raise and solve issues there.
2. Copy the ontology declaration and its metadata, raise and solve issues there.

### Steps

1. pick the next term in `oldssn.ttl`
2. cut/paste its declaration to `ssnx.ttl`
  1. copy the declaration from the old SSNX ontology;
  2. order, correct, update the term metadata:
    1. first the rdfs:label, add @en
    2. then the rdfs:comment, add @en and replace with skos:definition
    3. then dcterms:source and the rdfs:seeAlso, if present;
    4. then owl:deprecated true;
    5. then a **proposal** for the alignemnt with a term in sosa or ssn, add the mention `# TODO: check` at the end of the line
    6. then, add rdfs:isDefinedBy <http://purl.oclc.org/NET/ssnx/ssn>;
    7. stash all of the axioms.
  3. when the term belongs to sosa,
     1. work on the declaration in `sosa.ttl`
       1. reuse what's there if possible
       2. check the metadata, delete the duplicate rdfs:comment, keep the skos:definition
       2. raise issues, add `# TODO: check` at the end of lines where choices have been made
     2. work on the declaration in `ssn.ttl`
       1. just put the various axioms,
       2. raise issues, add `# TODO: check` at the end of lines where choices have been made.
  3. when the term belongs to ssn,
     2. work on the declaration in `ssn.ttl`
       1. basically copy the declaration and its metadata;
       2. raise issues, add `# TODO: check` at the end of lines where choices have been made.

  
