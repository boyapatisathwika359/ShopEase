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
// Wishlist functionality

const wishlistButtons = document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const isAdded = button.dataset.added === "true";

        button.dataset.added = String(!isAdded);

        if (isAdded) {
            button.textContent = "♡ Add to Wishlist";
        } else {
            button.textContent = "♥ Added to Wishlist";
        }
    });
});