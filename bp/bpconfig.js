var respecConfig = {
    specStatus: "ED",
    shortName: "sdw-bp",
    //publishDate:  "2015-05-18",
    //previousPublishDate: "2014-03-27",
    //previousMaturity: "FPWD",
    //previousURI: "http://www.w3.org/TR/2014/WD-tabular-data-model-20140327/",
    edDraftURI: "http://w3c.github.io/sdw/bp/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Jeremy Tandy",
      company: "Met Office",
      companyURL: "http://www.metoffice.gov.uk/"
    }, {
			name: "Payam Barnaghi",
			company: "University of Surrey",
			companyURL: "http://www.surrey.ac.uk/"
		}, {
			name: "Linda van den Brink",
			company: "Geonovum",
			companyURL: "http://www.geonovum.nl/"
		}],
    otherLinks: [
    {
      key: "OGC Document Number",
      data: [
      {
        value: "OGC 15-107"
      }]
      }],
    wg: "Spatial Data on the Web Working Group",
    wgURI: "http://www.w3.org/2015/spatial/",
    wgPublicList: "public-sdw-wg",
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
      }],
    noRecTrack: true,
    overrideCopyright: "<p class='copyright'><a href='http://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2017 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='http://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='http://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='http://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='http://www.keio.ac.jp/'>Keio</a>, <a href='http://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a> and <a href='http://www.w3.org/Consortium/Legal/copyright-documents'>document use</a> rules apply.</p>",


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
      "GeoSPARQL":{
        href:"http://www.opengeospatial.org/standards/geosparql",
        publisher:"OGC",
        title:"GeoSPARQL - A Geographic Query Language for RDF Data",
        authors: ["Matthew Perry", "John Herring"],
        date: "10 September 2012"
      },
      "Simple-Features":{
        href:"http://www.opengeospatial.org/standards/sfa",
        publisher:"OGC",
        title:"Simple Feature Access - Part 1: Common Architecture",
        authors: ["John Herring"],
        date: "28 May 2011"
      },
      "Veregin":{
        href:"http://www.geos.ed.ac.uk/~gisteac/gis_book_abridged/files/ch12.pdf",
        title:"Data quality parameters. In: Geographical Information Systems: Principles, Techniques, Management and Applications",
        authors:["H. Veregin"]
      },
      "OandM":{
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
      "GeoDCAT-AP":{
        href:"https://joinup.ec.europa.eu/node/139283/",
        title:"GeoDCAT-AP: A geospatial extension for the DCAT application profile for data portals in Europe",
        publisher: "European Commission",
        date: "23 December 2015"
      },
      "ISO-19115":{
        href:"http://www.iso.org/iso/catalogue_detail?csnumber=26020",
        title:"Geographic information -- Metadata",
        authors:["ISO/TC 211"],
        publisher:"ISO",
        date: "2003"
      },
      "CSW":{
        href:"http://www.opengeospatial.org/standards/cat",
        publisher:"OGC",
        title:"Catalogue Services 3.0 - General Model",
        authors:["Douglas Nebert", "Uwe Voges", "Lorenzo Bigagli"],
        date: "10 June 2016"
      },
      "INSPIRE-MD":{
        href:"http://inspire.jrc.ec.europa.eu/documents/Metadata/MD_IR_and_ISO_20131029.pdf",
        title:"INSPIRE Metadata Implementing Rules: Technical Guidelines based on EN ISO 19115 and EN ISO 19119",
        publisher: "European Commission",
        date: "29 October 2013"
      },
      "ISO-19101": {
        href:"http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=59164",
        title:"ISO 19101-1:2014 Geographic information -- Reference model -- Part 1: Fundamentals",
        date: "15 November 2014",
        authors:["ISO/TC 211"],
        publisher:"ISO"
      },
      "W3C-BASIC-GEO": {
        href:"https://www.w3.org/2003/01/geo/",
        title:"Basic Geo (WGS84 lat/long) Vocabulary",
        authors:["Dan Brickley"],
        publisher:"W3C Semantic Web Interest Group",
        date:"1 February 2006"
      },
      "NeoGeo": {
        href:"http://geovocab.org/doc/neogeo/",
        title:"NeoGeo Vocabulary Specification",
        date: "5 February 2012 (Madrid Edition)",
        authors:["Barry Norton", "Luis M. Vilches", "Alexander De León", "John Goodwin", "Claus Stadler", "Suchith Anand", "Dominic Harries", "Boris Villazón-Terrazas", "Ghislain A. Atemezing"]
      },
      "ISO-19123": {
        href:"http://www.iso.org/iso/iso_catalogue/catalogue_tc/catalogue_detail.htm?csnumber=40121",
        title:"ISO 19123:2005 Geographic information -- Schema for coverage geometry and functions",
        authors:["ISO/TC 211"],
        publisher:"ISO",
        date:"15 August 2005"
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
      "ISO-19109": {
        href:"http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=59193",
        title:"ISO 19109:2015 Geographic information -- Rules for application schema",
        authors:["ISO/TC 211"],
        publisher:"ISO",
        date:"15 December 2015"
      },
      "SOS":{
        href:"https://portal.opengeospatial.org/files/?artifact_id=47599",
        publisher:"OGC",
		  authors:["Arne Bröring", "Christoph Stasch", "Johannes Echterhoff"],
        date:"20 April 2012",
		  title:"Sensor Observation Service Interface Standard",
        status:"OpenGIS Implementation Standard"
      },
      "SensorThings":{
        href:"http://docs.opengeospatial.org/is/15-078r6/15-078r6.html",
        publisher:"OGC",
		  authors:["Steve Liang", "Chih-Yuan Huang", "Tania Khalafbeigi"],
        date:"26 July 2012",
		  title:"SensorThings API Part 1: Sensing",
        status:"OpenGIS Implementation Standard"
      },
      "WCS":{
        href:"http://www.opengis.net/doc/IS/wcs-core-2.0.1",
        publisher:"OGC",
        authors:["Peter Baumann"],
        date:"12 July 2012",
        title:"WCS 2.0 Interface Standard- Core",
        status:"OGC Interface Standard"
      },
      "WFS":{
        href:"http://www.opengis.net/doc/IS/wfs/2.0.2",
        publisher:"OGC",
        authors:["Panagiotis (Peter) A. Vretanos"],
        date:"10 July 2014",
        title:"Web Feature Service 2.0 Interface Standard",
        status:"OGC Interface Standard"
      },
      "WMS":{
        href:"http://portal.opengeospatial.org/files/?artifact_id=14416",
        publisher:"OGC",
        authors:["Jeff de la Beaujardiere"],
        date:"15 March 2006",
        title:"Web Map Server Implementation Specification",
        status:"OpenGIS Implementation Standard"
      },
      "WMTS":{
        href:"http://portal.opengeospatial.org/files/?artifact_id=35326",
        publisher:"OGC",
        authors:["Joan Masó", "Keith Pomakis", "Núria Julià"],
        date:"6 April 2010",
		  title:"Web Map Tile Service Implementation Standard",
        status:"OpenGIS Implementation Standard"
      },
      "WPS":{
        href:"http://docs.opengeospatial.org/is/14-065/14-065.html",
        publisher:"OGC",
        authors:["Matthias Mueller", "Benjamin Pross"],
        date:"5 October 2015",
        title:"Web Processing Service 2.0 Interface Standard",
        status:"OGC Implementation Standard"
      },
      "WKT-CRS":{
        href:"http://www.opengeospatial.org/standards/wkt-crs",
        publisher:"OGC",
        title:"Well-known text representation of coordinate reference systems",
        authors: ["Roger Lott"],
        date: "1 May 2015"
      },
      "GS1": {
        title: "SmartSearch Implementation Guideline",
        authors: ["Mark Harrison", "Ken Traub"],
        "date": "November 2015",
        "publisher": "GS1",
        href: "http://www.gs1.org/gs1-smartsearch/guideline/gtin-web-implementation-guideline"
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
        "date": "26 July 2016"
      },
      "COVERAGE-JSON": {
        "authors":["Jon Blower", "Maik Riechert", "Bill Roberts"],
        "href": "http://w3c.github.io/sdw/coverage-json/",
        "title": "The CoverageJSON Format Specification (Editors Draft)",
        "date": "2 February 2017"
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
      
      "LOCN":{
        "href":"https://www.w3.org/ns/locn",
        "title":"ISA Location Core Vocabulary",
        "publisher": "European Commission",
        "date": "23 March 2015"
      },
      "ISO-19107": {
        "href":"http://www.iso.org/iso/home/store/catalogue_tc/catalogue_detail.htm?csnumber=26012",
        "title":"ISO 19107:2003 Geographic information -- Geographic information -- Spatial schema",
        "authors":["ISO/TC 211"],
        "publisher":"ISO",
        "date":"May 2003"
      },
      "KML": {
        "authors": ["David Burggraf"],
        "href": "http://www.opengeospatial.org/standards/kml",
        "publisher":"OGC",
        "title": "OGC KML 2.3",
        "date": "4 August 2015"
      }
      
    },
    issueBase: "https://github.com/w3c/sdw/issues/"
};
