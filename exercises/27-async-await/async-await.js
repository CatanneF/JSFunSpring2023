(function () {
  /**
   * As a user, I should be able to click on a button and get a quote, so I can learn about what ron-swanson's opinions are.
   *
   *  Developer notes:
   *  In the HTML, there is an element that you can use to populate the quotes(#blockquote) or feel free to use your own design.
   *
   * This is the API you will be using. The method will be GET.
   * https://ron-swanson-quotes.herokuapp.com/v2/quotes
   */

  const getQuote = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      })
        const getQuoteBtn = document.querySelector("button");
        const quote = document.querySelector('#quote');
        getQuoteBtn.addEventListener("click", () => {
          console.log("button clicked")
          
           quote.textContent = response.data[0];
          });

 
      }
  
    }) catch (err) {
      console.error(err);

    }



  }



})();





/*
// Attach an event to the button 
const button = document.querySelector("#getQuote"); 
button.addEventListener("click", async () => { 
  let quote = ""; try { // Make a request const response = await axios.request({ method: "GET", url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes", }); // Get the request from the response quote = response.data[0]; } catch (err) { console.error(err); quote = "Oh no! An unexpected error occurred!"; } // Display on the page const blockquote = document.querySelector("#quote"); blockquote.textContent = quote; });


*/
