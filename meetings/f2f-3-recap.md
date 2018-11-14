# SDWIG October 2018 Face to face recap
(this recap is based on [minutes day 1](https://www.w3.org/2018/10/22-sdw-minutes.html) and [minutes day 2](https://www.w3.org/2018/10/23-sdw-minutes.html))

The SDWIG met at [W3C TPAC](https://www.w3.org/2018/10/TPAC/) for a two day face to face meeting with [this agenda](https://www.w3.org/2017/sdwig/meetings/f2f-3.html).

In summary, its job is to incubate standardisation ideas related to Spatial Data, which we do using the [W3C strategy funnel][1], to see where they fit in OGC/W3C activities, and to develop best practices. We have a number of [projects][2] in the works.

## evaluation of group workings
We discussed the functioning of the interest group. When we were a working group, there was more work going on in the group itself. Now, we are more in a coordinating role, but still getting used to that. Some points made during the meeting:
- we have a lot of individual topics, each one led by one individual with little engagement from others in the group. There are not enough people active in the group to make huge progress.
- we need to have a bigger external group that is channeling efforts on each task, especially on the best practice tasks as we are producing these directly.
- as part of our incubation work, we have helped in gathering support from the right people around the things we are incubating.
- we should update the milestones in the charter. Also, let the charter reflect we are not working on Describing moving objects or an SSN Primer.
- the group could leverage resources available at OGC. If we have a list of top 5 priorities, that helps.
- we switched from having regular teleconferences to a mode where we run a focus week the first week of each month. We communicate via Github and the mailing list. This is sort of working; we are looking for ways to improve (action on chairs and W3C team contact).

## project: WebVMT
- WebVMT project page: https://github.com/w3c/sdw/projects/8
- WebVMT editor's draft: https://w3c.github.io/sdw/proposals/geotagging/webvmt/ - now includes the data model and the syntax (which has switched from XML to JSON).

WebVMT is in the incubation stage in the [strategy funnel][1]. There is now an engagement website: https://webvmt.org. One of the outcomes of the September OGC meeting is that there is a requirement for body-worn cameras to provide geospatial information. This is the current focus of WebVMT incubation work. An early adopter in the dash-cam market is implementing WebVMT now.

In the [W3C Credentials community group](https://www.w3.org/community/credentials/), there is work being done on verifiable claims that could be a way to verify the location track. An aspect here is to claim that the location is linked to the actual footage. A verifiable claim could be a way to attach a proof that the video and location are associated. This may be of interest to the [OGC Security domain working group](http://www.opengeospatial.org/projects/groups/securitydwg) as well.

W3C are working on web video text tracks, which is similar to the WebVMT idea. WebVTT is at Candidate Recommendation. There was an ad hoc discussion between WebVMT and WebVTT people. WebVMT recently adopted JSON as the format for the tracks, following WebVTT as it is supported by browsers.

Getting more early adopters for WebVMT is needed. To this end a [W3C community group](https://www.w3.org/community/blog/2018/10/16/proposed-group-web-video-map-tracks-webvmt-community-group/) has been proposed.

In the strategy funnel, WebVMT stays in the incubation phase for now.

## project: MapML
- MapML project page: https://github.com/w3c/sdw/projects/10
- MapML editor's draft: https://maps4html.github.io/MapML/spec/

MapML is in the incubation stage in the [strategy funnel][1]. It is currently being worked on within an OGC testbed.

The aim of MapML is to make it easy to create maps within web pages. Assuming that APIs and javascript are harder than HTML, MapML is envisioned as a 'fork' of HTML with its own media type. Native browser support is a goal. This was discussed in the SDWIG and during a breakout session on Wednesday. Browser vendors indicated that they prefer not to add more things, as browsers are already big pieces of software and there already are enough primitives to build what we need.

There was also relevant guidance by the Technical Architecture Group (TAG): domain specific languages such as existing ones for math, music, chemistry, etc. can be implemented in browsers using Web Components. These are a useful building block that allow the preservation of semantics and no need to wait for browsers to integrate support.

This guidance can also be applied to MapML. The best way forward seems not to try to get native browsers to support MapML, but to look at web components instead.

## project: CityJSON
- project page: https://github.com/w3c/sdw/projects/14
- github repository: https://github.com/tudelft3d/cityjson/

CityJSON is aimed at being a second encoding for OGC CityGML. Current status: version 0.8 has been released and is a reasonably complete implementation of CityGML 2.0. It supports the creation of application domain extensions. [cjio](https://github.com/tudelft3d/cjio), a Python CLI to process and manipulate CityJSON files, is available.

CityGML 3.0 (under development at OGC) is considered too complex by CityJSON developers and currently there does not seem to be a way to have software development as a consideration in the standardisation process. There is a wider discussion at the moment among OGC members (on the tc-discuss mailing list) on requiring implementation evidence as part of the standardisation process. Meanwhile the CityJSON developiers do not want to implement CityGML 3.0.

The SDWIG discussed this and came to this resolution: "In principal, the Spatial Data on the Web IG strongly supports the need to create a feedback loop between practical experience implementing a spec and its design to create effective standards implemented by the wider community. The SDW IG will work on a formal response on CityGML v3 raising technical concerns to be sent to the tc-discuss OGC list."

Developing CityJSON against CityGML v2 is a risk. Therefore, while CityJSON development will continue, standardisation will be put on hold pending the outcome of the OGC discussion.

## project: best practice for statistical data
- project page: https://github.com/w3c/sdw/projects/2

This work item is planned as a Note to be published in Q2 2019 and is supposed to be produced by the SDWIG. Currently, work hasn't progressed far due to a lack of people who are active on this topic. There is a work item in progress to look at all the best practices in the [DWBP][3] and verify whether and how statistical data comply.

Statistical data as it is currently published could often benefit from a more 'webby' approach. Best practices could include guidance on how to relate statistics to raw data that was used to create it.

The OGC statistical domain working group, if and when it is established, is seen by the SDWIG as a important group to collaborate with on this topic. The work could, for example, be mainly done within the OGC DWG and the SDWIG used for visibility.

There is work lined up in the UK on agricultural (statistical) data. Stats BP work could be tested and receive feedback from this project.

## open discussion
Several people were present from the new W3C [Immersive Web working group](https://www.w3.org/immersive-web/). They are exploring browser primitives to allow use of augmented reality components etc. Spatial data publishing is a big area and relevant to AR, especially moveable, trackable things that are not just fixed places in the world (Current guidelines focus on static things).

There is an AR experiment in the OGC innovation program, but it's currently on hold. The OGC Moving Features work is also of interest. The SDWIG will get in touch with the OGC Moving Features group to discuss overlap. This is also of interest to the Immersive Web people at W3C.  

## project: CovJSON
- project page: https://github.com/w3c/sdw/projects/11
- note: https://www.w3.org/TR/covjson-overview/

CovJSON is an item in the investigation phase of the W3C strategy funnel.

MetOffice have a lot of coverage data and is interested in standardising CovJSON, but seek a partner in this.

Next steps:
- Liaise with OGC and ISO to analyse the harmonisation of ISO19123 and CovJSON.
- Develop vocabularies to support the CovJSON encoding.

## project: SSN Extensions
- project page: https://github.com/w3c/sdw/projects/7
- note: https://w3c.github.io/sdw/proposals/ssn-extensions/

Two [extensions](https://w3c.github.io/sdw/proposals/ssn-extensions/) of the existing [SSN Recommendation](https://www.w3.org/TR/vocab-ssn/) have been described by Simon Cox, with the intention of being published as a W3C Note.
- A possibility to link an observation directly to its ultimate feature of interest
- A possibility to group observations in a collection

Simon Cox is currently the only person working on the Note. Help is needed with:
- the shEx/SHACL/SPARQL constructs that are used to describe the rules related to these extensions
- understanding the relationship between ObservationCollection and RDF Data Cube
- adding examples

The SDWIG resolved to publish the SSN Extensions draft Note as First Public Working Draft (once editorial fixes are in).

## project: SSN/SOSA ontology amendments
- project page: https://github.com/w3c/sdw/projects/3

There are two outstanding issues with the current SSN Recommendation.

1) Add SSN hasProperty to SOSA namespace [[#1006]](https://github.com/w3c/sdw/issues/1006)
The SSN ontology is modular: a simple core (SOSA) and full SSN, both published in their own namespace. Issue 1006 is about moving a property from SSN to the SOSA core. This would be a normative change to the spec, breaking existing implementations. Normally, being an Interest Group, the SDWIG cannot make such a change - a working group is needed. However, if the SDWIG sees it as an unintentional mistake, it could be treated as an erratum.  

The SDWIG resolved to, after checking with other SSN editors, add an hasProperty property to the SOSA namespace, with an "ssn:hasProperty owl:equivalentProperty sosa:hasProperty" axiom, and "ssn:hasProperty owl:propertyChainAxiom ( [ owl:inverseOf sosa:hasFeatureOfInterest ] sosa:observedProperty )" as errata change.

However, since then there has been an [objection](https://github.com/w3c/sdw/issues/1006#issuecomment-432421956). This issue is not yet resolved.

2) Inverse property for ssn:hasSubSystem [[#1022]](https://github.com/w3c/sdw/issues/1022)

The SDWIG resolved that we will not add an inverse property for ssn:hasSubSystem, because this would introduce a normative change, and can be done in one's own applications.

## project: Time ontology amendments
- project page: https://github.com/w3c/sdw/projects/5
- recommendation: https://www.w3.org/TR/owl-time/

The SDW IG is tasked with handling any errata for the Time ontology, but no further work is envisaged. Two issues for the Time ontology were discussed:

1) Time ontology uses XML Schema Datatypes that are not allowed in OWL 2 [[#987]](https://github.com/w3c/sdw/issues/987)

The SDWIG resolved that we will not make any change to the Time Ontology on the basis that the aim of the Time ontology was to ensure backward compatibility with existing implementations.

2) Representation of a generic time of day in the W3C Time Ontology [[#988]](https://github.com/w3c/sdw/issues/988)

The SDWIG resolved not to fix this issue. It introduces a useful requirement to introduce recurring instants, but addition to the OWL Time ontology would require re-chartering the group. The Interest Group is not planning on working on this feature for now, but would welcome an extension proposal.

## project: Spatial Data on the Web best practices
- project page: https://github.com/w3c/sdw/projects/1
- Best Practices: https://www.w3.org/TR/sdw-bp

The current focus of the SDWIG regarding the best practices is to encourage adoption.

Related to Best Practice 2, "Make your spatial data indexable by search engines", there was a [workshop on Google's new Dataset Search feature](https://webgate.ec.europa.eu/fpfis/wikis/display/InspireMIG/Google+Dataset+Search+workshop+2018-09-19) during the INSPIRE conference in September. JRC and several European countries have planned activity on this.

A [second draft of DCAT v2](https://www.w3.org/TR/2018/WD-vocab-dcat-2-20181016/) has been published, a vocabulary for publishing dataset descriptions. The revision includes services as first class citizens, such as OGC services, APIs, etc. There is some discussion on the usefulness of this. Clemens Portele will bring these concerns to the Dataset Exchange Working Group. Also, the SDWBP will need to be reviewed to see if changes in DCAT have impact on it.

The SDWIG is working on [implementation reports](https://github.com/w3c/sdw/blob/gh-pages/bp/BP-implementation-reports.md) of the best practice. There are two available now, and a third on its way. These reports describe how the best practices were implemented in specific data publications and how well they conform. Most best practices have been implemented by one or more implementors, but best practice 14, "Describe the positional accuracy of spatial data", has not yet been implemented as far as we know. More work may be needed on this best practice to make it implementable.

There are plans to create more implementation reports: Ordnance Survey will and UK Environment Agency may create one. More are welcome. Preferably, implementation reports refer to operational data and services; they are not required to implement all 14 SDW best practices. The SDWIG plans to publish an article in an industry journal based on the implementation reports.

Future work around the best practices was briefly discussed as well, including creating a cookbook and filling the [gaps in current practice](https://www.w3.org/TR/sdw-bp/#conclusions). It was mentioned that work to fill one of the gaps, concerning content negotiation for CRS, is already planned (outside the SDWIG).

## joint meeting with W3C Web of Things Working group on OGC SensorThings API
The W3C [Web of Things (WoT) Working group](https://www.w3.org/WoT/WG/) and SDWIG had a 1 hour joint session to discuss the OGC standard SensorThings API and how it fits with the Web of Things standards. Michael Jacoby (Frauenhofer) presented SensorThings API to the group.

The relevant standard the WoT is developing is called [Thing Description](https://www.w3.org/TR/wot-thing-description/). It provides a standard way to describe interfaces and metadata of web-enabled devices, including sensors. During the joint meeting it was established that an OGC SensorThings API can be described using a Thing Description, thus making it part of the web of things as W3C envisions it. This will be tested during the next WoT plugfest in December. Michael Jacoby will keep us posted about this. Doing this work is of interest to the WoT WG as well, because they can use it as part of the required implementation evidence when their standard goes to Candidate Recommendation phase.

One feature of the SensorThings API that might not fit in a Thing Description are its advanced query functions. Another aspect of the SensorThings API is that it usually exposes a collection of sensor services. The WoT group are incubating an idea around Thing Directories; this relates to thing collections and their discovery. However, the WoT WG is not yet chartered to standardize this.

## project: Geospatial web roadmap
- project page: https://github.com/w3c/sdw/projects/9
- the roadmap: https://w3c.github.io/web-roadmaps/sdw/

This roadmap aims to be an overview of the spatial + web standardisation landscape; it also gives insight into the workplan of the SDWIG and highlights standards that should not be used in a spatial web context. The roadmap is meant as a short, maintainable list without detailed discussion or explanations about how to make existing standards more 'webby'. The best practices fulfill that role.

Linda van den Brink has been working on the roadmap and asked the SDWIG for feedback. Two main points were made:
- On the roadmap, standards are currently grouped into four categories: capture, represent, publish, and transform. The SDWIG decided to drop the "transform" category as this was causing confusion. The standards in this category can be moved to one of the other categories.
- The roadmap also lists standards that not are compliant to modern Web architecture. Those are currently listed under "Features not covered by ongoing work". This label will be renamed to clarify what is meant, and standards in that list will be accompanied by a rationale as to why they are considered not compliant to modern Web architecture.

## new project proposals
- project page: https://github.com/w3c/sdw/projects/15

There was a short discussion on three proposals for new work that were brought forward:
- a simple stats ontology
- statistical time periods
- a dicing or partitioning ontology for RDF Data Cubes

The first two will be raised in the new OGC Statistical Domain Working Group. They could also be included in the Statistical data on the Web BP.

The third will be followed up with examples from MetOffice data.

[1]: https://github.com/w3c/strategy/projects/2?card_filter_query=label%3Ageospatial
[2]: https://github.com/w3c/sdw/projects
[3]: https://www.w3.org/TR/dwbp/
