/*eslint-env browser*/

var ursulaPoints = parseInt(window.prompt("Enter the points for Ursula"), 10);
var paulPoints = parseInt(window.prompt("Enter the points for Paul"), 10);
var henryPoints = parseInt(window.prompt("Enter the points for Henry"), 10);
var tabithaPoints = parseInt(window.prompt("Enter the points for Tabitha"), 10);
var lucyPoints = parseInt(window.prompt("Enter the points for Lucy"), 10);

var ursulaGrade;
var paulGrade;
var henryGrade;
var tabithaGrade;
var lucyGrade;

if (isNaN(ursulaPoints) || ursulaPoints > 100) {
    window.document.write("Either grade was not a number or grade was greater than 100. Try again." + "<br>");
} else {
    if ((ursulaPoints < 100) && (ursulaPoints >= 90)) {
        ursulaGrade = "A";
    } else if ((ursulaPoints < 90) && (ursulaPoints >= 80)) {
        ursulaGrade = "B";
    } else if ((ursulaPoints < 80) && (ursulaPoints >= 70)) {
        ursulaGrade = "C";
    } else if ((ursulaPoints < 70) && (ursulaPoints >= 60)) {
        ursulaGrade = "D";
    } else {
        ursulaGrade = "F";
    }
}


if (isNaN(paulPoints) || paulPoints > 100) {
    window.document.write("Either grade was not a number or grade was greater than 100. Try again." + "<br>");
} else {
    if ((paulPoints < 100) && (paulPoints >= 90)) {
        paulGrade = "A";
    } else if ((paulPoints < 90) && (paulPoints >= 80)) {
        paulGrade = "B";
    } else if ((paulPoints < 80) && (paulPoints >= 70)) {
        paulGrade = "C";
    } else if ((paulPoints < 70) && (paulPoints >= 60)) {
        paulGrade = "D";
    } else {
        paulGrade = "F";
    }
}


if (isNaN(henryPoints) || henryPoints > 100) {
    window.document.write("Either grade was not a number or grade was greater than 100. Try again." + "<br>");
} else {
    if ((henryPoints < 100) && (henryPoints >= 90)) {
        henryGrade = "A";
    } else if ((henryPoints < 90) && (henryPoints >= 80)) {
        henryGrade = "B";
    } else if ((henryPoints < 80) && (henryPoints >= 70)) {
        henryGrade = "C";
    } else if ((henryPoints < 70) && (henryPoints >= 60)) {
        henryGrade = "D";
    } else {
        henryGrade = "F";
    }
}


if (isNaN(tabithaPoints) || tabithaPoints > 100) {
    window.document.write("Either grade was not a number or grade was greater than 100. Try again." + "<br>");
} else {
    if ((tabithaPoints < 100) && (tabithaPoints >= 90)) {
        tabithaGrade = "A";
    } else if ((tabithaPoints < 90) && (tabithaPoints >= 80)) {
        tabithaGrade = "B";
    } else if ((tabithaPoints < 80) && (tabithaPoints >= 70)) {
        tabithaGrade = "C";
    } else if ((tabithaPoints < 70) && (tabithaPoints >= 60)) {
        tabithaGrade = "D";
    } else {
        tabithaGrade = "F";
    }
}


if (isNaN(lucyPoints) || lucyPoints > 100) {
    window.document.write("Either grade was not a number or grade was greater than 100. Try again." + "<br>");
} else {
    if ((lucyPoints < 100) && (lucyPoints >= 90)) {
        lucyGrade = "A";
    } else if ((lucyPoints < 90) && (lucyPoints >= 80)) {
        lucyGrade = "B";
    } else if ((lucyPoints < 80) && (lucyPoints >= 70)) {
        lucyGrade = "C";
    } else if ((lucyPoints < 70) && (lucyPoints >= 60)) {
        lucyGrade = "D";
    } else {
        lucyGrade = "F";
    }
}


var averagePoints = (ursulaPoints + paulPoints + henryPoints + tabithaPoints + lucyPoints) / 5;


window.document.write("Student(s) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Grade" + "<br>");
window.document.write("-----------------------------------------" + "<br>");
window.document.write("Ursula &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + ursulaGrade + "<br>");
window.document.write("Paul &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + paulGrade + "<br>");
window.document.write("Henry &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + henryGrade + "<br>");
window.document.write("Tabitha &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tabithaGrade + "<br>");
window.document.write("Lucy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + lucyGrade + "<br>");
window.document.write("-----------------------------------------" + "<br>");
window.document.write("Average Points&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + parseInt((averagePoints), 10));


