// Script for the navbar transparency fade effect for the homepage

// Fetch the object with a query selector
// Query selectors return the first object matching the query
// and since there's only one '.nav__links', it'll always be the right one.
const nav = document.querySelector('.desktop');
let isTransparent = true;
let verticalPosition = 0;

// Event listener "scroll" detects when the user
// scrolls in the window and executes the code inside.
addEventListener("scroll", () => {
    // Fetch the current vertical window position. (0 being at the top)
    verticalPosition = window.scrollY;

    // If we're not transparent and at the top, make it transparent.
    if (!isTransparent && verticalPosition === 0) {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-opaque');
        isTransparent = true;
        // If we're transparent but not at the top, make it opaque.
    } else if (isTransparent && verticalPosition > 0) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-opaque');
        isTransparent = false;
    }
});
