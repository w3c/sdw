var respecConfig = {
    specStatus: "ED",
    shortName: "owl-time",
    //publishDate:  "2016-05-18",
    previousPublishDate: "2016-07-12",
    previousMaturity: "WD",
    previousURI: "https://www.w3.org/TR/2016/WD-owl-time-20160712/",
    edDraftURI: "http://w3c.github.io/sdw/time/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
        name: "Simon Cox",
        company: "CSIRO",
        companyURL: "http://www.csiro.au/", 
        w3cid: 1796
      },{
        name: "Chris Little",
        company: "Met Office",
        companyURL: "http://www.metoffice.gov.uk/"
      }],
    otherLinks: [
    {
      key: "Contributors",
      data: [ 
      {
        value: "Jerry R. Hobbs"
      },{
        value: "Feng Pan"
      }]
    },{
      key: "OGC Document Number",
      data: [
      {
        value: "OGC 16-071"
      }]
    }],
    wg: "Spatial Data on the Web Working Group",
    wgURI: "https://www.w3.org/2015/spatial/",
    wgPublicList: "public-sdw-comments",
    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/75471/status",
    inlineCSS: true,
    noIDLIn: true,
    noLegacyStyle: false,
      logos: [
      {
        src: "https://www.w3.org/StyleSheets/TR/2016/logos/W3C",
        alt: "W3C",
        height: "48",
        width: "72",
        url: "https://www.w3.org/"
      },
      {
        src: "https://www.w3.org/2017/01/ogc_logo.png",
        alt: "OGC",
        height: "68",
        width: "147",
        url: "http://www.opengeospatial.org/"
      }
      ],
    noRecTrack: false,
    overrideCopyright: "<p class='copyright'><a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2017 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='https://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='https://www.keio.ac.jp/'>Keio</a>, <a href='http://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a> and <a href='https://www.w3.org/Consortium/Legal/copyright-documents'>document use</a> rules apply.</p>",


    localBiblio: {
      "RDA" : {
        title: "Research Data Alliance",
        href: "http://rd-alliance.org"
      },
      "SCHEMA-ORG":{
        "href":"http://schema.org/",
        "title":"Schema.org"
       },
      "GeoJSON":{
        href:"http://geojson.org/geojson-spec.html",
        title:"The GeoJSON Format Specification",
        authors: ["Howard Butler", "Martin Daly", "Allan Doyle", "Sean Gillies", "Tim Schaub", "Christopher Schmidt"],
        date: "16 June 2008"
       },
       "SDW-UCR":{
        href:"https://www.w3.org/TR/sdw-ucr/",
        title:"Spatial Data on the Web Use Cases & Requirements",
        authors: ["Frans Knibbe", "Alejandro Llaves"]
       },
       "GeoSPARQL":{
        href:"http://www.opengeospatial.org/standards/geosparql",
        title:"GeoSPARQL - A Geographic Query Language for RDF Data",
        authors: ["Matthew Perry", "John Herring"],
        date: "10 September 2012"  
       }, 
       "Simple-Features":{
        href:"http://www.opengeospatial.org/standards/sfa",
        title:"Simple Feature Access - Part 1: Common Architecture",
        authors: ["John Herring"],
        date: "28 May 2011"    
       }, 
       "OandM":{
        href:"http://www.opengeospatial.org/standards/om",
        title:"Observations and Measurements",
        authors: ["Simon Cox"],
        date: "22 March 2011"      
       },
       "SSN":{
        href:"http://purl.oclc.org/NET/ssnx/ssn",
        title:"Semantic Sensor Network Ontology",
        authors: ["W3C Semantic Sensor Network Incubator Group"]
       },
       "gml":{
        href:"http://www.opengeospatial.org/standards/gml",
        title:"Geography Markup Language",
        authors: ["Clemens Portele (editor)"],
        date: "27 August 2007"
       },
  "AF-97":{
    authors: ["J.F. Allen" , "G. Ferguson"], 
date: "1997", 
href: "http://dx.doi.org/10.1007/978-0-585-28322-7_7",
title: "Actions and events in interval temporal logic In: Spatial and Temporal Reasoning. O. Stock, ed., Kluwer, Dordrecht, Netherlands, pp. 205-245." 
       },
  "AL-84":{
    authors: ["J.F. Allen"], 
date: "1984", 
href: "http://dx.doi.org/10.1016/0004-3702%2884%2990008-0",
title: "Towards a general theory of action and time. Artificial Intelligence 23, pp. 123-154."
       },
  "CO-15":{
    authors: ["S.J.D. Cox"], 
date: "2015", 
href: "http://dx.doi.org/10.3233/SW-150187",
title: "Time Ontology Extended for Non-Gregorian Calendar Applications. Semantic Web Journal 7, pp. 201-209"
       },
  "CR-05":{
    authors: ["S.J.D. Cox" , "S.M. Richard"], 
date: "2005", 
href: "http://dx.doi.org/10.1130/GES00022.1",
title: "A formal model for the geologic time scale and global stratotype section and point, compatible with geospatial information transfer standards. Geosphere 1 119. "
       },
  "CR-14":{
    authors: ["S.J.D. Cox" , "S.M. Richard"], 
date: "2014", 
href: "http://dx.doi.org/10.1007/s12145-014-0166-2",
title: "A geologic timescale ontology and service. Earth Sci. Informatics.. 8 5–19. "
       },
       "DCAT":{
        authors: ["Fadi Maali" , "John Erickson"], 
        date: "16 January 2014", 
        href: "https://www.w3.org/TR/vocab-dcat/", 
        title: "Data Catalog Vocabulary (DCAT) - W3C Recommendation"
       },
  "DE-09":{
    authors: ["B. Desruisseaux"], 
date: "2009", 
href: "http://www.ietf.org/rfc/rfc5545.txt",
title: "Internet Calendaring and Scheduling Core Object Specification (iCalendar), RFC5545. "
       },
  "FIPS":{
href: "http://www.daml.org/2003/02/fips55/",
title: "FIPS 55 County instance file. "
       },
  "HP-04":{
    authors: ["J. R. Hobbs" , "F. Pan"], 
date: "2004", 
href: "http://dx.doi.org/10.1145/1017068.1017073",
title: "An Ontology of Time for the Semantic Web. ACM Transactions on Asian Language Processing (TALIP): Special issue on Temporal Information Processing, 3, No. 1, March 2004, pp. 66-85. "
       },
  "ISO-19108":{
href: "http://www.iso.org/iso/iso_catalogue/catalogue_detail?csnumber=26013",
title: "ISO 19108:2002 Geographic information -- Temporal schema. "
       },
  "ISO-8601":{
href: "http://www.iso.org/iso/catalogue_detail?csnumber=40874",
title: "ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times"
       },
  "ISO-C":{
href: "http://www.daml.org/2001/09/countries/iso",
title: "ISO Country instance file. "
       },
  "MF-13":{
    authors: ["X. Ma" , "P. Fox"], 
date: "2013", 
href: "http://dx.doi.org/10.1007/s12145-013-0110-x",
title: "Recent progress on geologic time ontologies and considerations for future works, Earth Sci. Informatics. 6 31–46. "
       },
  "OE-06":{
href: "http://www.w3.org/2006/time-entry",
title: "OWL code of the entry sub-ontology of time. "
       },
  "OT-06":{
href: "http://www.w3.org/2006/time",
title: "OWL code of the time ontology. "
       },
  "OWL-2":{
href: "https://www.w3.org/TR/owl2-quick-reference/Built-in_Datatypes",
title: "Owl2-quick-reference"
       },
  "OWL-M":{
    authors: ["M. Horridge" , "P. Patel-Schneider"], 
date: "2012", 
href: "https://www.w3.org/TR/owl2-manchester-syntax/",
title: "OWL 2 Web Ontology Language Manchester Syntax (Second Edition).  W3C Working Group Note "
       },
  "OWL-S":{
href: "http://www.daml.org/services/owl-s/",
title: "OWL-S homepage. "
       },
  "OWL-T":{
    authors: ["J.R. Hobbs" , "F. Pan"], 
date: "2006", 
href: "https://www.w3.org/TR/2006/WD-owl-time-20060927/",
title: "Time Ontology in OWL. W3C Working Draft "
       },
  "PA-05":{
    authors: ["F. Pan"], 
date: "2005", 
href: "https://pdfs.semanticscholar.org/daf3/2ec8803b0749952ee89be3644303cb6b3ff2.pdf",
title: "A Temporal Aggregates Ontology in OWL for the Semantic Web. In: Proceedings of the AAAI Fall Symposium on Agents and the Semantic Web, Arlington, Virginia, pp. 30-37. "
       },
  "PH-04":{
    authors: ["F. Pan" , "J.R. Hobbs"], 
date: "2004", 
href: "http://www.isi.edu/%7Ehobbs/time/pub/pan-hobbs-AAAI-SSS04.pdf",
title: "Time in OWL-S. In: Proceedings of the AAAI Spring Symposium on Semantic Web Services, Stanford University, CA, pp. 29-36. "
       },
  "PH-05":{
    authors: ["F. Pan" , "J.R. Hobbs"], 
date: "2005", 
href: "http://www.isi.edu/%7Ehobbs/FLAIRS-05.pdf",
title: "Temporal Aggregates in OWL-Time. In Proceedings of the 18th International Florida Artificial Intelligence Research Society Conference (FLAIRS), Clearwater Beach, Florida, pp. 560-565, AAAI Press. "
       },
  "PR-OS":{
href: "http://www.daml.org/services/owl-s/0.9/Process.owl",
title: "The process file of the OWL-S 0.9 release"
       },
  "RC-14":{
href: "https://journals.uair.arizona.edu/index.php/radiocarbon/about/submissionsauthorGuidelines",
title: "Guidelines to Authors, Radiocarb. Mag. ",
date: "2014"
       },
  "TTL-14":{
    authors: ["E. Prud'hommeaux" , "G. Carothers"], 
date: "2014", 
href: "https://www.w3.org/TR/turtle/",
title: "RDF 1.1 Turtle - Terse RDF Triple Language. W3C Recommendation. "
       },
  "XSD-D":{ 
href: "https://www.w3.org/TR/xmlschema11-2/",
title: "XML Schema Definition Language (XSD) 1.1 Part 2: Datatypes",
    publisher: "W3C",
    specStatus: "recommendation",
    editors: [ {
      name: "David Peterson"
      } , 
      {
      name: "Shudi (Sandy) Gao 高殊镝"
      } , 
      {
      name: "Ashok Malhotra"
      } , 
      {
      name: "C. M. Sperberg-McQueen"
      } , 
      {
      name: "Henry S. Thompson"
      }],
    date: "5 April 2012"

       },
  "XPXQ-functions":{
    href: "https://www.w3.org/TR/xpath-functions-3/",
    title: "XPath and XQuery Functions and Operators 3.1",
    publisher: "W3C",
    specStatus: "recommendation",
    editors: [ {
      name: "Michael Kay"
      }],
    date: "21 March 2017"
    },
  "XSLT2":{
    href: "https://www.w3.org/TR/xslt20/",
    title: "XSL Transformations (XSLT) Version 2.0 ",
    publisher: "W3C",
    specStatus: "recommendation",
    date: "23 January 2007",
    editors: [ {
      name: "Michael Kay"
      }],
    }
  },
    issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
