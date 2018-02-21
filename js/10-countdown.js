/*eslint-env browser*/

var number = parseInt(window.prompt("entera number"), 10);
var i;
for (i = number; i >= 0; i--) {
   window.document.write(i + "<br>");
}