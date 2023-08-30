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
    var temp = localStorage.getItem('ManagerArray');
    localStorage.clear();
    localStorage.setItem('ManagerArray',temp);
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
total.textContent = 'Total Sum:' + totalSum +'$';

let ManagerArray = [];

const buyNowBtn = document.getElementById('buyNowBtn');
buyNowBtn.addEventListener('click', function () {
    if(storedProducts.length > 0){
    $('#buyNowBtn').hide();
    const purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts')) || [];
    ManagerArray = JSON.parse(localStorage.getItem('ManagerArray')) || [];
    storedProducts.forEach(purchasedProduct => {
        localStorage.removeItem(purchasedProduct._id);
        purchasedProducts.push(purchasedProduct);
        ManagerArray.push(purchasedProduct);
    });

    localStorage.setItem('purchasedProducts', JSON.stringify(purchasedProducts));
    localStorage.setItem('ManagerArray', JSON.stringify(ManagerArray));

    const totalAmountDisplay = document.getElementById('totalPrice');
    totalAmountDisplay.style.display = 'none';

    // Calculate total quantity and total amount
    const orderQuantity = storedProducts.length;
    let orderTotal = 0;
    storedProducts.forEach(product => {
        orderTotal += product.price;
    });

    // Update the order summary form with calculated values
    const orderQuantityElement = document.getElementById('orderQuantity');
    const orderTotalElement = document.getElementById('orderTotal');
    orderQuantityElement.textContent = orderQuantity;
    orderTotalElement.textContent = orderTotal.toFixed(2);

    // Show the order summary form
    const orderSummaryForm = document.getElementById('orderSummaryForm');
    orderSummaryForm.style.display = 'block';

    // Hide the products container
    productsContainer.style.display = 'none';

    // Scroll to the order summary form
    orderSummaryForm.scrollIntoView({ behavior: 'smooth' });
}
else{
    alert('There is no products in your shopping cart');
}
});