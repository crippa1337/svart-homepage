// Script to append "target = '_blank'" to all external links
// See scripts/index.js for documentation on misc. functions not explained here

// Fetch all the links
const links = document.querySelectorAll('a');

// Loop through the links
for (const link of links) {
    // If it is an external link
    if (link.href.startsWith('https')) {
        // Set the target to '_blank' (which opens a new tab instead)
        link.target = '_blank';
    }
}