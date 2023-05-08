!(function () {
  /**
   * You will be using the Dummy Product API. You can find the documentation here:
   * @see https://dummyjson.com/docs/products
   *
   * You will be building a Create Update Read Delete (CRUD) application.
   * You will need to make three AJAX requests using the Dummy Product API.
   *
   * 1. Make an AJAX request to get a list of products.
   *    Display the list of products in the table below.
   *    See the sample table row HTML below.
   *    Each row must have a "Delete" button.
   *
   * 2. When the user clicks on a "Delete" button,
   *    it should make an AJAX request to delete the product.
   *
   * 3. When the user fills out and submits the "Add Product" form,
   *    send an AJAX request to add the new product.
   *
   * You can use Axios if you like to solve this problem. (You will need to get the library from a CDN.)
   * You can choose to use promise or async and await.
   *
   * HINT: You might want to embed the product ID somewhere in the HTML
   * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset
   *
   * Sample table row HTML:
   * @example
   * <tr>
   *   <td>1</td>
   *   <td>iPhone 9</td>
   *   <td>An apple mobile which is nothing like apple</td>
   *   <td>$549.00</td>
   *   <td>12.96</td>
   *   <td>4.69</td>
   *   <td>94</td>
   *   <td>Apple</td>
   *   <td>smartphones</td>
   *   <td>
   *     <button class="btn btn-danger btn-sm delete-product-btn">Delete</button>
   *   </td>
   * </tr>
   */

 //Make product listings table
 const addRows = (products) => {
    const productTable = document.querySelector("#productTableBody");

     products.forEach((product) => {
       let row = 
       `<tr id="row${product.id}">
         <td>${product.id}</td>
         <td>${product.title}</td>
         <td>${product.description}</td>
         <td>$${product.price}.00</td>
         <td>${product.discountPercentage}</td>
         <td>${product.rating}</td>
         <td>${product.stock}</td>
         <td>${product.brand}</td>
         <td>${product.category}</td>
         <td>
           <button id="${product.id}", class="btn btn-danger btn-sm delete-product-btn">Delete</button>
         </td>
         </tr>
       `;
       productTable.insertAdjacentHTML("beforeend", row)
     });
  };
  

    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const products = data.products;
      addRows(products);

      const buttons = document.querySelectorAll(".delete-product-btn");
      const rowRemoved = document.querySelector(".myRow")
      // Loops through each button and attach an event
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          let num = button.id;
          const delRow = document.querySelector("#row" + num);
          delRow.remove();

          fetch('https://dummyjson.com/products/' + num, {
            method: 'DELETE',
          })
              .then(res => res.json())
              .then(console.log);
        });


      });
    });

     const userProduct = document.querySelector('#productForm')

     const userTitle = document.querySelector('#title')
     const userDescription = document.querySelector('#description')
     const userPrice = document.querySelector('#price')
     const userDiscount = document.querySelector('#discountPercentage')
     const userRating = document.querySelector('#rating')
     const userStock = document.querySelector('#stock')
     const userBrand = document.querySelector('#brand')
     const userCategory = document.querySelector('#category')
     
     userProduct.addEventListener("submit", event => {
       event.preventDefault();
       const newProduct = `
        title: ${userTitle.value},
        description: ${userDescription.value},
        price: ${userPrice.value},
        discountPercentage: ${userDiscount.value},
        rating: ${userRating.value},
        stock: ${userStock.value},
        brand: ${userBrand.value},
        category: ${userCategory.value}
       `;

       const placeholderProduct = 
       `<tr>
         <td>31</td>
         <td>${userTitle.value}</td>
         <td>${userDescription.value}</td>
         <td>$${userPrice.value}.00</td>
         <td>${userDiscount.value}</td>
         <td>${userRating.value}</td>
         <td>${userStock.value}</td>
         <td>${userBrand.value}</td>
         <td>${userCategory.value}</td>
         <td>
           <button id="31"class="btn btn-danger btn-sm delete-product-btn">Delete</button>
         </td>
     </tr>`

       console.log(newProduct)
       const addTableRow = document.querySelector("#productTableBody")
       addTableRow.insertAdjacentHTML("beforeend", placeholderProduct);
       //products += newProduct;

       fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({newProduct})
        })
        .then(res => res.json())
        .then(console.log); 
      });

  
})();
