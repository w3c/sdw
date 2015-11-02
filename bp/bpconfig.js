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
			companyURL: "http://www.surrey.ac.uk/",
		}, {
			name: "Linda van den Brink",
			company: "Geonovum",
			companyURL: "http://www.geonovum.nl/",
		}],
    otherLinks: [
    {
      key: "Contributors",
      data: [
      { 
        value: "William Roy"
      }]
    },
    {
      key: "OGC Document Number:",
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
      }
      ],
    noRecTrack: true,
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
      "PROV-IMP":{
        "authors":["Trung Dong Huynh","Paul Groth","Stephan Zednik"],
        "href":"http://www.w3.org/TR/prov-implementations/",
        "title":"PROV Implementation Report",
        "status":"W3C Working Group Note",
        "publisher":"W3C",
        "deliveredBy":[{"url":"http://www.w3.org/2011/prov/","shortname":"prov"}],
        "date":"30 April 2013"
       }, 
      "DCAT":{
        "authors":["Fadi Maali", "John Erickson"],
        "href":"http://www.w3.org/TR/vocab-dcat/",
        "title":"Data Catalog Vocabulary (DCAT)",
        "status":"W3C Recommendation",
        "date":"16 January 2014"
       }, 
      "CSV":{
        "authors":["Y. Shafranovich"],
        "href":"https://www.ietf.org/rfc/rfc4180.txt",
        "title":"Common Format and MIME Type for Comma-Separated Values (CSV) Files",
        "status":"RFC 4180",
        "date":"October 2005"
       },
    },
    issueBase: "https://github.com/w3c/sdw/issues/"
};
