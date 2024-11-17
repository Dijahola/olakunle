document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector(".fa-sun");
    const body = document.body;
    const newsletterInput = document.getElementById("newsletter-input");
    const newsletterButton = document.getElementById("newsletter-button");

    
    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        
        if (darkModeToggle.classList.contains("fa-sun")) {
            darkModeToggle.classList.remove("fa-sun");
            darkModeToggle.classList.add("fa-moon");
        } else {
            darkModeToggle.classList.remove("fa-moon");
            darkModeToggle.classList.add("fa-sun");
        }
    });

    
    newsletterButton.addEventListener("click", (event) => {
        event.preventDefault(); 
        const email = newsletterInput.value.trim();

        if (email === "") {
            alert("Please enter your email address before subscribing.");
        } else if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");

            window.location.href = "https://olakunle.ng/newsletter";
        }
    });

    
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});