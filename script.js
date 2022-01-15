"use strict";

var heading1 = document.getElementById("heading1");
var heading = document.getElementById("heading");
var heading2 = document.getElementById("heading2");
var input = document.getElementById("input");
var plone = document.getElementById("plone");
var pltwo = document.getElementById("pltwo");
var reset = document.getElementById("reset");
var playing = document.getElementById("playing");

var number = 0;
var number2 = 0;
var maxNumber = 0;
var playin = 0;

playing.textContent = `${playin}`;
heading1.textContent = ` ${number}`;
heading2.textContent = `${number2}`;

plone.addEventListener("click", function(){
    if(number < maxNumber && number2 != maxNumber){
    number++;
    heading1.textContent = `${number}`;
    maxNumber = input.value;

    } else {
      heading1.style.color = "green";
    }
});
pltwo.addEventListener("click", function(){
    if(number2 < maxNumber && number != maxNumber){
    number2++;
    heading2.textContent = `${number2}`;
    maxNumber = input.value;

    } else {
      heading2.style.color = "green";
    }
});
reset.addEventListener("click", function(){
    if(number2 >= 0 || number >= 0){
    
    number = 0;
    number2 = 0;
    heading1.textContent = `${number}`;
    heading2.textContent = `${number2}`;
    heading1.style.color = "black";
    heading2.style.color = "black";
    
    
    
    } else {
      reset.style.background = "red";
    }
});

input.addEventListener("change", function(){
    if(number > maxNumber && number2 < maxNumber){
        maxNumber = input.value;
        
    } else {
        maxNumber = 1;
    }
});

input.addEventListener('input', function(event) {
  playing.textContent = event.target.value.split();
  
});
