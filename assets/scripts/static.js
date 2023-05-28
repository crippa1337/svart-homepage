// Script to append "target = '_blank'" to all external links
// See scripts/index.js for documentation on misc. functions not explained here

// Fetch all the links
const allLinks = document.querySelectorAll('a');
const origin = window.location.origin;

// Loop through the links
for (const link of allLinks) {
    // If it is an external link
    if (link.href.startsWith('https') && !link.href.startsWith(origin)) {
        // Set the target to '_blank' (which opens a new tab instead)
        link.target = '_blank';
    }
}
