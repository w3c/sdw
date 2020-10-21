var respecConfig = {
    specStatus: "ED",
    shortName: "owl-time",
    //publishDate:  "2016-05-18",
    previousPublishDate: "2016-07-12",
    previousMaturity: "WD",
    previousURI: "https://www.w3.org/TR/2016/WD-owl-time-20160712/",
    edDraftURI: "https://w3c.github.io/sdw/time/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
        name:       "Simon Cox",
        orcid:      "0000-0002-3884-3420",
        company:    "CSIRO",
        url:        "http://people.csiro.au/Simon-Cox",
        companyURL: "https://www.csiro.au/",
        w3cid: 1796
    },{
        name:       "Chris Little",
        company:    "Met Office",
        companyURL: "http://www.metoffice.gov.uk/",
        orcid:      "0000-0002-1442-3712"
      }],
    otherLinks: [
    {
      key: "Editors of 2006 Working Draft",
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
        value: "OGC 16-071r3"
      }]
    }],
    wg: "Spatial Data on the Web Working Group",
    wgURI: "https://www.w3.org/2015/spatial/",
    wgPublicList: "public-sdw-comments",
    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/75471/status",
    implementationReportURI: "https://www.w3.org/2015/spatial/wiki/OWL_Time_Ontology_adoption",
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
    overrideCopyright: "<p class='copyright'><a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2020 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='https://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='https://www.keio.ac.jp/'>Keio</a>, <a href='https://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a>, <a href='https://www.w3.org/Consortium/Legal/copyright-documents'>W3C</a> and <a href='https://www.ogc.org/ogc/document'>OGC</a> document use rules apply.</p>",

    localBiblio: {
      "af-97": {
        authors: ["J.F. Allen" , "G. Ferguson"], 
        date: "1997", 
        href: "http://dx.doi.org/10.1007/978-0-585-28322-7_7",
        title: "Actions and events in interval temporal logic In: Spatial and Temporal Reasoning. O. Stock, ed., Kluwer, Dordrecht, Netherlands, pp. 205-245." 
      },
      "al-84": {
        authors: ["J.F. Allen"], 
        date: "1984", 
        href: "http://dx.doi.org/10.1016/0004-3702%2884%2990008-0",
        title: "Towards a general theory of action and time. Artificial Intelligence 23, pp. 123-154."
      },
      "co-15": {
        authors: ["S.J.D. Cox"], 
        date: "2015", 
        href: "http://dx.doi.org/10.3233/SW-150187",
        title: "Time Ontology Extended for Non-Gregorian Calendar Applications. Semantic Web Journal 7, pp. 201-209"
      },
      "cr-05": {
        authors: ["S.J.D. Cox" , "S.M. Richard"], 
        date: "2005", 
        href: "http://dx.doi.org/10.1130/GES00022.1",
        title: "A formal model for the geologic time scale and global stratotype section and point, compatible with geospatial information transfer standards. Geosphere 1 119. "
      },
      "cr-14": {
        authors: ["S.J.D. Cox" , "S.M. Richard"], 
        date: "2014", 
        href: "http://doi.org/10.1007/s12145-014-0170-6",
        title: "A geologic timescale ontology and service. Earth Sci. Informatics.. 8 5–19. "
      },
      "fips": {
        href: "http://www.daml.org/2003/02/fips55/",
        title: "FIPS 55 County instance file. "
      },
      "hp-04": {
        authors: ["J. R. Hobbs" , "F. Pan"], 
        date: "2004", 
        href: "http://dx.doi.org/10.1145/1017068.1017073",
        title: "An Ontology of Time for the Semantic Web. ACM Transactions on Asian Language Processing (TALIP): Special issue on Temporal Information Processing, 3, No. 1, March 2004, pp. 66-85. "
      },
      "iso19108": {
        date: "2002",
        href: "https://www.iso.org/standard/26013.html",
        title: "ISO 19108:2002 Geographic information -- Temporal schema. "
      },
      "iso-19111-2007": {
        authors: ["ISO/TC 211"],
        href: "https://www.iso.org/standard/41126.html",
        title: "Geographic information -- Spatial referencing by coordinates",
        publisher: "ISO",
        status: "International Standard",
        date: "2007",
        id: "iso-19111-2007"
      },
      "iso-19111-2019": {
        authors: ["ISO/TC 211"],
        href: "https://www.iso.org/standard/74039.html",
        title: "Geographic information -- Referencing by coordinates",
        publisher: "ISO",
        status: "International Standard",
        date: "2019",
        id: "iso-19111-2019"
      },
      "iso-C": {
        href: "http://www.daml.org/2001/09/countries/iso",
        title: "ISO Country instance file. "
      },
      "mf-13": {
        authors: ["X. Ma" , "P. Fox"], 
        date: "2013", 
        href: "http://dx.doi.org/10.1007/s12145-013-0110-x",
        title: "Recent progress on geologic time ontologies and considerations for future works, Earth Sci. Informatics. 6 31–46. "
      },
      "oe-06": {
        href: "http://www.w3.org/2006/time-entry",
        title: "OWL code of the entry sub-ontology of time. "
      },
      "ogc-topic-2": {
        authors: [ "Roger Lott" ],
        title: "OGC Abstract Specification Topic 2 - Geographic information - Referencing by coordinates",
        date: "2019",
        href: "http://docs.opengeospatial.org/as/18-005r4/18-005r4.html"
      },
      "ot-06": {
        href: "http://www.w3.org/2006/time",
        title: "OWL code of the time ontology. "
      },
      "owl-S": {
        href: "http://www.daml.org/services/owl-s/",
        title: "OWL-S homepage. "
      },
      "pa-05": {
        authors: ["F. Pan"], 
        date: "2005", 
        href: "https://pdfs.semanticscholar.org/daf3/2ec8803b0749952ee89be3644303cb6b3ff2.pdf",
        title: "A Temporal Aggregates Ontology in OWL for the Semantic Web. In: Proceedings of the AAAI Fall Symposium on Agents and the Semantic Web, Arlington, Virginia, pp. 30-37. "
      },
      "ph-04": {
        authors: ["F. Pan" , "J.R. Hobbs"], 
        date: "2004", 
        href: "http://www.isi.edu/%7Ehobbs/time/pub/pan-hobbs-AAAI-SSS04.pdf",
        title: "Time in OWL-S. In: Proceedings of the AAAI Spring Symposium on Semantic Web Services, Stanford University, CA, pp. 29-36. "
      },
      "ph-05": {
        authors: ["F. Pan" , "J.R. Hobbs"], 
        date: "2005", 
        href: "http://www.isi.edu/%7Ehobbs/FLAIRS-05.pdf",
        title: "Temporal Aggregates in OWL-Time. In Proceedings of the 18th International Florida Artificial Intelligence Research Society Conference (FLAIRS), Clearwater Beach, Florida, pp. 560-565, AAAI Press. "
      },
      "pr-OS": {
        href: "http://www.daml.org/services/owl-s/0.9/Process.owl",
        title: "The process file of the OWL-S 0.9 release"
      },
      "rc-14": {
        href: "http://nvlpubs.nist.gov/nistpubs/jres/109/2/j92cur.pdf",
        title: "The Remarkable Metrological History of Radiocarbon Dating [II]",
        date: "March-April 2004",
        authors: ["Journal of Research of the National Institute of Standards and Technology"]
      }
    },
    issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
