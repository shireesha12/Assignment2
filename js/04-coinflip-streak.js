/*eslint-env browser*/

var coinFlip;
do {
    coinFlip = Math.round(Math.random());
    window.console.log(coinFlip);
    coinFlip ? window.console.log("Tails") : window.console.log("Heads");
} while (coinFlip == 0);

