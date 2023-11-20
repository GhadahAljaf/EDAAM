let cart = [];

document.addEventListener('DOMContentLoaded', function () {
    const sweetSnacks = [
        { image: "./Snacks/tamrah.jpg", title: "Tamrah Assorted Chocolate Date", price: 39.00 },
        { image: "./Snacks/Alnasma.jpg", title: "Alnassma Whole Camel milk Chocolate", price: 29.00 },
        { image: "./Snacks/bayara.jpg", title: "Bayara Milk Chocolate Dates with Almond", price: 29.25 },
        { image: "./Snacks/hazelnut.jpg", title: "Hazelnut Dark Chocolate Coated", price: 11.50 },
        { image: "./Snacks/Raspberry.jpg", title: "Raspberry & Dark Choco Croquant Bar", price: 29.50 },
        { image: "./Snacks/chocolate.jpg", title: "Coconut Chips with Chocolate Flavor mini", price: 15.00 },
        { image: "./Snacks/Baklava.jpg", title: "Al Rifai Honey Baklava", price: 90.00 },
        { image: "./Snacks/halwa.jpg", title: "Halwa Rahesh", price: 25.00 },
        { image: "./Snacks/mamoul.jpg", title: "Mamoul Date Filled Shortbread Biscuits", price: 30.00 }
    
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


function searchProducts() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var products = document.getElementsByClassName('product');

    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var title = product.getElementsByClassName('product-title')[0].textContent.toLowerCase();

        if (title.indexOf(searchTerm) !== -1) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    }
}

å