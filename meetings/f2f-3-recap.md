# SDWIG October 2018 Face to face recap
(this recap is based on [minutes day 1](https://www.w3.org/2018/10/22-sdw-minutes.html) and [minutes day 2](https://www.w3.org/2018/10/23-sdw-minutes.html))

The SDWIG met at [W3C TPAC](https://www.w3.org/2018/10/TPAC/) for a two day face to face meeting. 

In summary, its job is to incubate standardisation ideas related to Spatial Data, which we do using the [W3C strategy funnel][1], to see where they fit in OGC/W3C activities, and to develop best practices. We have a number of [projects][2] in the works. 

## evaluation of group workings
We discussed how the interest group is working. When we were a working group, there was more work going on in the group itself. Now, we are more in a coordinating role, but still getting used to that. Some points made during the meeting: 
- we have a lot of individual topics, each one led by one individual with little engagement from others in the group. There are not enough people active in the group to make huge progress.
- we need to have a bigger external group that is channeling efforts on each task, especially on the best practice tasks as we are producing these directly.
- as part of our incubation work, we have helped in gathering support from the right people around the things we are incubating. 
- we should update the milestones in the charter. Also, we are not working on Describing moving objects or an SSN Primer. 
- the group could leverage resources available at OGC. If we have a list of top 5 priorities, that helps.
- we switched from having regular teleconferences to a mode where it runs a focus week the first week of each month. This is sort of working; we are looking for ways to improve (action on chairs and W3C team contact).

## project: WebVMT
- WebVMT project page: https://‌github.com/‌w3c/‌sdw/‌projects/‌8
- WebVMT editor's draft: https://‌w3c.github.io/‌sdw/‌proposals/‌geotagging/‌webvmt/ - now includes the data model and the syntax (which has switched from XML to JSON).

WebVMT is in the incubation stage in the [strategy funnel][1]. There is now an engagement website: https://‌webvmt.org. One of the outcomes of the September OGC meeting is that there is a requirement for body-worn cameras to provide geospatial information. This is the current focus of WebVMT incubation work. An early adopter in the dash-cam market is implementing WebVMT now. 

In the [W3C Credentials community group](https://www.w3.org/community/credentials/), there is work being done on verifiable claims that could be a way to verify the location track. An aspect here is to claim that the location is linked to the actual footage. A verifiable claim could be a way to attach a proof that the video and location are associated. This may be of interest to the [OGC Security domain working group](http://www.opengeospatial.org/projects/groups/securitydwg) as well.

W3C are working on web video text tracks, which is similar to the WebVMT idea. WebVTT is at Candidate Recommendation. There was an ad hoc discussion between WebVMT and WebVTT people. 

Getting more early adopters is needed. To this end a [W3C community group](https://www.w3.org/community/blog/2018/10/16/proposed-group-web-video-map-tracks-webvmt-community-group/) has been proposed. 

In the strategy funnel, WebVMT stays in the incubation phase for now. 

## project: MapML
- MapML project page: https://‌github.com/‌w3c/‌sdw/‌projects/‌10
- MapML editor's draft: https://maps4html.github.io/MapML/spec/

MapML is in the incubation stage in the [strategy funnel][1]. It is currently being worked on within an OGC testbed. 

The aim of MapML is to make it easy to create maps within web pages. Assuming that APIs and javascript are harder than HTML, MapML is envisioned as a 'fork' of HTML with its own media type. Native browser support is a goal. This was discussed in the SDWIG and during a breakout session on Wednesday. Browser vendors indicated that they prefer not to add more things, as browsers are already big pieces of software and there already are enough primitives to build what we need.

There was also relevant guidance by the Technical Architecture Group (TAG): domain specific languages such as existing ones for math, music, chemistry, etc. can be implemented in browsers using Web Components. These are a useful building block that allow the preservation of semantics and no need to wait for browsers to integrate support. 

This guidance can also be applied to MapML. The best way forward seems not to try to get native browsers to support MapML, but to look at web components and polyfills. 

## project: CityJSON
- project page: https://‌github.com/‌w3c/‌sdw/‌projects/‌14
- github repository: https://github.com/tudelft3d/cityjson/

CityJSON is aimed at being a second encoding for OGC CityGML. Current status: version 0.8 has been released and is reasonably complete. Supports the creation of application domain extensions. [cjio](https://github.com/tudelft3d/cjio), a Python CLI to process and manipulate CityJSON files, is available.

CityGML 3.0 (under development at OGC) is considered too complex by CityJSON developers and currently there does not seem to be a way to have software development as a consideration in the standardisation process. There is a wider discussion at the moment among OGC members (on the tc-discuss mailing list) on requiring implementation evidence as part of the standardisation process. 

The SDWIG discussed this and came to this resolution: "In principal, the Spatial Data on the Web IG strongly supports the need to create a feedback loop between practical experience implementing a spec and its design to create effective standards implemented by the wider community. The SDW IG will work on a formal response on CityGML v3 raising technical concerns to be sent to the tc-discuss OGC list."

Developing CityJSON against CityGML v2 is a risk. Therefore, while CityJSON development will continue, standardisation will be put on hold pending the outcome of the OGC discussion. 

## project: best practice for statistical data
- project page: https://‌github.com/‌w3c/‌sdw/‌projects/‌2

This work item is planned as a Note to be published in Q2 2019 an is supposed to be produced by the SDWIG. Currently, work hasn't progressed far due to a lack of people who are active on this topic. There is a work item in progress to look at all the best practices in the [DWBP][3] and verify whether and how statistical data comply. 

The OGC statistical domain working group, if and when it is established, is seen by the SDWIG as a important group to collaborate with on this topic. The work could, for example, be mainly done within the OGC DWG and the SDWIG used for visibility.

Statistical data as it is currently published could often benefit from a more 'webby' approach. Best practices could include guidance on how to relate statistics to raw data that was used to create it. 

There is work lined up in the UK on agricultural (statistical) data. Stats BP work could be tested and receive feedback from this project. 

## open discussion
Several people were present from the new [Immersive Web working group](https://www.w3.org/immersive-web/). They are exploring browser primitives to allow use of augmented reality components etc. Spatial data publishing is a big area and relevant to AR, especially moveable, trackable things that are not just fixed places in the world (Current guidelines focus on static things). 

There is an AR experiment in the OGC innovation program, but it's currently on hold. The OGC Moving Features work is also of interest. The SDWIG will get in touch with the OGC Moving Features group to discuss overlap. This is also of interest to the Immersive Web people at W3C.  

## CovJSON
- project page: https://‌github.com/‌w3c/‌sdw/‌projects/‌11
- note: https://www.w3.org/TR/covjson-overview/

CovJSON is an item in the investigation phase of the W3C strategy funnel. 

MetOffice have a lot of coverage data and is interested in standardising CovJSON, but seek a partner in this. 

Next steps: 
- Liaise with OGC and ISO to analyse the harmonisation of ISO19123 and CovJSON. 
- Develop vocabularies to support the CovJSON encoding. 

TODO finish recap day 2.

[1]: https://‌github.com/‌w3c/‌strategy/‌projects/‌2?card_filter_query=label%3Ageospatial
[2]: https://‌github.com/‌w3c/‌sdw/‌projects
[3]: https://www.w3.org/TR/dwbp/