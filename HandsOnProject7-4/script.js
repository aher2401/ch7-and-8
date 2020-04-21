// Hands-on Project 7-4
// Author: Alex Hernandez
// Date:   4/16/20



'use strict';

//global variabe, and empty object
var delivInfo = {};

var delivSummary = document.getElementById('deliverTo');

// function to process deivery info
function processDeliveryInfo(){
var prop;
delivInfo.name = document.getElementById("nameinput").value;
delivInfo.addr = document.getElementById("addrinput").value;
delivInfo.city = document.getElementById("cityinput").value;
delivInfo.email = document.getElementById("emailinput").value;
delivInfo.phone = document.getElementById("phoneinput").value;
for (prop in delivInfo){
delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
}
    document.getElementById("deliverTo").style.display = "block";
}

//function to preview order
function previewOrder(){
processDeliveryInfo();
//set the display style of the element to block
document.getElementsByTagName("section")[0].style.display = "block";
}

//create event listener that calls the prevewOrder function
function createEventListener(){
   var previewBtn = document.getElementById("previewBtn");
   if (previewBtn.addEventListener){
       previewBtn.addEventListener("click", previewOrder, false);
   }
   else if (previewBtn.attachEvent){
       previewBtn.attachEvent("onclick", previewOrder);
   }
}


//create event listener when page finishes loading
if (window.addEventListener){
window.addEventListener("load", createEventListener, false);
}
else if (window.attachEvent){
window.attachEvent("onload", createEventListener);
}