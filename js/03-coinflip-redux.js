/*eslint-env browser*/


var coinFlip;
var i;
for (i = 1; i <= 10; i += 1) {
    coinFlip = Math.round(Math.random());
    window.console.log(coinFlip);
    coinFlip ? window.console.log("Tails") : window.console.log("Heads");
}
