# oldSSN/newSSN/SOSA/alignments Integration

This folder contains a proposal for the various documents that need to be exposed by the W3C server:
 - the document where the old SSN namespace will redirect;
 - the document that contains only the sosa ontology;
 - the document that contains the ssn ontology: it imports sosa, adds additional axioms, and defines more terms;
 - a document for each alignment;

## Requirements

- be as close as possible with the proposals 5 and 6 made by KJanowicz and Kerry at https://www.w3.org/2015/spatial/wiki/Proposals_for_rewriting_SSN
- be conformant with the linked vocabulary best practices at http://lov.okfn.org/Recommendations_Vocabulary_Design.pdf
- be OWL DL ontologies;
- adopt the implementation option for different namespaces for SOSA/SSN (this can be reverted to use a single namespace)
- implement the mapping table at https://www.w3.org/2015/spatial/wiki/Mapping_Table
- implement the advices from Phil A and agreed by Scott Simmons at https://www.w3.org/2015/spatial/wiki/Proposals_for_rewriting_SSN

## Checks to do before merging pull requests:

- check the documents implement no more than the changes that are announced in the pull request;
- check that every modification is associated with a ACTION in the tracker, that refers to something that has been discussed in the Wiki and voted in the conf call;
- check that the requirements are met;
- check that the ontologies are valid OWL DL ontologies;
- check there is no mention of TODO in the documents.

## Proposed methodology

### Initialization

1. copy the old SSN document without the DUL alignments, name it `oldssn.ttl`
2. create the stub of the documents: `ssnx.ttl`, `sosa.ttl`, `ssn.ttl`;
3. propose an order for the old SSN terms and group them in sections of no more than 8-10 terms in https://www.w3.org/2015/spatial/wiki/Terms;

For ssnx, sosa, ssn:

1. copy the prefix declarations, ontology declaration and its metadata
2. discuss metadata in the wiki:
  1. tite
  2. description
  3. creator
  4. rights
  5. license
  6. source or owl:versionInfo ?
  8. other comment ? 
3. vote
4. implemente the agreed option in github.

### Steps

1. someone in charge creates a new branch `b` and picks the next few terms in `oldssn.ttl`
2. cut/paste their declaration to `ssnx.ttl`
  1. copy the declarations from the old SSNX ontology;
  2. order, correct, update the term metadata:
    1. first the rdfs:label, add @en
    2. then the rdfs:comment, add @en and replace with skos:definition
    3. then dcterms:source and the rdfs:seeAlso, if present;
    4. then owl:deprecated true;
    5. then a **proposal** for the alignemnt with a term in sosa or ssn, add the mention `# TODO: check` at the end of the line
    6. then, add rdfs:isDefinedBy <http://purl.oclc.org/NET/ssnx/ssn>;
    7. leave all of the axioms, (they will be copied in ssn.ttl).
  3. when a similar term exists in sosa,
     1. work on the declaration in `sosa.ttl`
       1. reuse what already exists in sosa whenever possible
       2. check the metadata, delete the duplicate rdfs:comment, keep the skos:definition
       3. add `# TODO: discuss` at the end of lines whenever choices need to be done
     2. work on the declaration in `ssn.ttl`
       1. duplicate the axioms when possible;
       2. if not, make a choice and add `# TODO: discuss` at the end of the line
  4. when the term belongs to ssn,
     1. work on the declaration in `ssn.ttl`
       1. basically copy the declaration and its metadata;
       2. duplicate the axioms when possible;
       3. else, make a choice and add `# TODO: discuss` at the end of the line
3. issue a pull request for branch `b` into `gh-pages`;
3. for each  `# TODO: discuss`, write and discuss the pros and cons of different options in a wiki page
4. report this on the mailing list, and in the ISSUE/ACTION tracker,
5. vote during a conf call,
6. every decision is implemented in a separate branch  `c` and issue pull requests from `c` into `b`.
7. when `b` is ready, `merge `b` into `gh-pages`.  