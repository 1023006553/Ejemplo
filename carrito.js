// script.js
let cartCount = 0;

function addToCart() {
    cartCount++;
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cartCount;
}

// Ejemplo de cómo agregar un producto al carrito
// Puedes llamar a addToCart() cuando un producto se agrega al carrito
addToCart(); // Llama esta función cuando un producto es agregado