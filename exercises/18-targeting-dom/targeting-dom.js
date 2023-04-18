/**
 * You will be targeting DOM elements (the HTML) on the page using
 * "document.querySelector" or "document.querySelectorAll"
 * You will then use "console.log" to print the results.
 *
 * @example console.log( document.querySelector("#myTarget") );
 *
 * When you use "document.querySelectorAll", you must loop through each
 * element in the collection and console.log each element. (See the slides)
 *
 * Do not change the HTML unless you are instructed to do so.
 */
(function () {
  // Put your answers in here
  const firstListItem = document.querySelector("li");
  const secondListItem = document.querySelector("#myId");
  const warning = document.querySelector(".bg-warning");
  warning.forEach((warning) => {
    console.log("warning item")
  });
  const targetButton = document.querySelector("#target-button");
  const links = document.querySelectorAll(".social-link");
  links.forEach((links) => {
    console.log("socials link")
  });
  const cells = document.querySelectorAll('#myRow .col');
  cells.forEach((cells) => {
    console.log("cell");
  });



  
})();

