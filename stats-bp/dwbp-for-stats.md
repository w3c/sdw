This note considers how the [Data on the Web Best Practices](https://www.w3.org/TR/dwbp/) should be applied in the context of statistical data.  The starting point for this document is the [Andrea Perego's note](https://lists.w3.org/Archives/Public/public-sdwig/2018Jan/0048.html) on the SDWIG mailing list.


## Best Practice 1: Provide metadata

what metadata is most important for statistical data?

https://joinup.ec.europa.eu/solution/statdcat-application-profile-data-portals-europe
https://www.w3.org/2017/dxwg/wiki/Main_Page
http://ec.europa.eu/eurostat/data/metadata/metadata-structure
https://gss.civilservice.gov.uk/guidances/quality/quality-guidelines/#measuring-and-reporting-statistical-quality

## Best Practice 2: Provide descriptive metadata
## Best Practice 3: Provide structural metadata


This is at least partially addressed by the RDF Data Cube vocabulary. The question is whether there's a requirement for additional metadata (as the descriptive ones) compared to those recommended in RDF Data Cube.

Anyway, there's also the issue on whether we shouldn't be RDF-centric, especially since there's already a standard used world-wide for statistical meta/data - SDMX.

## Best Practice 4: Provide data license information

This is an issue for any type of data, and the question is whether statistical data have or not specific requirements. For instance, SDMX has a number of "fields" that can be used for use conditions - which is usually encoded as free text. StatDCAT-AP has proposed an approach to deal with this, by illustrating how to encode licence URIs in SDMX records via annotations. E.g.:

    <com:Annotation>
      <com:AnnotationTitle>dct:license</com:AnnotationTitle>
      <com:AnnotationType>StatDCAT-AP</com:AnnotationType>
      <com:AnnotationURL>https://creativecommons.org/licenses/by/4.0/</com:AnnotationURL>
    </com:Annotation>


http://dublincore.org/documents/dcmi-terms/#terms-license


## Best Practice 5: Provide data provenance information

SDMX covers this with a number of fields - again, by using free text.

which aspects of provenance are most important in a statistical context?
Suitability of PROV? https://www.w3.org/TR/prov-o/

## Best Practice 6: Provide data quality information


This is already foreseen in SDMX, where data quality is covered by a number of fields. But it is encoded in free text only.


## Best Practice 7: Provide a version indicator
## Best Practice 8: Provide version history


The use of version indicators is already a common practice for some organisations. However, I'm not sure about version history ("how the dataset typically changes from version to version and how any two specific versions differ.").

Approach to data revisions: at individual observation level, and/or at whole dataset level.

Corrections or updates to individual estimates as more data comes in.  Also more comprehensive approaches to revision, for example in the series of estimates of GDP that most countries product

Versioning of codelists, eg regular updates to classification schemes such as SIC or SITC


## Best Practice 9: Use persistent URIs as identifiers of datasets
## Best Practice 10: Use persistent URIs as identifiers within datasets
## Best Practice 11: Assign URIs to dataset versions and series


RDF Data Cube already recommends this. Another story is about URIs in SDMX and other formats.

As for spatial data, using URIs is not a common practice in the statistical domain. It is not a merely technical issue, as it very much relates to data governance. So, it would be interesting to identify best practices enabling the consistent use of URIs without dramatically changing the underlying infrastructure and the existing data management workflow. Tools taking care of this in a transparent way could be a facilitator.


## Best Practice 12: Use machine-readable standardized data formats

See comment to BP14.


## Best Practice 13: Use locale-neutral data representations

This is addressed in SDMX and RDF Data Cube, where units of measure and approximations are made explicit. But it is not the case for other formats (CSV and other tabular formats).

## Best Practice 14: Provide data in multiple formats

To some extent, this happens already for statistical data. The question is whether Web-friendly formats are consistently supported.

Another issue is how to facilitate data serialisation in multiple formats. For conversion from SDMX to RDF, there's already some work done we can point to - e.g.:

http://csarven.ca/linked-statistical-data-analysis


https://github.com/csarven/linked-sdmx


http://270a.info/


https://github.com/linked-statistics


The same applies to the conversion of tabular data into RDF. Here, however, the conversion usually requires human intervention because of the lack of standardised structures in the source data.

* CSV on the Web approach.
* Simple CSV
* JSON-stat, or other JSON formats
* 'Tidy data'
* ...

## Best Practice 15: Reuse vocabularies, preferably standardized ones


Here we already have SDMX and RDF Data Cube. For CSV or other tabular data, the usual issue is that the semantics of the "columns" is not explicit. The specs of the W3C CSV on the Web WG could help address this problem.

Process for agreeing and governance of re-usable codelists and classification schemes between organisations

## Best Practice 16: Choose the right formalization level


TBD


## Best Practice 17: Provide bulk download

This seems to be already a common practice for statistical data.

## Best Practice 18: Provide Subsets for Large Datasets


The "data slice" mechanism may be a way of addressing this. The question is whether it is not covering some use cases.

* filtering of datasets, 'dicing' as well as a pure slice
* use of hierarchical codelists for subsetting (I just want data zones in Glasgow, or I just want trade data for agricultural products)
* create subsets based on values of observations (as well as on values of dimensions) - eg find the most deprived areas, or find areas with atmospheric pollutoin measurements above some threshold.


## Best Practice 19: Use content negotiation for serving data available in multiple formats


As far as I know, this is typically not done for statistical data, although they are usually published in multiple formats.


## Best Practice 20: Provide real-time access


I think this is very much dependent on the type of data we are talking about, and which are the data management criteria.


## Best Practice 21: Provide data up to date


This is usually in the mandate of statistical offices.


## Best Practice 22: Provide an explanation for data that is not available


This is not a common practice, as far as I know.

UK government guidance for 'data markers' (based on Eurostat guidance?) https://gss.civilservice.gov.uk/policy-store/symbols-in-tables-definitions-and-help/

## Best Practice 23: Make data available through an API
## Best Practice 24: Use Web Standards as the foundation of APIs
## Best Practice 25: Provide complete documentation for your API
## Best Practice 26: Avoid Breaking Changes to Your API


Standard APIs for statistical data exist, e.g.:

https://github.com/sdmx-twg/sdmx-rest/releases/tag/v1.2.0


## Best Practice 27: Preserve identifiers


This links to the URI issue, but it includes having persistent identifiers for the different versions of a dataset.

This very much relates to data management / governance, storage / archiving capacity, as well as the data update policies. In many cases, old versions of statistical data are not preserved (e.g., in case of high frequency of update, or if the use cases/mandate just requires to provide the most up to date version).

On the other hand, the code lists, taxonomies, etc. used in statistical data by statistical offices (as NUTS, NACE, etc.) are maintained by following clear versioning policies - which include also the indication of successors/predecessors, deprecated terms, etc.

On this issue, an RDF voc exists, namely, XKOS (http://rdf-vocabulary.ddialliance.org/xkos), which extends SKOS to cover the requirements of statistical classifications - versioning included.


## Best Practice 28: Assess dataset coverage


This BP is about archiving/preservation of the data along with the code lists, taxonomies, vocabularies, etc. used. See comment to BP27.


## Best Practice 29: Gather feedback from data consumers
## Best Practice 30: Make feedback available


This is not done consistently, but happens to all type of data. The question is whether there's a specific recommendation for statistical data.


## Best Practice 31: Enrich data by generating new data


TBD

## Best Practice 32: Provide Complementary Presentations


Statistical data are frequently published along with their visual (graph-based) representations. Any improvement is needed here?


## Best Practice 33: Provide Feedback to the Original Publisher
## Best Practice 34: Follow Licensing Terms
## Best Practice 35: Cite the Original Publication


This is already done by statistical offices based on agreed rules.



