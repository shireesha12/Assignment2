/*eslint-env browser*/

var strNoun = window.prompt("Enter the animals name like cat,dog,goose,cow,sheep,deer");
var intNumber = parseInt(window.prompt("Enter the number for counting animals "), 10);

if (intNumber > 1) {
    switch (strNoun) {
        case "goose":
            strNoun = "geese";
            break;
        case "sheep":
            strNoun = "sheep";
            break;
        case "deer":
            strNoun ="deer";
            break;
        default:
           strNoun = strNoun + "s";            
                }
} else {
            strNoun;
        }
window.document.write(intNumber + " " + strNoun);
        
        
