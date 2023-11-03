// JavaScript code for managing the cart
let cartCount = 0;

document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
    });
});
