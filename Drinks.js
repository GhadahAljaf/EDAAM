function filterProducts(size) {
    // Get all product elements
    var products = document.getElementsByClassName('product');
    
    // Loop through all product items
    for (var i = 0; i < products.length; i++) {
        // Get the size of the current product item
        var productSize = products[i].getAttribute('data-size');

        // Check if the product item should be displayed
        if (size == 'all' || productSize == size) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}


// Initialize the cart as an empty array
let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    const product = [
        { image: "Mango.jpg", title: "Mango nectar", price: 11.50 },
        { image: "mixedfruits.jpg", title: "Mixed fruits juice", price: 1.95 },
        { image: "orangejuice.png", title: "Orange juice", price: 7.50 },
        { image: "Mango.jpg", title: "Mango juice", price: 2.70 },
        { image: "Beetroot.png", title: "Beetroot and Blackcurrant juice", price: 4.00 },
        { image: "kiwi.jpg", title: "Kiwi juice", price: 2.85 },
        { image: "pineapple.png", title: "Pineapple juice", price: 9.50 },
        { image: "apple.jpg", title: "Apple juice", price: 9.95 },
        { image: "green.juice.jpg", title: "Green Juice", price: 12.00 },
    ];

    const rootElement = document.getElementById('root');
    renderProducts(product, rootElement);
});
// page1.js

function renderProducts(products, container) {
    container.innerHTML = products.map((item, index) => {
        const { image, title, price } = item;
        return (
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image} alt="${title}"></img>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>AED ${price.toFixed(2)}</h2>
                    <button onclick='addToCart("${title}", ${price}, "${image}")'>Add to cart</button>
                </div>
            </div>`
        );
    }).join('');
}

function addToCart(productTitle, productPrice, productImage) {
    const newItem = {
        title: productTitle,
        price: productPrice,
        image: productImage,
    };

      // Retrieve the cart from localStorage
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(newItem);
  
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
  
      alert(`${productTitle} has been added to the cart!`);
}
