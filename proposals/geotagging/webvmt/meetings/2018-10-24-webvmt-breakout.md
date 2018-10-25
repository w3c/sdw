% WebVMT breakout session — 2018-10-24

![W3C Logo](https://www.w3.org/Icons/w3c_home)


# WebVMT breakout session — Minutes

***– DRAFT Minutes –***


**Date:** 2018-10-24

See also the [Agenda]() and the [IRC Log](undefined)

## Attendees

**Present:** Eric Carlson, Jer Noble, Andreas Tai, Chris Needham, Toshihiko Yamakami, Mounir Lamouri, Francois Beaufort, Linda van den Brink, Jeremy Tandy, Mark Watson

**Regrets:** 

**Guests:** 

**Chair:** Rob Smith

**Scribe(s):** cpn, jtandy

## Content:

---


**Rob:** I'll put the slides on the Spatial Data on the Web public mailing list  
… I'm developing a new format called Web Video Map Tracks (WebVMT)  
… It's an enabling technology, build solutions on top of it  
… Designed for the web, a common format for sharing  
… Not an embedded format, which is how other geolocation metadata is handled  
… Small index file that a web crawler can read  
… Includes a presentation element  
… webvmt.org - a top level presentation, not too technical, blog and technical demos  
… For the more technical, there's an Editor's Draft  
… https://w3c.github.io/sdw/proposals/geotagging/webvmt/  
… the WebVMT format follows the WebVTT block structure  
… borrows a lot from WebVTT, a mature CR  
… Differences between these: the map track and the video are linked through the Track, similar to WebVTT  
… WebVMT includes a Map block indicating the region, a description of the map, where it's centered etc  
… There's a Media block that links to the media file  
… If it's of interest, you can find the frames of interest in the media file  
… The cue end time, which is optional. You may not know where the end of the media is.  
… Why put the media block in the VMT file? It's a hint, for the content life cycle of the file  
… e.g., recording a trip on your phone  
… How to associate the files? A media file and a VMT file with a link to the media, and the cues  
… Record as you capture  
… Display on the web in a browser. The webvmt website has a demo  
… Store the data in an archive, look back in time. Example, drones surveying a wind farm  
… Want to see frames of a specific turbine, see what's wrong with it  
… For a TextTrack approach, there's some support in some browsers at least  
… Currently, subtitles are supported using VTTCue, and metadata using VTTCue. But that's less clear  
… Map Tracks, I'm proposing we have Map metadata instead of text metadata  
… Somehow try to thread it through the VTT API. I don't know if that can be done  
… Discriminated by its MIME type  
… Handle using a to-be-defined VMTCue  

**Eric:** A third option is a metadata cue, not a VTTCue, but a generic metadata cue  
… that contains enough info for the application to determine what the payload is and act appropriately  
… so instead of VTTCue as the API, it would the the as yet not defined DataCue  

**Andreas:** It would be good to differentiate between what's defined in the standard, and what's implemented  
… HTML defines the TextTrackCue. VTT implements it for a specific format  
… Could see how TextTrackCue could be used  
… It is really metadata or is it data?  

**Eric:** Metadata is ancilliary data associated with something else  
… Metadata doesn't imply the payload is text based. It's some associated arbitrary data  

**Rob:** I have a data model and a syntax in the ED  
… Have an early implementer (in the dash-cam market), so I wanted to write enough info for people to implementers  
… Goals for this session are to identify video metadata requirements for these markets  
… Mobile video devices, dash-cams, dromes, body-worn video, helmet cameras, smartphones  
… Location aware devices able to record video  
… Look at current status of WebVTT, or TextTrack metadata cue  
… Whether TextTrack metadata cues are suitable, or as an alternative create a new map cue specifically for geolocation  
… There may be other things coming through we don't know of yet, want to future proof  
… Stretch goal: estimate time and effort for proposed solutions  

**Andreas:** Was discussed yesterday in the WICG  

**Chris:** In the media and entertainment group have been working on requirements  
… A generic capability for events on a timeline  
… We have a specific use case for in-band events in a media container  
… to trigger events eg. on a web page  
… since the discussion, we have submitted the requirement into the WICG  
… Eric responded to describe the current DataCue implementation in WebKit  
… There's a DataCue API spec in the W3C HTML - but not WhatWG  

**Eric:** But there's no support for this API in browsers  

**Chris:** Microsoft have support in the OS, but not in the browser  

**Andreas:** Is Apple willing to disclose the WebKit implementation?  

**Eric:** Yes  

**Chris:** On Tuesday we got approval to create a repo in WICG  
… I will follow this up  

**Eric:** Webkit doesn't expose geo medata from inside a media file. Would be easy to add using the existing interface  
… imagine a video with a caption track and various kinds of metadata  
… from the script's perspective, the video would have 3 text tracks, and all of the types of metadata that Webkit understood would be sent as cues in the "metadata track"  
… there isn't actually a metadata track in the media, but that's how we'd expose it  

**Rob:** What do you mean by in-band?  

**Eric:** It's events that are embedded in the media, as opposed to files downloaded separately  
… It would seem to make sense for your format to be able to work with in-band geolocation metadata  
… The data would be presented to the web app in the same way as if it came from one of your VMT files  

**Rob:** So if there's a video with embedded geolocation data, and another video file with VMT data alongside it, they'd be presented in the same way  

**Eric:** Yes  
… The cue payload would have to accommodate just the geolocation data  

**Rob:** Francois suggest that we should use JSON instead of XML, I agree so we've rewritten it in the spec  
… I noticed the WebVTT spec has a JSON example using latitude and longitude  
… How would you present the data in the cue?  

**Eric:** I'm not sure, we'll need to decide  

**Jer:** It could be the metadata is passed as binary, we want to pass off the definition to another standards body  

**Eric:** If we have a format like this,and we're able to convert from the binary format, as in a 3GPP file, I think it makes sense to convert it into a form more appropriate for the web  

**Jer:** We don't want to be in the business of recognising all of those  

**Andreas:** It's worth looking at gaps in the TextTrack API, may be other gaps needing to be addressed  
… Then a format-independent DataCue  
… Then a specific format, which is the geo format  
… For the geo format, how it's created is a separate problem  

**Chris:** Discussed with Mark Vickers about having a registry type approach for different event information from media containers, similar to the byte stream registry for MSE  

**Eric:** I was thinking similarly  

**Andreas:** It should be possible to create data cues for arbitrary data  

**Eric:** The W3C DataCue has a constructor taking an ArrayBuffer. That's not adequate, we need to come up with an interface that works  
… I agree we need to be able to create objects from script as well  

**Rob:** Seems we're making good progress to agreementr  

**Chris:** Also defining synchronisation requirements?  

**Eric:** We're talking about this kind of metadata being piggybacked on to a more generic mechanism  
… Would be useful for you (Rob) to define what kind of timing accuracy you require  

**Rob:** Could be different timing for different kinds of metadata  
… Audio cues were mentioned in the IG meeting, needing to be synchronised to frame accuracy  

**Chris:** I suggest not going into the specifics at this stage  

**Eric:** It's a rat hole...  
… Not every use case may be possible to support  

**Rob:** May be worth documenting what can't be supported  
… Goals - identify video metadata requirements, may be beyond the scope for this meeting  
… The webvmt website answers these questions. We've identified markets there, use cases in the ED  
… Happy to hear more use cases, please get in touch. Or add more details to the existing use cases  

**Andreas:** VTT also has a way to define metadata in files that aren't captions or subtitles  

**Jar:** I think you define whether it's metadata or not in the HTML  

**Eric:** I don't think WebVTT has the concept of metadata per-se  
… but this has nothing to do with WebVTT  

**Jer:** Can put a kind attribute in the header metadata  

**Andreas:** For text track status, not sure where this should be done, may be other groups  

**Jer:** WebVTT would only be useful if you know its type out of band. Is that sufficient?  

**Rob:** Is it fair to summarise as: We think there's a metadata cue that can present as text with some kind of type indentifier to allow distinguishing different kinds of metadata?  

**Andreas:** The gap is in HTML that you can't specify a type for the text track.  
… Would be useful for the metadata cue  
… An attribute to specify the type / mime type  

**Eric:** If the goal is a geolocation format or a generic data cue, it's kind of necessary  
… We should discuss in the CG is whether it's realistic to come up with a generic metadata file format  
… If we're able to come up with a generic metadata file format, a browser can add support once to support multiple use cases  

**Jer:** It could be polyfilled  

**Jeremy:** Discussion will be in the WICG?  

**Chris:** Yes  

**Rob:** Estimate scales and efforts?  

**Eric:** It's not possible to estimate  

**Jeremy:** What kind of velocity can we achieve?  

**Chris:** Entirely depenent on the effort from the people in this room  

**Eric:** I think we could get to something within a year, some things often take more  

**Rob:** The early implementer I have plans to implement by end of November  

**Eric:** If you have a solution that works now, that's fine  

**Rob:** And we're looking to the future  

**Eric:** Yes  

**Rob:** Thank you all for your input  

---


