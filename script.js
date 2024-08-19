let cart = [];

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".btn");
  const cartContainer = document.querySelector(".item1");
  const totalPriceElement = document.querySelector(".price");

  buttons.forEach((button) => {
    button.addEventListener("click", function() {
      const bookTitle = button.parentNode.querySelector("h2").textContent;
      const bookPrice = 10; 

      const book = { title: bookTitle, price: bookPrice };
      cart.push(book);

      updateCart();
    });
  });

  function updateCart() {
    cartContainer.innerHTML = "";
    let totalPrice = 0;

    cart.forEach((book) => {
      const bookElement = document.createElement("div");
      bookElement.textContent = book.title;
      cartContainer.appendChild(bookElement);

      totalPrice += book.price;
    });

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  }
});