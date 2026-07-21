async function loadTurtle() {
  // load the highlighter for turtle
  const worker = await document.respec.worker;
  const action = "highlight-load-lang";
  const langURL = new URL("./turtle.js", window.location).href;
  const propName = "hljsDefineTurtle";
  const lang = "turtle";
  worker.postMessage({ action, langURL, propName, lang });
  return new Promise(resolve => {
    worker.addEventListener("message", function listener({ data }) {
      const { action: responseAction, lang: responseLang } = data;
      if (responseAction === action && responseLang === lang) {
        worker.removeEventListener("message", listener);
        resolve();
      }
    });
  });
}

var respecConfig = {
  specStatus: "ED",
  shortName: "owl-time",
  previousPublishDate: "2022-11-15",
  previousMaturity: "CR",
  previousURI: "https://www.w3.org/TR/2022/CRD-owl-time-20221115/",
  edDraftURI: "https://w3c.github.io/sdw-time/",
  // publishDate:  "2022-11-15",
  // lcEnd: "3000-01-01",
  // crEnd: "3000-01-01",
  group: "wg/sdw",
  wgPublicList: "public-sdw-comments",
  github: "w3c/sdw-time",
  implementationReportURI: "https://www.w3.org/2015/spatial/wiki/OWL_Time_Ontology_adoption",
  inlineCSS: true,
  noIDLIn: true,
  noLegacyStyle: false,
  noRecTrack: false,
  overrideCopyright: "<p class='copyright'><a href='https://www.w3.org/Consortium/Legal/ipr-notice#Copyright'>Copyright</a> © 2020 <a href='http://www.opengeospatial.org/'>OGC</a> &amp; <a href='https://www.w3.org/'> <abbr title='World Wide Web Consortium'>W3C</abbr> </a><sup>®</sup> (<a href='https://www.csail.mit.edu/'><abbr title='Massachusetts Institute of Technology'>MIT</abbr></a>, <a href='https://www.ercim.eu/'><abbr title='European Research Consortium for Informatics and Mathematics'>ERCIM</abbr></a>, <a href='https://www.keio.ac.jp/'>Keio</a>, <a href='https://ev.buaa.edu.cn/'>Beihang</a>), <abbr title='World Wide Web Consortium'>W3C</abbr> <a href='https://www.w3.org/Consortium/Legal/ipr-notice#Legal_Disclaimer'>liability</a>, <a href='https://www.w3.org/Consortium/Legal/ipr-notice#W3C_Trademarks'>trademark</a>, <a href='https://www.w3.org/Consortium/Legal/copyright-documents'>W3C</a> and <a href='https://www.ogc.org/ogc/document'>OGC</a> document use rules apply.</p>",
  logos: [
    {
      src: "images/OGC-0.png",
      alt: "OGC",
      height: "128",
      width: "114",
      url: "https://www.ogc.org/"
    }
  ],
  editors: [
    {
      name: "Simon J D Cox",
      company: "Timely Logic, AU",
      orcid: "0000-0002-3884-3420",
      w3cid: 1796
    }, 
    {
      name: "Chris Little",
      company: "Met Office, UK",
      companyURL: "http://www.metoffice.gov.uk/",
      orcid: "0000-0002-1442-3712",
      w3cid: 59886
    }
  ],
  otherLinks: [
    {
      key: "Editors of 2006 Working Draft",
      data: [
        {
          value: "Jerry R. Hobbs"
        }, 
        {
          value: "Feng Pan"
        }
      ]
    }, 
    {
      key: "OGC Document Number",
      data: [
        {
          value: "OGC 16-071r5"
        }
      ]
    }
  ],
  issueBase: "https://www.w3.org/2015/spatial/track/issues/"
};
