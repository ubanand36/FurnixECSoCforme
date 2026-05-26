// --- SSoC Feature Code: Add to Cart Counter ---
let cartCount = 0;

// 1. Grab our new badge element from the DOM
const cartBadge = document.getElementById("cart-badge");

// 2. Select all of the click triggers (buttons/anchors)
const checkoutButtons = document.querySelectorAll('.btn, [class*="btn"], .hero-content a');

checkoutButtons.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Stop the page from reloading/jumping
        
        cartCount++; // Bump the product counter
        
        // 3. Update the visual badge number instantly!
        if (cartBadge) {
            cartBadge.innerText = cartCount;
        }
        
        console.log(`Successfully updated layout! Items in cart: ${cartCount}`);
    });
});