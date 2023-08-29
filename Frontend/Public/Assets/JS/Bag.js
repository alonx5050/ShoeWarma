$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();

const user = JSON.parse(localStorage.getItem('user'));
if (user && user.isLoggedIn) {
    $('.loginIcon').hide();
    if (!user.isAdmin) {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.bagIcon').show();
    }
}

$('.logoutIcon').click(function () {
    localStorage.clear();
});






///////////////////////////////


function getStoredProducts() {
    const storedProducts = [];

    // Loop through localStorage and retrieve stored products
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const storedProductString = localStorage.getItem(key);
        if (!storedProductString.startsWith('{"_')) continue;
        const storedProduct = JSON.parse(storedProductString);
        storedProducts.push(storedProduct);
    }

    return storedProducts;
}


const productsContainer = document.getElementById('productsContainer');
productsContainer.className = 'row row-cols-4 g-4';
const storedProducts = getStoredProducts();

let totalSum = 0;


storedProducts.forEach(product => {

    const productCard = document.createElement('div');// Apply CSS styles to style this class 
    productCard.className = 'productCard col card h-100 card-body';
    productCard.id = product.name;

    const image = document.createElement('img'); // Create an <img> element for the image
    image.src = 'Assets/Images/' + product.frontImage; // Set the image source
    image.alt = product.name; // Set alt text for accessibility

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const brand = document.createElement('p');
    brand.textContent = `Brand: ${product.brand}`;

    const color = document.createElement('p');
    color.textContent = `Color: ${product.color}`;

    const size = document.createElement('p'); // Create a new <p> element for size
    size.textContent = `Size: ${product.size}`; // Set the size tex

    const price = document.createElement('p');
    price.textContent = `Price: $${product.price}`;

    const button = document.createElement('button');
    button.className = 'cardButton btn btn-outline-danger';
    button.addEventListener('click', function () {
        localStorage.removeItem(product._id, JSON.stringify(product));
        window.location.href = "Bag.html";
    })
    button.textContent = 'Delete';


    totalSum += product.price;

    // Append the created elements to the product card
    productCard.appendChild(image);
    productCard.appendChild(productName);
    productCard.appendChild(brand);
    productCard.appendChild(color);
    productCard.appendChild(price);
    productCard.appendChild(size);
    productCard.appendChild(button);

    // Append the product card to the products container
    productsContainer.appendChild(productCard);
});



console.log('Total Sum of Product Prices:', totalSum);
const total = document.getElementById('totalPrice');
total.textContent = 'Total sum ' + totalSum;


const buyNowBtn = document.getElementById('buyNowBtn');
buyNowBtn.addEventListener('click', function () {
    const purchasedProducts = [];

    storedProducts.forEach(purchasedProduct => {
        localStorage.removeItem(purchasedProduct._id);
        purchasedProducts.push(purchasedProduct);

    });
    localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));

    window.location.href = "Homepage.html";
});