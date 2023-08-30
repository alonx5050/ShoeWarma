import { getAllUsers } from "./ajax/getAllUsers.js";
import { renderUsers } from "./ajax/renderUsers.js";

const user = JSON.parse(localStorage.getItem('user'));
if (user && user.isLoggedIn) {
    $('.loginIcon').hide();
    if (user.isAdmin) {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.settingsIcon').show();
    }
}

$('.logoutIcon').click(function () {
    var temp = localStorage.getItem('ManagerArray');
    localStorage.clear();
    localStorage.setItem('ManagerArray', temp);
});

$(document).ready(function () {
    // Attach an event listener to the "Show Users" button
    $('#showUsersButton').click(async function () {
        try {
            const users = await getAllUsers();
            renderUsers(users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const deleteProductsButton = document.getElementById('showProductsButton');
    const productsContainer = document.getElementById('container');
    productsContainer.className = 'row row-cols-4 g-4';

    deleteProductsButton.addEventListener('click', function () {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(productsResponse => {
                const allProducts = productsResponse.data;
                renderFilteredProducts(allProducts, productsContainer);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    });

    function renderFilteredProducts(products, container) {
        container.innerHTML = '';

        products.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    }

    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.className = 'productCard col card h-100 card-body';
        productCard.id = product.name;

        const image = document.createElement('img');
        image.src = 'Assets/Images/' + product.frontImage;
        image.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const brand = document.createElement('p');
        brand.textContent = `Brand: ${product.brand}`;

        const color = document.createElement('p');
        color.textContent = `Color: ${product.color}`;

        const size = document.createElement('p');
        size.textContent = `Size: ${product.size}`;

        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`;

        const deleteButton = document.createElement('button');
        deleteButton.className = 'cardButton btn btn-outline-danger';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteProduct(product._id, productCard);
        });

        productCard.appendChild(image);
        productCard.appendChild(productName);
        productCard.appendChild(brand);
        productCard.appendChild(color);
        productCard.appendChild(price);
        productCard.appendChild(size);
        productCard.appendChild(deleteButton);

        return productCard;
    }

    function deleteProduct(productId, cardElement) {
        fetch(`http://localhost:3000/products/${productId}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    cardElement.remove();
                } else {
                    console.error('Error deleting product:', response.statusText);
                }
            })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    }
});
