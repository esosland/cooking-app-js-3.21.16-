/*tsp to mL*/
var tspMl = function(){
var tsp = parseInt(prompt("Enter Tsp for mL conversion"));

var result = (tsp/0.20288);
alert ("The conversion is: " + result.toFixed(1) + " mL.");
}
tspMl();

/*tbsp to mL*/
var tbspMl = function(){
var tbsp = parseInt(prompt("Enter Tbsp for mL conversion"));

var result = (tbsp*15);
alert ("The conversion is: " + result.toFixed(1) + " mL.");
}
tbspMl();

/*oz to mL*/
var ozMl = function(){
var oz = parseInt(prompt("Enter fluid ounces for mL conversion"));

var result = (oz*30);
alert ("The conversion is: " + result.toFixed(1) + " mL.");
}
ozMl();

/*cups to mL*/
var cupMl = function(){
var cup = parseInt(prompt("Enter cups for mL conversion"));

var result = (cup*240);
alert ("The conversion is: " + result.toFixed(1) + " mL.");
}
cupMl();

/*quart to liter*/
var quartLiter = function(){
var quart = parseInt(prompt("Enter quarts for liter conversion"));

var result = (quart*.950);
alert ("The conversion is: " + result.toFixed(1) + " liters.");
}
quartLiter();

/*quart to liter*/
var gallonLiter = function(){
var gallon = parseInt(prompt("Enter gallons for liter conversion"));

var result = (gallon*3.8);
alert ("The conversion is: " + result.toFixed(1) + " liters.");
}
gallonLiter();
