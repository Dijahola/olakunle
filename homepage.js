const themeToggle = document.querySelector('.fa-sun');
const body = document.body; 
const navbar = document.getElementById('navbar'); 
const footer = document.getElementById('footer');
const sections = document.querySelectorAll('section'); 
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    navbar.classList.toggle('dark-navbar');
    footer.classList.toggle('dark-footer');
    sections.forEach(section => section.classList.toggle('dark-section'));

    
    if (themeToggle.classList.contains('fa-sun')) {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    } else {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const contactName = document.getElementById('contact-name');
    const contactEmail = document.getElementById('contact-email');
    const contactMessage = document.getElementById('contact-message');

    
    if (contactName.value.trim() === '' || contactEmail.value.trim() === '' || contactMessage.value.trim() === '') {
        alert('Please fill in all the fields before submitting.');
        return; 
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(contactEmail.value.trim())) {
        alert('Please enter a valid email address.');
        return; 
    }

    
    alert('Thank you for reaching out! I will respond to your message shortly.');
    contactForm.reset(); 
});

const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const newsletterName = document.getElementById('newsletter-name');
    const newsletterEmail = document.getElementById('newsletter-email');

    
    if (newsletterName.value.trim() === '' || newsletterEmail.value.trim() === '') {
        alert('Please fill in all the fields before subscribing.');
        return; 
    }

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(newsletterEmail.value.trim())) {
        alert('Please enter a valid email address.');
        return; 
    }

    alert('Thank you for subscribing to my newsletter!');
    newsletterForm.reset();
});