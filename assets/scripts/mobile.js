// Simple script for handling the burger menu
// This has been documented in my previous assignment 'new_portfolio'

const burger = document.querySelector('.burger');
const mobileLinks = document.querySelector('.mobile__links');

burger.addEventListener('click', () => {
    mobileLinks.classList.toggle('open');
});
