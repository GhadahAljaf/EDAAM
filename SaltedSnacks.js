// Initialize the cart as an empty array
let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    const product = [
        { image: "./Pictures/Amwaj.jpg", title: "Amwaj potato chips", price: 4.00 },
        { image: "./Pictures/sohar.jpg", title: "Sohar chips", price: 1.00 },
        { image: "./Pictures/salad.jpg", title: "Salad chips", price: 3.50 },
        { image: "./Pictures/oman.jpg", title: "Oman chips", price: 1.50 },
        { image: "./Pictures/crackers.jpg", title: "Qrakers chips", price: 3.00 },
        { image: "./Pictures/Smithscheese.jpg", title: "Smiths square crisps", price: 1.50 },
        { image: "./Pictures/Vchips.jpg", title: "Smiths salt and vinegar chipsticks", price: 3.50 },
        { image: "./Pictures/Pofak.jpg", title: "Pofak chips", price: 0.50 },
        { image: "./Pictures/Baz.jpg", title: "Baz chips", price: 0.70 },
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


function filterByPrice() {
    var minPrice = document.getElementById('min-price').value;
    var maxPrice = document.getElementById('max-price').value;
    var products = document.getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {
        var price = parseFloat(products[i].getElementsByClassName('product-price')[0].textContent);
        if (price >= minPrice && price <= maxPrice) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}