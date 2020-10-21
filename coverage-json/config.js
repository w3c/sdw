var respecConfig = {
    specStatus: "ED",
    shortName: "covjson-overview",
    //publishDate:  "2015-05-18",
    //previousPublishDate: "2014-03-27",
    //previousMaturity: "FPWD",
    //previousURI: "http://www.w3.org/TR/2014/WD-tabular-data-model-20140327/",
    edDraftURI: "https://w3c.github.io/sdw/coverage-json/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Jon Blower",
      company: "University of Reading",
      companyURL: "http://www.reading.ac.uk"
    },{
      name: "Maik Riechert",
      company: "University of Reading",
      companyURL: "http://www.reading.ac.uk"
    },{
      name: "Bill Roberts",
      company: "Swirrl",
      companyURL: "http://www.swirrl.com"
    }],
    otherLinks: [
    {
      key: "OGC Document Number",
      data: [
      {
        value: "OGC 16-145"
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
    noRecTrack: true,
    overrideCopyright: "<p class='copyright'><a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2020 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='https://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='https://www.keio.ac.jp/'>Keio</a>, <a href='https://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a>, <a href='https://www.w3.org/Consortium/Legal/copyright-documents'>W3C</a> and <a href='https://www.ogc.org/ogc/document'>OGC</a> document use rules apply.</p>",

    localBiblio: {
      "GeoJSON":{
        href:"http://geojson.org/geojson-spec.html",
        title:"The GeoJSON Format Specification",
        authors: ["Howard Butler", "Martin Daly", "Allan Doyle", "Sean Gillies", "Tim Schaub", "Christopher Schmidt"],
        date: "16 June 2008"
       },
       "GeoSPARQL":{
        href:"http://www.opengeospatial.org/standards/geosparql",
        title:"GeoSPARQL - A Geographic Query Language for RDF Data",
        authors: ["Matthew Perry", "John Herring"],
        date: "10 September 2012"
       },
       "OM":{
        href:"http://www.opengeospatial.org/standards/om",
        title:"Observations and Measurements (O&M)",
        authors: ["Simon Cox"],
        publisher: "Open Geospatial Consortium",
        date: "2011"
       },
       "SML":{
        href:"http://www.opengeospatial.org/standards/sensorml",
        title:"Sensor Model Language",
        authors: ["Mike Botts", "Alexandre Robin"],
        publisher: "Open Geospatial Consortium",
        date: "2010"
       },
       "SWE":{
        href:"http://www.opengeospatial.org/ogc/markets-technologies/swe",
        title:"Sensor Web Enablement (SWE)",
        publisher: "Open Geospatial Consortium"
       },
       "SSNO": {
         authors: ["Michael Compton", "Payam Barnaghi", "Luis Bermudez", "Raúl García-Castro", "Oscar Corcho", "Simon Cox", "John Graybeal", "Manfred Hauswirth", "Cory Henson", "Arthur Herzog", "Vincent Huang", "Krzysztof Janowicz", "W. David Kelsey", "Danh Le Phuoc", "Laurent Lefort", "Myriam Leggieri", "Holger Neuhaus", "Andriy Nikolov", "Kevin Page", "Alexandre Passant", "Amit Sheth", "Kerry Taylor"],
         title:"The SSN ontology of the W3C semantic sensor network incubator group",
         href:"http://www.sciencedirect.com/science/article/pii/S1570826812000571",
         publisher:"Web Semantics: Science, Services and Agents on the World Wide Web, 17:25-32 ",
         date:"December 2012"
      },
      "DUL":{
         href:"http://ontologydesignpatterns.org/wiki/Ontology:DOLCE+DnS_Ultralite",
         authors: ["Aldo Gangemi"],
         title: "DOLCE+DnS Ultralite (DUL)"
      },
      "ISO19123":{
	     href:"https://www.iso.org/standard/40121.html",
	     title:"Geographic information -- Schema for coverage geometry and functions",
	     publisher:"ISO/TC 211"
      },
      "NetCDF":{
	     href:"http://www.unidata.ucar.edu/software/thredds/current/netcdf-java/ncml/",
	     title:"The NetCDF Markup Language (NcML)",
	     publisher:"UCAR Community Programs",
	     authors: ["John Caron", "Luca Cinquini", "Ethan Davis", "Bob Drach", "Stefano Nativi", "Russ Rew"]
      },
      "OGC-CIS":{
	     href:"https://portal.opengeospatial.org/files/?artifact_id=48553",
	     title:"OGC Coverage Implementation Schema, Version 1.0.1",
	     authors:["Peter Baumann"],
         publisher: "Open Geospatial Consortium"
      },
      "TimeseriesML":{
	     href:"http://www.opengeospatial.org/standards/tsml",
	     title:"TimeseriesML (TSML)",
         publisher: "Open Geospatial Consortium"
      },
      "COV-JSONLD-RDF":{
        href:"http://ceur-ws.org/Vol-1777/paper2.pdf",
        title:"Coverages, JSON-LD and RDF Data Cubes",
        authors:["Jon D. Blower", "Maik Riechert"],
        publisher:"Proceedings of the Workshop on Spatial Data on the Web (SDW 2016), Montreal, Canada, September 27-30, 2016"
      },
      "DCAT":{
        href:"https://www.w3.org/TR/vocab-dcat/",
        title:"Data Catalog Vocabulary (DCAT)",
        authors:["Fadi Maali (ed.)", "John Erickson (ed.)", "Phil Archer"]
      }
    },
    issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
