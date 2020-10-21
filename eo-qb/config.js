var respecConfig = {
    specStatus: "ED",
    shortName: "eo-qb",
    //publishDate:  "2015-05-18",
    //previousPublishDate: "2014-03-27",
    //previousMaturity: "FPWD",
    //previousURI: "http://www.w3.org/TR/2014/WD-tabular-data-model-20140327/",
    edDraftURI: "https://w3c.github.io/sdw/eo-qb/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Dmitry Brizhinev",
      company: "Australian National University",
      companyURL: "https://cecs.anu.edu.au/"
    },
	{
      name: "Sam Toyer",
      company: "Australian National University",
      companyURL: "https://cecs.anu.edu.au/"
    },
    {
      name: "Kerry Taylor",
      company: "Australian National University",
      companyURL: "https://cecs.anu.edu.au/"
    }],
    otherLinks: [
    {
        key: "Contributors",
        data: [
        {value: "Zhiduo Zhang, Australian National University"},
        ]
    },
    {
        key: "OGC Document Number",
        data: [
        {value: "OGC 16-125"}
        ]
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
      "w3c-basic-geo":{
        href:"https://www.w3.org/2003/01/geo/",
        title:"Basic Geo (WGS84 lat/long) Vocabulary",
        authors:["Dan Brickley"],
        publisher:"W3C Semantic Web Interest Group",
        date:"1 February 2006"
      },
      "GeoJSON":{
        href:"http://geojson.org/geojson-spec.html",
        title:"The GeoJSON Format Specification",
        authors: ["Howard Butler", "Martin Daly", "Allan Doyle", "Sean Gillies", "Tim Schaub", "Christopher Schmidt"],
        date: "16 June 2008"
       },
       "geosparql":{
        href:"http://www.opengeospatial.org/standards/geosparql/",
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
        "sweet": {
            href: "https://sweetontology.net",
            authors: ["ESIP"],
            title: "SWEET Home"
        },
        "perf-vgraph": {
            href: "http://ceur-ws.org/Vol-248/paper2.pdf",
            title: "A Performance and Scalability Metric for Virtual RDF Graphs",
            authors: ["Michael Hausenblas", "Wolfgang Slany", "Danny Ayers"],
            date: "June 2007"
        },
        "sparql-opt": {
            href: "https://events.linuxfoundation.org/sites/events/files/slides/SPARQL%20Optimisation%20101%20Tutorial.pdf",
            title: "Tutorial: SPARQL Optimization 101",
            authors: ["Rob Vesse"]
        },
        "cci": {
            href: "http://cci.esa.int/sites/default/files/CCI_Data_Requirements_Iss1.2_Mar2015.pdf",
            title: "Data Standards Requirements for CCI Data Producers",
            authors: ["ESA Climate Office"],
            date: "9 March 2015"
        },
        "led-github": {
            href: "https://github.com/ANU-Linked-Earth-Data",
            title: "ANU Linked Earth Data",
            authors: ["Dmitry Brizhinev", "Mike Ledger", "Yadunandan Sannappa", "Sam Toyer", "Zhiduo Zhang"]
        },
		"OGC-15-104r5": {
			href: "http://docs.opengeospatial.org/as/15-104r5/15-104r5.html",
			title: "Topic 21: Discrete Global Grid Systems Abstract Specification",
			editors: ["Matthew Purss"],
			date:"1 August 2017"
		},
		"rHealPIX": {
			href: "http://iopscience.iop.org/1755-1315/34/1/012012",
			title: "The rHEALPix Discrete Global Grid System",
			authors: ["R. G. Gibb"],
			date: "2016"
		}
    },
	
    issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
