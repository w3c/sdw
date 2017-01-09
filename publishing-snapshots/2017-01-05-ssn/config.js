var respecConfig = {
    specStatus: "WD",
    shortName: "vocab-ssn",
    publishDate:  "2017-01-05",
    previousPublishDate: "2016-05-31",
    previousMaturity: "FPWD",
    //previousURI: "http://www.w3.org/TR/2014/WD-tabular-data-model-20140327/",
    edDraftURI: "http://w3c.github.io/sdw/ssn/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Kerry Taylor",
      company: "Australian National University",
      companyURL: "https://cecs.anu.edu.au/"
    }, {
			name: "Krzysztof Janowicz",
			company: "University of California, Santa Barbara",
			companyURL: "http://geog.ucsb.edu/"
		}, {
			name: "Danh Le Phuoc",
			company: "Technical University of Berlin",
			companyURL: "http://www.tu-berlin.de/"
		}, {
			name: "Armin Haller",
      company: "Australian National University",
      companyURL: "http://cbe.anu.edu.au/"
		}],
    otherLinks: [
    {
      key: "OGC Document Number",
      data: [
      {
        value: "OGC 16-079"
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
    overrideCopyright: "<p class='copyright'><a href='http://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2017 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='http://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='http://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='http://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='http://www.keio.ac.jp/'>Keio</a>, <a href='http://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a> and <a href='http://www.w3.org/Consortium/Legal/copyright-documents'>document use</a> rules apply.</p>",


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
       "OandM":{
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
      "Cuenca-Grau-et-al-2009": {
         href:"https://www.cs.ox.ac.uk/publications/publication779-abstract.html",
         authors: ["Bernardo Cuenca Grau", "Ian Horrocks", "Yevgeny Kazakov ", "Ulrike Sattler"],
         title: "Extracting Modules from Ontologies: A Logic−based Approach",
         publisher: "Springer",
         date: "2009"
      },
      "SSO-Pattern": {
         href:"http://ceur-ws.org/Vol-668/paper12.pdf",
         authors: ["Krzysztof Janowicz", "Michael Compton"],
         title: "The Stimulus-Sensor-Observation Ontology Design Pattern and its Integration into the Semantic Sensor Network Ontology",
         publisher: "CEUR: Proceedings of the 3rd International Workshop on Semantic Sensor Networks (SSN10)",
         date: "2010"
      },
      "OM-Lite": {
        href: "http://content.iospress.com/articles/semantic-web/sw214",
        title: "Ontology for observations and sampling features, with alignments to existing models",
        publisher: "IOS Press/Semantic Web",
        date: "6 December 2016",
        authors: ["Simon Cox"]
      },
       "ISO-19150-2":{
       href: "http://www.iso.org/iso/catalogue_detail.htm?csnumber=57466",
       title: "Geographic information -- Ontology -- Part 2: Rules for developing ontologies in the Web Ontology Language (OWL)",
       publisher: "ISO",
       date: "July 2015"
      },
       "ISO-19109":{
       href: "http://www.iso.org/iso/home/store/catalogue_ics/catalogue_detail_ics.htm?csnumber=59193",
       title: "Geographic information -- Rules for application schema",
       publisher: "ISO",
       date: "December 2015"
      },
      "SensorML" :{
        href: "http://portal.opengeospatial.org/files/55939",
        publisher: "OGC",
        title: "SensorML: Model and XML Encoding Standard 2.0",
        authors: ["Mike Botts", "Alex Robin"],
        status:"Encoding Standard, OGC 12-000",
        date:"2014"
      },
      "SSN-PROV" :{
       href:"http://ceur-ws.org/Vol-1401/paper-05.pdf",
       date: "2014",
       authors:["Michael Compton", "David Corsar", "Kerry Taylor"],
       publisher: "CEUR: 7th International Conference on Semantic Sensor Networks"
      },
      "SSN-Short": {
      authors:["Kerry Taylor", "Michael Compton", "Laurent Lefort"],
      href:"https://eresearchau.files.wordpress.com/2012/06/74-semantically-enabling-the-web-of-things-the-w3c-semantic-sensor-network-ontology.pdf",
      title:"The Web of Things: The W3C Semantic Sensor Network Ontology",
      publisher:"5th Australasian eResearch Conference, Melbourne",
      date:"November 2011"
      }
    },
    issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
