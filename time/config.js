var respecConfig = {
    specStatus: "ED",
    shortName: "owl-time",
    //publishDate:  "2016-05-01",
    previousPublishDate: "2006-09-27",
    previousMaturity: "FPWD",
    previousURI: "http://www.w3.org/TR/2006/WD-owl-time-20060927/",
    edDraftURI: "http://w3c.github.io/sdw/time/",
    // lcEnd: "3000-01-01",
    // crEnd: "3000-01-01",
    editors: [
    {
      name: "Chris Little",
      company: "Met Office",
      companyURL: "http://www.metoffice.gov.uk/"
    }, {
			name: "Simon Cox",
			company: "CSIRO",
			companyURL: "http://www.csiro.au/"
		}],
    otherLinks: [
    {
      key: "OGC Document Number:",
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
    overrideCopyright: "<p class='copyright'><a href='http://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2015 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='http://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='http://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='http://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='http://www.keio.ac.jp/'>Keio</a>, <a href='http://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='http://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='http://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a> and <a href='http://www.w3.org/Consortium/Legal/copyright-documents'>document use</a> rules apply.</p>",


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
        href:"http://www.w3.org/TR/sdw-ucr/",
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
       "Veregin":{
        href:"http://www.geos.ed.ac.uk/~gisteac/gis_book_abridged/files/ch12.pdf",
        title:"Data quality parameters. In: Geographical Information Systems: Principles, Techniques, Management and Applications",
        authors:["H. Veregin"]
       },
       "OandM":{
        href:"http://www.opengeospatial.org/standards/om",
        title:"Observations and Measurements - XML Implementation",
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
       "beacon":{
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
       }
    },
    issueBase: "https://github.com/w3c/sdw/issues/"
};
