// Navbar transparency fade effect

// Fetch the object with a query selector
// Query selectors return the first object matching the query
// and since there's only one '.nav__links', it'll always be the right one.
const nav = document.querySelector('.nav__links');
let isTransparent = true;

setInterval(() => {
    // Get scroll position, how far down the window
    // the user has scrolled. Is 0 at the top.
    const scrollLength = window.scrollY;

    // If we're not currently transparent, but at the top
    // we make it transparent.
    if (!isTransparent && scrollLength === 0) {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-opaque');
        isTransparent = true;
        // If we're transparent but not at the top, make it
        // opaque.
    } else if (isTransparent && scrollLength > 0) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-opaque');
        isTransparent = false;
    }

    // Check for scrolling once every 33ms (30 times a second)
}, 33);
