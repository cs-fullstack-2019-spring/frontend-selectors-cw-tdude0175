

var ptag1 = document.querySelector("p");
var pID = document.querySelector("#first");  // defining each variable for easy to display
var pClass = document.querySelector(".special");
// Print the first p tag to the console using the ID, class, and tag selectors.
console.log(ptag1.textContent , pID.textContent , pClass.textContent);
 // need to remember how to call for outside variables inside a log
/*
i missed you multi line comments
beep boop beep
can define tag content as well as tag as an object from the query selection
 */

var specialClass1 = document.querySelector(".special");
var specialClassAll = document.querySelectorAll(".special");
// Print the special class using both the query selector and query all selector.
console.log(specialClass1.textContent);
console.log(specialClassAll);
//cannot [textContent] {specialClassAll} because it is an array and won't be able to display an arrays text content

var h1Statement = document.querySelectorAll("h1");
// Change the color of the h1 statement to blue.
h1Statement[0].style.color = "blue";
//only one h1 statement

var pTags = document.getElementsByTagName("p");
// Change the color of the last p tag to yellow.
pTags[3].style.color = "yellow";

// {pTags} is the culmination of all p tags where there are 4 tags present in the pre-ordained text
// so the last will be index 3
