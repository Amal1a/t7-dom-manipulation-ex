//Write your own code here
//DON'T touch any other files!
/* 
------ Remove all break tags --------
const myTestRemover = document.querySelectorAll("br");

myTestRemover.forEach(doSomething);
function doSomething(meRemove) {
  meRemove.remove();
} */

const myTestRemover = document.querySelectorAll("br");

myTestRemover.forEach(doSomething);
function doSomething(meRemove) {
  meRemove.remove();
}

/* ----- Give all sections the class "filled" ------ I am not sure...*/

const fillOut = document.querySelectorAll("section");

fillOut.forEach(doTheFill);
function doTheFill(yesFill) {
  yesFill.ClassList.add(".filled");
}

/* meRemove.ClassList.add("filled", section); */

/* ------ Remove all elements that come before a section ------- hmmmmm ....*/

const elementTestRemover = fillOut.previousElementSibling("section");

elementTestRemover.forEach(doSomething2);
function doSomething2(meRemove2) {
  meRemove2.remove();
}
