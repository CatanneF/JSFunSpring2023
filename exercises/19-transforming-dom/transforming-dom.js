/**
 * You will follow the instructions in the transforming-dom.html
 * to transform various elements on the page in different ways.
 * You may modify the HTML to add ids, classes, data attributes, etc.
 */
(function () {
  // Put your answers in here
  const addImg = document.querySelector("img");
  addImg.src = href="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif";
  
  const mdnLink = document.querySelector("#mdn-link")
  mdnLink.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";

  const success = document.querySelector(".alert-success");
  success.textContent = "I am victorious!";

  const newBG = document.querySelector(".alert-info")
  newBG.style.backgroundColor = "grey";

  const textColor = document.querySelector(".new")
  textColor.style.color = "orange";

  const hide = document.querySelector(".hide")
  hide.style.display = "none";

  const show = document.querySelector(".show")
  show.classList.remove("hidden");

  const button = document.querySelector("button")
  if (button.classList.contains("btn-primary")) {
    const blue = document.querySelector("#blue");
    blue.textContent = "\u2713blue"
  };



})();
 