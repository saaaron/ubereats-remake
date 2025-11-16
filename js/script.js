document.addEventListener('DOMContentLoaded', () => {
    // Example: Add a click listener to category buttons to toggle 'active' class
    const categoryButtons = document.querySelectorAll('.category-icon');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
        });
    });

    // Example: Simple console log for search input (in a real app, this would trigger a search)
    const searchInput = document.querySelector('.search-section input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            console.log('Search input changed:', event.target.value);
            // Here you would typically filter results or make an API call
        });
    }

    // You can add more interactive JavaScript here as needed for your application
    // For example, dynamic loading of restaurant data, infinite scrolling, etc.
});


// Add this logic to your existing script.js file

document.addEventListener('DOMContentLoaded', () => {

    // --- Add this new code for the Restaurant Detail Page ---

    const menuNav = document.getElementById('menu-nav');
    if (menuNav) {
        const menuLinks = menuNav.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.menu-items > div[id]');

        // Function to update active link
        const updateActiveLink = () => {
            let currentSectionId = '';
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                // Check if section is in view
                if (sectionTop <= 150) { // 150px offset to activate sooner
                    currentSectionId = section.getAttribute('id');
                }
            });

            menuLinks.forEach(link => {
                link.classList.remove('active', 'text-success');
                link.classList.add('text-muted');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active', 'text-success');
                    link.classList.remove('text-muted');
                }
            });
        };

        // Update active link on scroll
        document.addEventListener('scroll', updateActiveLink);
        
        // Handle click on menu links for smooth scroll
        menuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    // Calculate position to scroll to
                    const headerOffset = 120; // Height of sticky headers
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // --- End of new code ---

    // (Keep your existing code for category buttons and search here)
    const categoryButtons = document.querySelectorAll('.category-icon');
    // ... etc ...
});