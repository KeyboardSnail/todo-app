
        console.log("Script loaded");

        const popup = document.getElementById('auth-popup');
        const closePopup = document.getElementById('close-popup');
        const contactUsSection = document.getElementById('contact-us');
        const signinSection = document.getElementById('signin-section');
        const signupSection = document.getElementById('signup-section');
        const signupLink = document.getElementById('signup-link');
        const signinForm = document.getElementById('signin-form');
        const signupForm = document.getElementById('signup-form');
        const contactLink = document.getElementById('contact-link');
        const passwordField = document.getElementById('signup-password');
        const confirmPasswordField = document.getElementById('signup-confirm-password');
        const passwordError = document.getElementById('password-error');

        // Open popup on clicking "Contact Us"
        contactLink.addEventListener('click', () => {
            console.log("Contact Us link clicked");
            popup.style.display = 'block';
            signinSection.style.display = 'block';
            signupSection.style.display = 'none';
        });

        // Close popup
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        // Switch to Sign Up
        signupLink.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("Sign Up link clicked");
            signinSection.style.display = 'none';
            signupSection.style.display = 'block';
        });

        // Handle Sign In
        signinForm.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log("Sign In form submitted");
            popup.style.display = 'none';
            contactUsSection.style.display = 'block';
        });

        signupForm.addEventListener('submit', (event) => {
            if (passwordField.value !== confirmPasswordField.value) {
                passwordError.style.display = 'block';
                event.preventDefault();
            } else {
                passwordError.style.display = 'none';
                popup.style.display = 'none';
                contactUsSection.style.display = 'block';
            }
        });

        // Handle Sign Up
        signinForm.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Sign In form submitted");
    popup.style.display = 'none';
    contactUsSection.style.display = 'block'; // Directly show the contact form after sign-in
});

        window.addEventListener('click', (event) => {
            if (event.target === popup) {
                console.log("Click outside popup detected");
                popup.style.display = 'none';
            }
        });

        window.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded");
    popup.style.display = 'block'; // Show the popup by default
    signinSection.style.display = 'block';
    signupSection.style.display = 'none';
    contactUsSection.style.display = 'none'; // Hide contact section by default
});
