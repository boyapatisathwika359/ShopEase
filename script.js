// ShopEase JavaScript

console.log("ShopEase website loaded successfully");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter a product name.");
    } else {
        alert("Searching for: " + searchText);
    }
});
// Add to Cart functionality

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Product added to cart!");
    });
});