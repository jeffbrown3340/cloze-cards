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

console.log(obviousQuestion.front); 
console.log("============================="); 
console.log(obviousQuestion.back); 

var obviousQuestionCloze = new ClozeCard(
    "Mr and Mrs Grant are entombed in Grant's Tomb.", "Mr and Mrs Grant");
console.log(obviousQuestionCloze.cloze); 
console.log(obviousQuestionCloze.partial);
console.log(obviousQuestionCloze.fullText);
// Should throw or log an error because "oops" doesn't appear in "This doesn't work"

var brokenCloze = new ClozeCard("This doesn't work", "oops");
