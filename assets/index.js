// Navbar transparency fade effect

// Fetch the object with a query selector
// Query selectors return the first object matching the query
// and since there's only one '.nav__links', it'll always be the right one.
const nav = document.querySelector('.nav__links');
let isTransparent = true;
let verticalPosition = 0;

addEventListener("scroll", () => {
    verticalPosition = window.scrollY;

    if (!isTransparent && verticalPosition === 0) {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-opaque');
        isTransparent = true;
        // If we're transparent but not at the top, make it
        // opaque.
    } else if (isTransparent && verticalPosition > 0) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-opaque');
        isTransparent = false;
    }
});
