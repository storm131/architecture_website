document.addEventListener("DOMContentLoaded", function () {
    // Contact Form Submission
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            return;
        }
        
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });

    // Image Hover Effect (Future Expansion for Lightbox Feature)
    const projectImages = document.querySelectorAll(".projects-grid img");
    
    projectImages.forEach(img => {
        img.addEventListener("click", function () {
            alert("This feature will be enhanced soon to display images in full view.");
        });
    });
});
