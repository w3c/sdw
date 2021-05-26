var respecConfig = {
    specStatus: "ED",
    shortName: "sdw-bp",
    //publishDate:  "2015-05-18",
    previousPublishDate: "2017-09-28",
    previousMaturity: "WG-NOTE",
    //previousURI: "https://www.w3.org/TR/2017/NOTE-sdw-bp-20170928/",
    edDraftURI: "https://w3c.github.io/sdw/bp/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Jeremy Tandy",
      company: "Met Office",
      companyURL: "https://www.metoffice.gov.uk/"
    }, {
      name: "Linda van den Brink",
      company: "Geonovum",
      companyURL: "https://www.geonovum.nl/"
    }, {
			name: "Payam Barnaghi",
			company: "University of Surrey",
			companyURL: "https://www.surrey.ac.uk/"
		}],
    otherLinks: [
    {
      key: "Contributors",
      data: [
        { value: "Phil Archer" },
        { value: "Jon Blower" },
        { value: "Newton Calegari" },
        { value: "Byron Cochrane" },
        { value: "Simon Cox" },
        { value: "François Daoust" },
        { value: "Andreas Harth" },
        { value: "Bart van Leeuwen" },
        { value: "Josh Lieberman" },
        { value: "Chris Little" },
        { value: "Andy Mabbett" },
        { value: "Peter Parslow" },
        { value: "Ed Parsons" },
        { value: "Andrea Perego" },
        { value: "Clemens Portele" },
        { value: "Bill Roberts" },
        { value: "Lars G. Svensson" },
        { value: "Kerry Taylor" },
        { value: "Erik Wilde" },
	{ value: "Rob Atkinson" }
      ]
    }, {
      key: "OGC Document Number",
      data: [
      {
        value: "OGC 15-107"
      }]
    }],
    group: "sdw",
//    wg: "Spatial Data on the Web Working Group",
//    wgURI: "https://www.w3.org/2015/spatial/",
    wgPublicList: "public-sdw-comments",
//    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/75471/status",
    inlineCSS: true,
    noIDLIn: true,
