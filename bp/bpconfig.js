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
		}],
    otherLinks: [
    {
      key: "Contributors",
      data: [
      { 
        value: "William Roy"
      }]
    }],
    wg: "Spatial Data on the Web Working Group",
    wgURI: "http://www.w3.org/2015/spatial/",
    wgPublicList: "public-sdw-wg",
    wgPatentURI: "http://www.w3.org/2004/01/pp-impl/75471/status",
    inlineCSS: true,
    noIDLIn: true,
    noLegacyStyle: false,

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
    }
};
