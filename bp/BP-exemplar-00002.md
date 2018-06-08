# Spatial Data on the Web Best Practice Exemplar

## Title
Geocoded National Address File (G-NAF) Linked Data Demonstrator

## Documentation root
https://gnafld.net

## Description of service
(write something)

## Best Practice Scorecard

### [Best Practice 1: Use globally unique persistent HTTP URIs for Spatial Things](https://www.w3.org/TR/sdw-bp/#globally-unique-ids)

#### Conformance statement
Conforms

#### How-to
A set of spatial objects was identified during Ontology design (e.g., Address, Street, Locality). Registers were created to identify each instance of the resulting classes. Each register was assigned a unique URI pattern following the rules defined by the [Australian Government Linked Data Working Group](https://linked.data.gov.au) [URI Guidelines](https://github.com/AGLDWG/TR/wiki/URI-Guidelines-for-publishing-linked-datasets-on-data.gov.au-v0.1). In order to ensure persistence, (write something)

### [Best Practice 2: Make your spatial data indexable by search engines](https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines)

#### Conformance statement
Conforms. Each register is indexable. search [GAACT714845933 in Google](https://www.google.com.au/search?q=GAACT714845933). However, it has not been indexed beyond the first page of the register, so only 50 records can be searched this way at the moment.

#### How-to

(write something)

### [Best Practice 3: Link resources together to create the Web of Data](https://www.w3.org/TR/sdw-bp/#linking)

#### Conformance statement
Conforms

#### How-to
All items in every register that relate to items in another register resulted in links being created. e.g., Address links to Street, Locality, and will link to Meshblocks once they’re published, Street links to Locality, Locality links to Geonames, and to itself (neighbours).

#### To-do
The links don’t currently contain IANA Link Relations (see here: http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1). Valid possible additions might be licence (with the link relation type license), hasAlias (with the link relation type: alternative), hasPrimary (with the link relation type: canonical), perhaps the alternates view could use the link relation type “profile”. Link to the register could use the link relation type “up”. “previous”, “next”, “first” and “last” could be used in the register links of the same name, as “item” can be used for each item in the register.
