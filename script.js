document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // 1. Navbar Background Scroll Effect
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
        
        // 2. Active Section Highlight
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Add a little offset so it triggers right before the section hits the top
            if (scrollY >= (sectionTop - 150)) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });

    // 3. Prevent Form Submission Refresh
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Message sent successfully! (This is a demo)");
            contactForm.reset();
        });
    }

    // 4. Set Dynamic Copyright Year
    const copyrightText = document.getElementById("copyrightText");
    if (copyrightText) {
        const currentYear = new Date().getFullYear();
        copyrightText.innerHTML = `© ${currentYear} Mahnoor Naveed. All rights reserved.`;
    }
});