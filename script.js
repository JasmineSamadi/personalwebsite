// script.js

// Function to open a modal
// this is used to open a specific modal
// it takes in the id of the model we want to open
// syle.display = block makes it visisble
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close a modal
// closes a modal with by getting the modal id and seeting style = none
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
};


// Add 'active' class to the current section's link in the nav bar
// script.js

// Select all navigation links and sections
const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('section');

// Add scroll event listener
window.addEventListener('scroll', () => {
    let currentSection = '';

    // Loop through each section to check if it's in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80; // Adjust for fixed navbar height
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id'); // Get the section's id
        }
    });

    // Add 'active' class to the corresponding link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});
