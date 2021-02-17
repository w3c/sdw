/* *********************************************
This script auto-generates the lists of BPs by benefit. It works by picking
up the ul of class 'benefitsList'. If there is no JavaScript, that list still
exists as a normal ul. If JS is active, the list is replaced by the icons
************************************************ */
      window.onload=init;
function bpObject(t,id,b,reqs) {
  this.title = t;   // The BP's title
  this.id = id      // Its id
  if (b != undefined) {
    var benefitList = new Array () ;
    for (var i = 0; i < b.length; i++) {
      benefitList.push(b[i].textContent);
    }
    this.benefits = benefitList;       // Its benefits in an array
  }
	var requirementList = new Array();
	for (var i = 0; i < reqs.length; i++) {
		requirementList.push(reqs[i].hash.substring(1));
	}
	this.requirements = requirementList;
}
function dwbpObject(t,id,reqs){
  this.title = t;
  this.id = id;
  this.requirements = reqs;
}
function benefitObject(b) {
  this.name = b;   // The benefit's name
  this.id = b.toLowerCase();  // The benefit's id which is an all lower case version of the name
  // I'd like to create the image object here and reuse it but it doesn't seem to work properly sadly.
/*  var img = document.createElement('img');
  img.src= 'images/' + b.toLowerCase() + '.svg';
  img.alt= b;
  img.classList.add('benefitIcon');
  this.img = img; */
}
function createBenefitsTable(BPList) {
  // function to generate table of bp vs. benefits
  var benefitsTable = document.getElementById('bpbenefitstable');
  var tbody = benefitsTable.getElementsByTagName('tbody')[0];
  BPList.forEach(function(bp){
    var row = tbody.insertRow(tbody.rows.length); // new row for the table
    var cellBp = row.insertCell(0);               // cell for BP title
    var cellBenefits = row.insertCell(1);         // cell for benefits
    var bpTitle = document.createTextNode(bp.title.replace(/^(?:Best Practice \d*: )/g, ""));
    var bpLink = document.createElement('a');
    bpLink.setAttribute('href', '#'+bp.id);
    bpLink.appendChild(bpTitle);
    cellBp.appendChild(bpLink);                   // put BP link on the cell
    var ul = document.createElement('ul');
    ul.setAttribute('class', 'benefitsList');     // create a new ul for benefitsList
    bp.benefits.forEach(function(benefit){        // iterate over benefits of the BP
      var li = document.createElement('li');
      var benefitText = document.createTextNode(benefit);
      li.appendChild(benefitText);
      ul.appendChild(li);
    });
    cellBenefits.appendChild(ul);
  });
}
function updateBenefitListReuse() {
  var benefitListReuse = document.getElementById('benefitListReuse');
  var ul = benefitListReuse.getElementsByTagName('ul')[0];
  benefitListReuse.removeChild(ul);
  var p = document.createElement('p');
  p.appendChild(document.createTextNode('All Best Practices'));
  benefitListReuse.appendChild(p);
}
function createRequirementsTable(BPlist) {
	var reqs = new Array();
  var requirementsTable = document.getElementById('requirementsbpstable');
  var tbody = requirementsTable.getElementsByTagName('tbody')[0];
  var sdwbp = "SDWBP";
  var dwbp = "DWBP";

  // populate the mapping to the DWBP best practices
  var DWBPlist = new Array();
  DWBPlist.push(new dwbpObject("Best Practice 1: Provide metadata", "ProvideMetadata", ["Crawlability", "Discoverability", "MachineToMachine", "MultilingualSupport", "SpatialMetadata"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 2: Provide descriptive metadata", "DescriptiveMetadata", ["Crawlability", "Discoverability", "MachineToMachine", "MultilingualSupport", "SpatialMetadata"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 3: Provide structural metadata", "StructuralMetadata", ["Crawlability", "Discoverability", "MachineToMachine"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 4: Provide data license information", "DataLicense", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 5: Provide data provenance information", "DataProvenance", ["Provenance"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 6: Provide data quality information", "DataQuality", ["CoordinatePrecision"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 7: Provide a version indicator", "VersioningInfo", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 8: Provide version history", "VersionHistory", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 9: Use persistent URIs as identifiers", "UniqueIdentifiers", ["Linkability"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 10: Use persistent URIs as identifiers within datasets", "identifiersWithinDatasets", ["Linkability"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 11: Assign URIs to dataset versions and series", "VersionIdentifiers", ["Linkability", "Streamable"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 12: Use machine-readable standardized data formats", "MachineReadableStandardizedFormat", ["EncodingForVectorGeometry"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 13: Use locale-neutral data representations", "LocaleParametersMetadata", ["IndependenceOnReferenceSystems"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 14: Provide data in multiple formats", "MultipleFormats", ["SubjectEquality"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 15: Reuse vocabularies, preferably standardized ones", "ReuseVocabularies", ["AvoidCoordinateTransformations", "Compatibility", "DeterminableCRS"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 16: Choose the right formalization level", "ChooseRightFormalizationLevel", ["3DSupport"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 17: Provide bulk download", "BulkAccess", ["Compressible"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 18: Provide Subsets for Large Datasets", "ProvideSubsets", ["Compressible"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 19: Use content negotiation for serving data available in multiple formats", "Conneg", ["SubjectEquality"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 20: Provide real-time access", "AccessRealTime", ["Streamable"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 21: Provide data up to date", "AccessUptoDate", ["Streamable"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 22: Provide an explanation for data that is not available", "DataUnavailabilityReference", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 23: Make data available through an API", "useanAPI", ["Crawlability", "Discoverability", "MachineToMachine"])) ;
  DWBPlist.push(new dwbpObject("Best Practice 24: Use Web Standards as the foundation of APIs", "APIHttpVerbs", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 25: Provide complete documentation for your API", "documentYourAPI", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 26: Avoid Breaking Changes to Your API", "avoidBreakingChangesAPI", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 27: Preserve identifiers", "ResourceStatus", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 28: Assess dataset coverage", "EvaluateCoverage", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 29: Gather feedback from data consumers", "GatherFeedback", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 30: Make feedback available", "FeedbackInformation", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 31: Enrich data by generating new data", "EnrichData", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 32: Provide Complementary Presentations", "ProvideComplementaryPresentations", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 33: Provide Feedback to the Original Publisher", "ProvideFeedbackToPublisher", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 34: Follow Licensing Terms", "FollowLicensingTerms", [])) ;
  DWBPlist.push(new dwbpObject("Best Practice 35: Cite the Original Publication", "CiteOriginalPublication", ["TimeDependentCRS"])) ;

  // populate the requirements mapping to SDWBP and DWBP
	BPlist.forEach(function(bp){
		bp.requirements.forEach(function(req){
			if (reqs[req] !== undefined) {
				reqs[req][sdwbp].push(bp);
			}
			else {
        reqs.push(req);
        reqs[req] = new Array();
        reqs[req][sdwbp] = new Array();
        reqs[req][dwbp] = new Array();
        reqs[req][sdwbp].push(bp);
      }
		});
	});
  DWBPlist.forEach(function(bp){
    bp.requirements.forEach(function(req){
      if (reqs[req] !== undefined) {
        reqs[req][dwbp].push(bp);
      }
      else {
        reqs.push(req);
        reqs[req] = new Array();
        reqs[req][dwbp] = new Array();
        reqs[req][sdwbp] = new Array();
        reqs[req][dwbp].push(bp);
      }
    });
  });

  reqs.forEach(function(req){
    var row = tbody.insertRow(tbody.rows.length); // new row for the table
    var cellReq = row.insertCell(0);              // cell for requirement
    var cellSDWBps = row.insertCell(1);              // cell for SDWBPs
    var cellDWBps = row.insertCell(2);              // cell for DWBPs
    var reqLink = document.createElement('a');
    reqLink.setAttribute('href', 'https://www.w3.org/TR/sdw-ucr/#'+req);
    reqLink.appendChild(document.createTextNode(req));
    cellReq.appendChild(reqLink);
    reqs[req][sdwbp].forEach(function(bp){
      var p = document.createElement('p');
      var bpLink = document.createElement('a');
      bpLink.setAttribute('href', '#'+bp.id);
      bpLink.appendChild(document.createTextNode(bp.title.replace(/^(?:Best Practice \d*: )/g, "")));
      p.appendChild(bpLink);
      cellSDWBps.appendChild(p);
    });
    reqs[req][dwbp].forEach(function(bp){
      var p = document.createElement('p');
      var bpLink = document.createElement('a');
      bpLink.setAttribute('href', 'https://www.w3.org/TR/dwbp/#'+bp.id);
      bpLink.appendChild(document.createTextNode(bp.title.replace(/^(?:Best Practice \d*: )/g, "")));
      p.appendChild(bpLink);
      cellDWBps.appendChild(p);
    })
  });
}
function init() {
  // Need an array of objects for the benefits
  var theBenefits = new Array ();
  theBenefits.push(new benefitObject('Reuse')) ;
  theBenefits.push(new benefitObject('Access')) ;
  theBenefits.push(new benefitObject('Discoverability')) ;
  theBenefits.push(new benefitObject('Processability')) ;
  theBenefits.push(new benefitObject('Trust')) ;
  theBenefits.push(new benefitObject('Interoperability')) ;
  theBenefits.push(new benefitObject('Linkability')) ;
  theBenefits.push(new benefitObject('Comprehension')) ;
  // Get list of our BPs and put them in an array of objects
  var BPlist = new Array ();                                      // This will be our array of BPs from the document
  var BPdivs = new Array ();
//  BPdivs = document.getElementsByClassName('practice');           // This is the info we have effectively scraped from the page
  BPdivs = document.getElementsByClassName('practicecontainer');           // Revised as per new practice DIV container
  // Need the title and id of each one
  for (var i = 0; i < BPdivs.length; i++) {
    var t; var id; var b; var reqs;
    var BPtop = BPdivs[i].getElementsByClassName('practicelab');
    t = BPtop[0].textContent; // There should only be values in BPtop[0]
    id = BPtop[0].id;
    // Now we need the list of benefits for that BP
    var BPbenefitsList = BPdivs[i].getElementsByClassName('benefitsList');
    if (BPbenefitsList[0] != undefined) {
      b = BPbenefitsList[0].getElementsByTagName("li");
    } else {
      b = undefined;
    }
		var BPrequirementsList = BPdivs[i].getElementsByClassName('ucr')[0].getElementsByTagName('a');
		reqs = BPrequirementsList;
    BPlist.push(new bpObject(t, id, b, reqs)) ;
  }
  createBenefitsTable(BPlist);                                    // Call function to create Benefits Table
  createRequirementsTable(BPlist);                                // Call function to create Requirements Table
  // Now create the panels
  var r;
  for (var i = 0; i < theBenefits.length; i++) {                  // Working through the list of benefits
    r = document.createElement('div');                            // Need to create the div, ready to add the list items for this benefit
    r.classList.add('benefit-list-panel');
    r.id = 'benefitList' + theBenefits[i].name;
/*    var img = document.createElement('img');                    // Put the icon at the top
    img.src= 'images/' + theBenefits[i].name.toLowerCase() + '.svg';
    img.alt= theBenefits[i].name;
    img.classList.add('benefitIconPanel');
    r.appendChild(img); */
    var h = document.createElement('p');
    h.classList.add('benefitsPanelTitle');
    var ht = document.createTextNode(theBenefits[i].name);        // Create the heading for the div which is the benefit
    h.appendChild(ht);
    r.appendChild(h);
    // And add a UL
    var ul = document.createElement('ul');                        // Create the ul element that we're going to add each relevant BP to
    ul.id = theBenefits[i].id + 'BPs';
    for (var j = 0; j < BPlist.length; j++) {                     // Go through list of BPs in the doc
      if (typeof BPlist[j].benefits == 'object') {                // Do we have a list of benefits for this BP?
        for (var k = 0; k < BPlist[j].benefits.length; k++) {     // We need to look at the benefits the BP offers
          if (theBenefits[i].name == BPlist[j].benefits[k]) {     // We're looking at the i benefit in the list of possibles and the k benefit of BP j
            var li = document.createElement('li');                // If there's a match, create the li with the hyperlink
            var a = document.createElement('a');
            a.href = '#' + BPlist[j].id;
            var t = document.createTextNode(BPlist[j].title.replace(/^(?:Best Practice \d*: )/g, ""));
            a.appendChild(t);
            li.appendChild(a);
            ul.appendChild(li);                                   // Add this BP to the benefit div's list
          }
        }
      }
    }
    r.appendChild(ul);                                            // Add the ul with all its li elements to the div
    document.getElementById('benefitsTables').appendChild(r);     // Add the div to the doc
  }
  // Next we want to replace all text benefits with the relevant icon
  var bList = document.getElementsByClassName('benefitsList');    // get the set of ul elements we need to process
  for (var i = 0; i < bList.length; i++) {
    var listElements = bList[i].getElementsByTagName('li');       // Get the li elements within this ul
    for (var j = 0; j < listElements.length; j++) {
      for (var k = 0; k < theBenefits.length; k++) {              // Go through the benefits
        if (listElements[j].textContent == theBenefits[k].name) { // The text in the current li element matches the current benefit, so we can make the swap
//          bList[i].removeChild(listElements[j]);                // This works but it destroys things as they're created. Should rearrange the loop but for now...
          listElements[j].classList.add('hidden');                // Hide the original li
          var l = document.createElement('li');                   // Create a new li
          l.classList.add('icon');
          var img = document.createElement('img');                // This is repetitive but I tried to create an img element in theBenefits but
          img.src= 'images/' + theBenefits[k].name.toLowerCase() + '.svg';  // For reasons I don't understand, it dowsn't work properly, this does.
          img.alt= theBenefits[k].name;
          img.classList.add('benefitIcon');
          img.classList.add(theBenefits[k].id + 'Icon');
          l.appendChild(img);                                     // Add the img element from the current benefit
          bList[i].appendChild(l);                                // Add the li back into the current ul
        }
      }
    }
  }
  updateBenefitListReuse(); // replace ul>li of Benefits Reuse to text "All Best Practices"
}