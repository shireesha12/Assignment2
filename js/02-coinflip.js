/*eslint-env browser*/

var coinFlip;
coinFlip = Math.round(Math.random());
var choice;
choice = window.prompt("heads or tails");
var result;
if (coinFlip) {
  result = "heads"; 
} else {
   result = "tails";
}
if (result === "heads" && choice === "heads") {    
    window.alert("The flip was heads and you chose heads...you win!");
} else if (result === "heads" && choice === "tails") {    
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (result === "tails" && choice === "tails") {    
    window.alert("The flip was tails and you chose tails...you win!");
} else if (result === "tails" && choice === "heads") {
    window.alert("The flip was tails but you chose heads...you lose!");
} else { 
    window.alert("You enter wrong string");
}