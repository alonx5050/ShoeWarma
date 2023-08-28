$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();

const user = JSON.parse(localStorage.getItem('user'));
if (user && user.isLoggedIn) {
    $('.loginIcon').hide();
    if (user.isAdmin) {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.settingsIcon').show();
    }
    else {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.bagIcon').show();
    }
}

$('.logoutIcon').click(function () {
    //e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('product');

});

// Render products
const productsContainer = document.getElementById('productsContainer');

fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(productsResponse => {
        const products = productsResponse.data; // Access products from the "data" property

        // Loop through each product and create a product card for it
        products.forEach(product => {

            const productCard = document.createElement('div');// Apply CSS styles to style this class 
            productCard.className = 'productCard';

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

            const image = document.createElement('img'); // Create an <img> element for the image
            image.src = 'Assets/Images/' + product.frontImage; // Set the image source
            image.alt = product.name; // Set alt text for accessibility

            // Append the created elements to the product card
            productCard.appendChild(productName);
            productCard.appendChild(brand);
            productCard.appendChild(color);
            productCard.appendChild(price);
            productCard.appendChild(size);
            productCard.appendChild(image);

            // Append the product card to the products container
            productsContainer.appendChild(productCard);
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });



