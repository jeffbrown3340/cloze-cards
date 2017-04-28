// Create a ClozeCard constructor. 
// It should accept text and cloze arguments.
var ClozeCard = function(fullText, cloze) {
	//errMsg starts out empty
	var errMsg = "";
	// if either argument is empty set string to something
	for (var i = 0; i < 2; i++){
		errMsg = isUndefined(arguments[i]);
	} 
	// if there's an error now it must be parameters
	if (errMsg === "true"){
		errMsg = "ClozeCard requires two parameters.";
	} else {
		//otherwise test for cloze in fullText
		errMsg = fullText.indexOf(cloze);
	}
	if (errMsg === -1){
		//this would be non-containing
		errMsg = "ERROR:" + fullText + " does not contain " + cloze;
	}
	// if it's still empty we're good to go but if not ...
	if (errMsg.length > 0){
		console.log("Error - " + errMsg);
		return;
	}
    this.fullText = fullText;
    this.cloze = cloze;
};

// check the strings
function isUndefined(str){
	if (typeof str === "undefined") return true;
}

// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
ClozeCard.prototype.partial = function(){
	return this.fullText.replace(this.cloze, "_______");
}
// ClozeCard should have a property or method that contains or returns only the partial text.
// INHERENT
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.



// exporting the BasicCard constructor which we will use in main.js
module.exports = ClozeCard;