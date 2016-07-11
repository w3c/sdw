var respecConfig = {
    specStatus: "ED",
    shortName: "owl-time",
    //publishDate:  "2016-05-18",
    previousPublishDate: "2006-09-27",
    previousMaturity: "FPWD",
    previousURI: "http://www.w3.org/TR/2006/WD-owl-time-20060927/",
    edDraftURI: "http://w3c.github.io/sdw/time/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
        name: "Simon Cox",
        company: "CSIRO",
        companyURL: "http://www.csiro.au/"
      },{
        name: "Chris Little",
        company: "Met Office",
        companyURL: "http://www.metoffice.gov.uk/"
      }],
    otherLinks: [
    {
      key: "OGC Document Number",
      data: [
      {
        value: "OGC 16-071"
      }]
      }],
    wg: "Spatial Data on the Web Working Group",
    wgURI: "http://www.w3.org/2015/spatial/",
    wgPublicList: "public-sdw-comments",
    wgPatentURI: "http://www.w3.org/2004/01/pp-impl/75471/status",
    inlineCSS: true,
    noIDLIn: true,
    noLegacyStyle: false,
      logos: [
      {
        src: "http://www.w3.org/Icons/w3c_home",
        alt: "W3C",
        height: "48",
        width: "72",
        url: "http://www.w3.org/"
      },
      {
        src: "http://www.w3.org/2015/01/ogc_logo.jpg",
        alt: "OGC",
        height: "48",
        width: "115",
        url: "http://www.opengeospatial.org/"
      }
      ],
    noRecTrack: false,
    overrideCopyright: "<p class='copyright'><a href='http://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2016 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='http://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='http://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='http://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='http://www.keio.ac.jp/'>Keio</a>, <a href='http://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a> and <a href='http://www.w3.org/Consortium/Legal/copyright-documents'>document use</a> rules apply.</p>",


    localBiblio: {
       "OandM":{
        href:"http://www.opengeospatial.org/standards/om",
        title:"Observations and Measurements",
        publisher: "Opengeospatial Consortium",
        authors: ["Simon Cox"],
        date: "22 March 2011"      
       },
       "gml":{
        href:"http://www.opengeospatial.org/standards/gml",
        title:"Geography Markup Language",
        authors: ["Clemens Portele (editor)"],
        date: "27 August 2007"
       },
       "AF-97": {
	authors: ["Allen, J. F.", "Ferguson, G."],
        date: "1997",
        href: "http://dx.doi.org/10.1007/978-0-585-28322-7_7",
        title: "Actions and events in interval temporal logic",
        publisher: "In: Spatial and Temporal Reasoning. O. Stock, ed., Kluwer, Dordrecht, Netherlands, pp. 205-245."
       },
       "AL-84": {
        authors: ["Allen, J. F."],
        date: "1984",
        href: "http://dx.doi.org/10.1016/0004-3702%2884%2990008-0",
        title: "Towards a general theory of action and time",
        publisher: "Artificial Intelligence 23, pp. 123-154"
        },
        "CO-16": {
        authors: ["Cox, S. J. D."],
        date: "2016",
        href: "http://dx.doi.org/10.3233/SW-150187",
        title: "Time Ontology Extended for Non-Gregorian Calendar Applications",
        publisher: "Semantic Web Journal 7, pp. 201-209"
        },
        "CR-05": {
         authors: ["S.J.D. Cox", "S.M. Richard"],
         href: "http://dx.doi.org/10.1130/GES00022.1",
         title: "A formal model for the geologic time scale and global stratotype section and point, compatible with geospatial information transfer standards",
         publisher: "Geosphere 1 (2005) 119",
         date: "2005"
        },
        "CR-14": {
        authors: ["S.J.D. Cox", "S.M. Richard"],
        href: "http://dx.doi.org/10.1007/s12145-014-0166-2",
        title: "A geologic timescale ontology and service",
        publisher: "Earth Sci. Informatics 8 (2014) 5–19.",
        date: "2014"
        },
        "FIPS": {
        href: "http://www.daml.org/2003/02/fips55/",
        title: "FIPS 55 County instance file"
        },
        "HP-04": {
        authors: ["Hobbs, J. R.", "Pan, F."],
        date: "March 2004",
        href: "http://dx.doi.org/10.1145/1017068.1017073",
        title: "An Ontology of Time for the Semantic Web",
        publisher: "ACM Transactions on Asian Language Processing (TALIP): Special issue on Temporal Information Processing, 3, No. 1, pp. 66-85",
        },
        "ISO-19108": {
        href: "http://www.iso.org/iso/iso_catalogue/catalogue_detail?csnumber=26013",
        title: "ISO 19108:2002 Geographic information -- Temporal schema",
        date: "2002"
        },
        "ISO-8601": {
        href: "http://www.iso.org/iso/catalogue_detail?csnumber=40874",
        title: "ISO 8601:2004 Data elements and interchange formats -- Information interchange -- Representation of dates and times",
        date: "2004"
        },
        "ISO-C": {
        href: "http://www.daml.org/2001/09/countries/iso",
        title: "ISO Country instance file"
        },
        "MF-13": {
        authors: ["X. Ma", "P. Fox"],
        href: "http://dx.doi.org/10.1007/s12145-013-0110-x",
        title: "Recent progress on geologic time ontologies and considerations for future works",
        publisher: "Earth Sci. Informatics. 6 (2013) 31–46.",
        date: "2013"
        },
        "OWL-S": {
        href: "http://www.daml.org/services/owl-s/",
        title: "OWL-S homepage"
        },
        "PA-05": {
        authors: ["Pan, F."],
        date: "2005",
        href: "https://www.semanticscholar.org/paper/A-Temporal-Aggregates-Ontology-in-OWL-for-the-Pan/3147d5c652a7e4bf4787fdff781c56259bdb5a33/pdf",
        title: "A Temporal Aggregates Ontology in OWL for the Semantic Web",
        publisher: "In: Proceedings of the AAAI Fall Symposium on Agents and the Semantic Web, Arlington, Virginia, pp. 30-37."
        },
        "PH-04": {
        authors: ["Pan, F", "Hobbs, J. R."],
        date: "2004",
        href: "http://www.isi.edu/%7Ehobbs/time/pub/pan-hobbs-AAAI-SSS04.pdf",
        title: "Time in OWL-S",
        publisher: "In: Proceedings of the AAAI Spring Symposium on Semantic Web Services, Stanford University, CA, pp. 29-36."
        },
        "PH-05": {
        authors: ["Pan, F", "Hobbs, J. R."],
        date: "2005",
        href: "http://www.isi.edu/%7Ehobbs/FLAIRS-05.pdf",
        title: "Temporal Aggregates in OWL-Time",
        publisher: "In Proceedings of the 18th International Florida Artificial Intelligence Research Society Conference (FLAIRS), Clearwater Beach, Florida, pp. 560-565, AAAI Press."
        },
        "PR-OS": {
        href: "http://www.daml.org/services/owl-s/0.9/Process.owl",
        title: "The process file of the OWL-S 0.9 release"
        },
        "RC-14": {
        href: "https://journals.uair.arizona.edu/index.php/radiocarbon/about/submissions#authorGuidelines",
        title: "Guidelines to Authors",
        publisher: "Radiocarb. Mag.",
        date: "2014"
        }
    },
    issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
