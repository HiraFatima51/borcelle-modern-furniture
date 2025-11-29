// search.js - Product Search Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get search input
    const searchInput = document.querySelector('.search-box input');
    
    if (!searchInput) return;

    // Add event listener for search
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();
        
        // Get all product cards on the page
        const productCards = document.querySelectorAll('.product-card');
        
        if (productCards.length === 0) return;

        let hasResults = false;

        // Search through each product card
        productCards.forEach(card => {
            const productName = card.querySelector('h3').textContent.toLowerCase();
            const productDescription = card.querySelector('p:not(.price)').textContent.toLowerCase();
            
            // Check if search term matches product name or description
            if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                card.style.display = 'block';
                hasResults = true;
            } else {
                card.style.display = 'none';
            }
        });

        // Show message if no results found
        showNoResultsMessage(hasResults, searchTerm);
    });

    // Function to show/hide no results message
    function showNoResultsMessage(hasResults, searchTerm) {
        let messageElement = document.getElementById('search-no-results');
        
        if (!hasResults && searchTerm.length > 0) {
            if (!messageElement) {
                messageElement = document.createElement('div');
                messageElement.id = 'search-no-results';
                messageElement.style.cssText = `
                    text-align: center;
                    padding: 40px;
                    font-size: 18px;
                    color: #666;
                    grid-column: 1 / -1;
                `;
                messageElement.textContent = `No products found matching "${searchTerm}"`;
                
                // Insert message after the title or before products container
                const productsContainer = document.querySelector('.products-container');
                if (productsContainer) {
                    productsContainer.parentNode.insertBefore(messageElement, productsContainer);
                }
            } else {
                messageElement.textContent = `No products found matching "${searchTerm}"`;
            }
        } else if (messageElement) {
            messageElement.remove();
        }
    }

    // Clear search when navigating away (optional)
    window.addEventListener('beforeunload', function() {
        searchInput.value = '';
    });
});