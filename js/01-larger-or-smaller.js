/*eslint-env browser*/

var x = parseInt(window.prompt("enter x value"), 10);
var y = parseInt(window.prompt("enter y value"), 10);

window.document.write("The x value is:" + x + "<br>");
window.document.write("The y value is:" + y + "<br>");

if (x > y) {
    window.document.write("x is greater than y : " + x);
} else if (y > x) {
    window.document.write("y is greater than x: " + y);
} else {
  window.document.write("x and y both numbers are equal"); 
}
