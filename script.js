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
// Product category filtering

const categoryButtons = document.querySelectorAll(".categories button");
const productCards = document.querySelectorAll(".product-card");

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const category = button.textContent.trim();

        productCards.forEach(function (card) {
            const productName = card.querySelector("h3").textContent.toLowerCase();

            if (category === "All") {
                card.style.display = "block";
            } 
            else if (
                category === "Electronics" &&
                (productName.includes("watch") || productName.includes("headphones"))
            ) {
                card.style.display = "block";
            } 
            else if (
                category === "Accessories" &&
                productName.includes("backpack")
            ) {
                card.style.display = "block";
            } 
            else {
                card.style.display = "none";
            }
        });
    });
});