// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Language toggle
    const languageToggle = document.getElementById("language-toggle");

    languageToggle.addEventListener("click", () => {
        alert("La fonctionnalité de changement de langue est à venir !");
    });

    // Reservation alerts
    const reserveButtons = document.querySelectorAll(".bg-blue-500");

    reserveButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();  // Prevent default link behavior
            // Custom reservation action
            alert("Votre réservation a été reçue! Nous vous contacterons bientôt.");
        });
    });
    // Reservation form submission
    const reservationForm = document.getElementById("reservation-form");

    reservationForm.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent default form submission
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const pickupLocation = document.getElementById("pickup-location").value;
        const dropoffLocation = document.getElementById("dropoff-location").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Display reservation details (you can add more complex handling here)
        alert(`Réservation réussie !\nNom: ${name}\nEmail: ${email}\nLieu de prise en charge: ${pickupLocation}\nLieu de dépose: ${dropoffLocation}\nDate: ${date}\nHeure: ${time}`);
    });
    // Contact form submission
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent default form submission
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Display contact details (you can add more complex handling here)
        alert(`Message envoyé !\nNom: ${name}\nEmail: ${email}\nMessage: ${message}`);
    });
});




// Language Toggle Functionality
const toggleLanguage = () => {
    const currentLanguage = document.documentElement.lang;
    if (currentLanguage === "en") {
        document.documentElement.lang = "fr";
        alert("Langue changée en français.");
    } else {
        document.documentElement.lang = "en";
        alert("Language switched to English.");
    }
};

// Attach toggle function to button (if exists)
const languageButton = document.querySelector("#language-toggle");
if (languageButton) {
    languageButton.addEventListener("click", toggleLanguage);
}

// Form Validation for Reservation and Contact Forms
const validateForm = (form) => {
    const inputs = form.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
        if (input.required && !input.value.trim()) {
            isValid = false;
            input.classList.add("border-red-500");
            input.nextElementSibling.textContent = "This field is required.";
        } else {
            input.classList.remove("border-red-500");
            input.nextElementSibling.textContent = "";
        }
    });

    return isValid;
};

// Attach validation to forms
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm(form)) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
});

// Dynamic Service Highlights
const serviceCards = document.querySelectorAll(".service-card");
serviceCards.forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.classList.add("shadow-lg", "scale-105");
    });
    card.addEventListener("mouseout", () => {
        card.classList.remove("shadow-lg", "scale-105");
    });
});

// Smooth Scrolling
const links = document.querySelectorAll("a[href^='#']");
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});
