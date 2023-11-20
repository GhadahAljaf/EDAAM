document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart(cart);
});

function displayCart(cart) {
    const cartItemsContainer = document.getElementById('cartItems');
    const totalItemsElement = document.getElementById('totalItems');
    const totalPriceElement = document.getElementById('totalPrice');

    cartItemsContainer.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((item, index) => {
        // Ensure item.quantity is a number
        item.quantity = parseInt(item.quantity, 10) || 1;
        const itemTotal = parseFloat(item.price) * item.quantity;
        totalPrice += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');

        const productDetail = document.createElement('div');
        productDetail.innerHTML = `<span class="label">Product</span><img src="${item.image}" alt="${item.title}"><p>${item.title}</p>`;

        const priceDetail = document.createElement('div');
        priceDetail.innerHTML = `<span class="label">Price</span><p>${item.price} AED</p>`;

        const quantityDetail = document.createElement('div');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;
        quantityInput.min = 1;
        quantityInput.addEventListener('change', (event) => {
            const newQuantity = parseInt(event.target.value, 10) || 1;
            if (newQuantity < 1) {
                alert("Quantity cannot be less than 1");
                quantityInput.value = item.quantity;
                return;
            }
            item.quantity = newQuantity;
            updateCart(cart);
        });
        quantityDetail.innerHTML = `<span class="label">Quantity</span>`;
        quantityDetail.appendChild(quantityInput);

        const subtotalDetail = document.createElement('div');
        subtotalDetail.innerHTML = `<span class="label">Subtotal</span><p>${itemTotal.toFixed(2)} AED</p>`;

        cartItem.appendChild(productDetail);
        cartItem.appendChild(priceDetail);
        cartItem.appendChild(quantityDetail);
        cartItem.appendChild(subtotalDetail);

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove-btn');
        removeButton.onclick = () => removeItemFromCart(index);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);
    });

    totalItemsElement.textContent = cart.length;
    totalPriceElement.textContent = `Total Price: ${totalPrice.toFixed(2)} AED`;
}

function updateCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(cart); // Refresh the displayed cart
}

function removeItemFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(cart);
}

function checkout() {
    // Implement checkout functionality here
    alert('Proceeding to checkout...');
    // Redirect to a checkout page or similar
    // window.location.href = 'checkout-page.html';
}

function goBack() {
    window.history.back();
}
