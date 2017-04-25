var BasicCard = require("./basic.js");
var ClozeCard = require("./cloze.js");

var obviousQuestion = new BasicCard(
    "Who is buried in Grant's Tomb?",
    'You probably said Ulysses S. Grant right?' + 
    '\nWell that is half right,' + 
    '\nactually his wife is with him,' + 
    '\nand they are not exactly buried,' + 
    '\nthey are "entombed"'
    );

console.log("FRONT OF BASIC CARD:\n" + obviousQuestion.front); 
console.log("============================="); 
console.log("BACK OF BASIC CARD:\n" + obviousQuestion.back); 
console.log("============================="); 
var obviousQuestionCloze = new ClozeCard(
    "Mr and Mrs Grant are entombed in Grant's Tomb.", "Mr and Mrs Grant");
console.log("CLOZE SEGMENT:\n" + obviousQuestionCloze.cloze);
console.log("============================="); 
console.log("PARTIAL:\n" + obviousQuestionCloze.partial());
console.log("============================="); 
console.log("FULL TEXT:\n" + obviousQuestionCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
console.log("============================="); 
var brokenCloze = new ClozeCard("This doesn't work", "oops");
