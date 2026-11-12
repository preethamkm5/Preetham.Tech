
// =====================================
// PREETHAM.TECH - JAVASCRIPT
// =====================================


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
});

// Close menu after clicking a navigation link

document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("show");
    });
});


// 2. PRODUCT SEARCH AND FILTER

const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");
const noResults = document.getElementById("noResults");

let selectedCategory = "all";

function filterProducts() {

    const searchText = searchInput.value.toLowerCase();
    let visibleCount = 0;

    productCards.forEach(function (card) {

        const category = card.dataset.category;
        const productName = card.querySelector("h3").textContent.toLowerCase();
        const description = card.querySelector("p").textContent.toLowerCase();

        const matchesCategory =
            selectedCategory === "all" || category === selectedCategory;

        const matchesSearch =
            productName.includes(searchText) ||
            description.includes(searchText);

        if (matchesCategory && matchesSearch) {
            card.style.display = "block";
            visibleCount++;
        } else {
            card.style.display = "none";
        }

    });

    // Display a message if no products match

    noResults.style.display = visibleCount === 0 ? "block" : "none";
}


// Search products while typing

searchInput.addEventListener("input", filterProducts);


// Filter products when a category button is clicked

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        selectedCategory = button.dataset.filter;

        filterProducts();

    });

});


// 3. PRODUCT ENQUIRY BUTTONS

const enquiryButtons = document.querySelectorAll(".enquire-link");
const productInput = document.getElementById("product");

enquiryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        productInput.value = button.dataset.product;

    });

});


// 4. CONTACT FORM DEMONSTRATION

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formMessage.textContent =
        "Your enquiry form has been validated successfully. Connect an email service to receive enquiries.";

    contactForm.reset();

});


// 5. AUTOMATIC COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

