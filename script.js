document.addEventListener('DOMContentLoaded', function() {
    const acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            // Toggle active class
            this.classList.toggle("active");

            // Toggle panel height
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                
                // Close other panels (optional but better for mobile)
                for (let j = 0; j < acc.length; j++) {
                    if (acc[j] !== this && acc[j].classList.contains("active")) {
                        acc[j].classList.remove("active");
                        acc[j].nextElementSibling.style.maxHeight = null;
                    }
                }
            }
            
            // Smooth scroll to the clicked accordion
            if (this.classList.contains("active")) {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    }

    // Open first section by default
    if (acc.length > 0) {
        acc[0].click();
    }
});