//    noLegacyStyle: false,
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
//    overrideCopyright: "<p class='copyright'><a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2020 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='https://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='https://www.keio.ac.jp/'>Keio</a>, <a href='https://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a>, <a href='https://www.w3.org/Consortium/Legal/copyright-documents'>W3C</a> and <a href='https://www.ogc.org/ogc/document'>OGC</a> document use rules apply.</p>",

    localBiblio: {
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
      "SIMPLE-FEATURES":{
        href:"http://www.opengeospatial.org/standards/sfa",
        publisher:"OGC",
        title:"Simple Feature Access - Part 1: Common Architecture",
        authors: ["John Herring"],
        date: "28 May 2011"
      },
      "GML-SF":{
        href:"http://www.opengeospatial.org/standards/gml",
        title:"Geography Markup Language (GML) simple features profile",
		  authors: ["Linda van den Brink", "Clemens Portele", "Panagiotis (Peter) A. Vretanos"],
        date: "5 April 2012"
      },
      "Veregin":{
        href:"http://www.geos.ed.ac.uk/~gisteac/gis_book_abridged/files/ch12.pdf",
        title:"Data quality parameters. In: Geographical Information Systems: Principles, Techniques, Management and Applications",
        authors:["H. Veregin"]
      },
      "OM-XML":{
        href:"http://www.opengeospatial.org/standards/om",
        publisher:"OGC",
        title:"Observations and Measurements - XML Implementation",
        authors: ["Simon Cox"],
        date: "22 March 2011"
      },
      "BEACON":{
        href:"https://gbv.github.io/beaconspec/beacon.html",
        title:"BEACON link dump format",
        authors: ["J. Voß", "M. Schindler"],
        date: "6 July 2014"
      },
      "Strong":{
        href:"http://www.crcsi.com.au/assets/Resources/Stakeholder-Requirements-for-Modernising-Australias-Geocentric-Datum.pdf",
        title:"Stakeholder Requirements for Modernising Australia’s Geocentric Datum",
        authors:["Scott Strong (on behalf of the Cooperative Research Centre for Spatial Information and the Intergovernmental Committee on Surveying and Mapping"],
        date: "July 2015"
      },
      "OGC-TOPIC-2":{
        href:"http://portal.opengeospatial.org/files/39049",
        title:"OGC Abstract Specification Topic 2 - Spatial referencing by coordinates",
        authors:["Roger Lott"],
        publisher:"OGC",
        date: "27 April 2010"
      },
      "NeoGeo": {
        href:"http://geovocab.org/doc/neogeo/",
        title:"NeoGeo Vocabulary Specification",
        date: "5 February 2012 (Madrid Edition)",
        authors:["Barry Norton", "Luis M. Vilches", "Alexander De León", "John Goodwin", "Claus Stadler", "Suchith Anand", "Dominic Harries", "Boris Villazón-Terrazas", "Ghislain A. Atemezing"]
      },
      "5STAR-LOD": {
        href:"https://www.w3.org/DesignIssues/LinkedData#fivestar",
        title:"Is your Linked Open Data 5 Star?",
        authors:["Tim Berners-Lee"]
      },
      "PROTO3":{
        href:"https://developers.google.com/protocol-buffers/docs/reference/proto3-spec",
        title:"Protocol Buffers",
        date:"23 August 2016",
        publisher:"Google"
      },
      "GeoTIFF":{
        href:"http://web.archive.org/web/20160403164508/http://www.remotesensing.org/geotiff/spec/geotiffhome.html",
        title:"GeoTIFF Format Specification",
        date:"28 December 2000",
        authors:["Niles Ritter", "Mike Ruth"]
      },
      "WCS":{
        href:"http://www.opengeospatial.org/standards/wcs",
        publisher:"OGC",
        authors:["Peter Baumann"],
        date:"12 July 2012",
        title:"WCS 2.0 Interface Standard- Core",
        status:"OGC Interface Standard"
      },
      "WaterML":{
        href:"http://www.opengeospatial.org/standards/waterml",
        publisher:"OGC",
//        authors:[""],
        date:"7 September 2012",
        title:"OGC® WaterML 2.0",
        status:"OGC Implementation Standard"
      },
      "WKT-CRS":{
        href:"http://www.opengeospatial.org/standards/wkt-crs",
        publisher:"OGC",
        title:"Well-known text representation of coordinate reference systems",
        authors: ["Roger Lott"],
        date: "1 May 2015"
      },
      "OGC-API-WP":{
        href:"http://docs.opengeospatial.org/wp/16-019r4/16-019r4.html",
        publisher:"OGC",
        title:"Open Geospatial APIs - White Paper",
        authors: ["George Percivall (Editor)"],
        date: "23 February 2017"
      },
      "GS1": {
        title: "SmartSearch Implementation Guideline",
        authors: ["Mark Harrison", "Ken Traub"],
        "date": "November 2015",
        "publisher": "GS1",
        href: "https://www.gs1.org/gs1-smartsearch/guideline/gtin-web-implementation-guideline"
      },
      "PURI": {
        "authors":["Phil Archer", "Nikos Loutas", "Stijn Goedertier", "Saky Kourtidis"],
        "href": "http://philarcher.org/diary/2013/uripersistence/",
        "title": "Study On Persistent URIs",
        "date": "17 December 2012"
      },
      "TIMESERIESML": {
        "authors":["James Tomkins", "Dominic Lowe"],
        publisher:"OGC",
        "href": "http://www.opengeospatial.org/standards/tsml",
        "title": "TimeseriesML 1.0 – XML Encoding of the Timeseries Profile of Observations and Measurements",
        "date": "9 September 2016"
      },
      "SENSORTHINGS": {
        "authors":["Steve Liang", "Chih-Yuan Huang", "Tania Khalafbeigi"],
        publisher:"OGC",
        "href": "http://www.opengeospatial.org/standards/sensorthings",
        "title": "OGC \u00AE SensorThings API Part 1: Sensing",
        "date": "26 July 2016",
        status:"OpenGIS Implementation Standard"
      },
      "MOVING-FEATURES-XML": {
        "authors": ["Akinori Asahara", "Ryosuke Shibasaki", "Nobuhiro Ishimaru", "David Burggraf"],
        publisher:"OGC",
        "href": "http://www.opengeospatial.org/standards/movingfeatures",
        "title": "OGC \u00AE Moving Features Encoding Part I: XML Core",
        "date": "17 February 2015"
      },
      "MOVING-FEATURES-CSV": {
        "authors": ["Akinori Asahara", "Ryosuke Shibasaki", "Nobuhiro Ishimaru", "David Burggraf"],
        "href": "http://www.opengeospatial.org/standards/movingfeatures",
        publisher:"OGC",
        "title": "OGC \u00AE Moving Features Encoding Extension: Simple Comma Separated Values (CSV)",
        "date": "17 February 2015"
      },
      "GeoRSS": {
        href:"https://www.w3.org/2005/Incubator/geo/XGR-geo/",
        title:"W3C Geospatial Vocabulary",
        authors:["Joshua Lieberman", "Raj Singh", "Chris Goad"],
        publisher:"W3C Geospatial Incubator Group",
        date:"23 October 2007"
      },
      "KML": {
        "authors": ["David Burggraf"],
        "href": "http://www.opengeospatial.org/standards/kml",
        "publisher":"OGC",
        "title": "OGC KML 2.3",
        "date": "4 August 2015"
      },
      "WEB-DATA": {
        "authors": ["Erik Wilde"],
        "href": "http://webdata.systems",
        "title": "Web Data",
        "date": "1 November 2016"
      },

// ALREADY IN SPECREF

/*
      "GeoSPARQL":{
        href:"http://www.opengeospatial.org/standards/geosparql",
        publisher:"OGC",
        title:"GeoSPARQL - A Geographic Query Language for RDF Data",
        authors: ["Matthew Perry", "John Herring"],
        date: "10 September 2012"
      },
*/
/*
      "GeoDCAT-AP":{
        href:"https://joinup.ec.europa.eu/node/139283/",
        title:"GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe",
        publisher: "European Commission",
        date: "23 December 2015"
      },
*/
/*
      "ISO-19111":{
        href:"https://www.iso.org/standard/41126.html",
        title:"Geographic information -- Spatial referencing by coordinates",
        authors:["ISO/TC 211"],
        publisher:"ISO",
        date: "2007"
      },
*/
/*
      "ISO-19115":{
        href:"https://www.iso.org/standard/26020.html",
        title:"Geographic information -- Metadata",
        authors:["ISO/TC 211"],
        publisher:"ISO",
        date: "2003"
      },
*/
/*
      "CSW":{
        href:"http://www.opengeospatial.org/standards/cat",
        publisher:"OGC",
        title:"Catalogue Services 3.0 - General Model",
        authors:["Douglas Nebert", "Uwe Voges", "Lorenzo Bigagli"],
        date: "10 June 2016"
      },
*/
/*
      "INSPIRE-MD":{
        href:"http://inspire.ec.europa.eu/documents/Metadata/MD_IR_and_ISO_20131029.pdf",
        title:"INSPIRE Metadata Implementing Rules: Technical Guidelines based on EN ISO 19115 and EN ISO 19119",
        publisher: "European Commission",
        date: "29 October 2013"
      },
*/
/*
      "ISO-19101": {
        href:"https://www.iso.org/standard/59164.html",
        title:"ISO 19101-1:2014 Geographic information -- Reference model -- Part 1: Fundamentals",
        date: "15 November 2014",
        authors:["ISO/TC 211"],
        publisher:"ISO"
      },
*/
/*
      "W3C-BASIC-GEO": {
        href:"https://www.w3.org/2003/01/geo/",
        title:"Basic Geo (WGS84 lat/long) Vocabulary",
        authors:["Dan Brickley"],
        publisher:"W3C Semantic Web Interest Group",
        date:"1 February 2006"
      },
*/
/*
      "ISO-19123": {
        href:"https://www.iso.org/standard/40121.html",
        title:"ISO 19123:2005 Geographic information -- Schema for coverage geometry and functions",
        authors:["ISO/TC 211"],
        publisher:"ISO",
        date:"15 August 2005"
      },
*/
/*
      "ISO-19109": {
        href:"https://www.iso.org/standard/59193.html",
        title:"ISO 19109:2015 Geographic information -- Rules for application schema",
        authors:["ISO/TC 211"],
        publisher:"ISO",
        date:"15 December 2015"
      },
*/
/*
      "SOS":{
        href:"http://www.opengeospatial.org/standards/sos",
        publisher:"OGC",
		  authors:["Arne Bröring", "Christoph Stasch", "Johannes Echterhoff"],
        date:"20 April 2012",
		  title:"Sensor Observation Service Interface Standard",
        status:"OpenGIS Implementation Standard"
      },
*/
/*
      "WFS":{
        href:"http://www.opengeospatial.org/standards/wfs",
        publisher:"OGC",
        authors:["Panagiotis (Peter) A. Vretanos"],
        date:"10 July 2014",
        title:"Web Feature Service 2.0 Interface Standard",
        status:"OGC Interface Standard"
      },
*/
/*
      "WMS":{
        href:"http://www.opengeospatial.org/standards/wms",
        publisher:"OGC",
        authors:["Jeff de la Beaujardiere"],
        date:"15 March 2006",
        title:"Web Map Service Implementation Specification",
        status:"OpenGIS Implementation Standard"
      },
*/
/*
      "WMTS":{
        href:"http://www.opengeospatial.org/standards/wmts",
        publisher:"OGC",
        authors:["Joan Masó", "Keith Pomakis", "Núria Julià"],
        date:"6 April 2010",
		  title:"Web Map Tile Service Implementation Standard",
        status:"OpenGIS Implementation Standard"
      },
*/
/*
      "WPS":{
        href:"http://www.opengeospatial.org/standards/wps",
        publisher:"OGC",
        authors:["Matthias Mueller", "Benjamin Pross"],
        date:"5 October 2015",
        title:"Web Processing Service 2.0 Interface Standard",
        status:"OGC Implementation Standard"
      },
*/
/*
      "COVERAGE-JSON": {
        "authors":["Jon Blower", "Maik Riechert", "Bill Roberts"],
        "href": "http://w3c.github.io/sdw/coverage-json/",
        "title": "The CoverageJSON Format Specification (Editors Draft)",
        "date": "2 February 2017"
      },
*/
/*
      "LOCN":{
        "href":"https://www.w3.org/ns/locn",
        "title":"ISA Location Core Vocabulary",
        "publisher": "European Commission",
        "date": "23 March 2015"
      },
*/
/*
      "ISO-19107": {
        "href":"https://www.iso.org/standard/26012.html",
        "title":"ISO 19107:2003 Geographic information -- Spatial schema",
        "authors":["ISO/TC 211"],
        "publisher":"ISO",
        "date":"May 2003"
      },
*/
/*
      "LINK-RELATION-TYPES": {
        "authors": ["Mark Nottingham", "Julian Reschke", "Jan Algermissen"],
        "href": "http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1",
        "title": "Link Relation Types Registry"
      },
*/
      "TRIPLE-PATTERN-FRAGMENTS": {
        "authors": ["Ruben Verborgh"],
        "href": "http://www.hydra-cg.com/spec/latest/triple-pattern-fragments/",
        "title": "Triple Pattern Fragments specification",
        "publisher": "Hydra W3C Community Group",
        "date": "05 January 2017"
      },
/*
      "EO-QB": {
        "authors":["Dmitry Brizhinev", "Sam Toyer", "Kerry Taylor"],
        "href": "https://www.w3.org/TR/eo-qb/",
        "title": "Publishing and Using Earth Observation Data with the RDF Data Cube and the Discrete Global Grid System",
        "publisher": "W3C and OGC",
        "date": "5 January 2017"
      },
*/
/*
      "QB4ST": {
        "authors":["Rob Atkinson"],
        "href": "https://www.w3.org/TR/qb4st/",
        "title": "QB4ST: RDF Data Cube extensions for spatio-temporal components",
        "publisher": "W3C and OGC",
        "date": "5 January 2017"
      },
*/
/*
      "ISO-19159-2": {
        "href":"https://www.iso.org/standard/64768.html",
        "title":"ISO/TS 19159-2:2016 Geographic information -- Calibration and validation of remote sensing imagery sensors and data -- Part 2: Lidar",
        "authors":["ISO/TC 211"],
        "publisher":"ISO",
        "date":"April 2016"
      },
*/
/*
      "ISO-19162": {
        "href":"https://www.iso.org/standard/63094.html",
        "title":"ISO 19162:2015 Geographic information -- Well-known text representation of coordinate reference systems",
        "authors":["ISO/TC 211"],
        "publisher":"ISO",
        "date":"August 2015"
      },
*/
/*
      "ISO-19133": {
        "href":"https://www.iso.org/standard/32551.html",
        "title":"ISO 19133:2005 Geographic information -- Location-based services -- Tracking and navigation",
        "authors":["ISO/TC 211"],
        "publisher":"ISO",
        "date":"October 2005"
      }
*/
    },
    github: "https://github.com/w3c/sdw/",
//    issueBase: "https://github.com/w3c/sdw/issues/",
//    preProcess: [bpCrossRefs]
};
