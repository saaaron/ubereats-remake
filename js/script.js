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