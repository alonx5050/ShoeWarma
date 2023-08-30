$(document).ready(function () {
    const selectedFilterOptions = {};

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
        } else {
            $('.logoutIcon').show();
            $('.infoIcon').show();
            $('.bagIcon').show();
        }
    }

    $('.logoutIcon').click(function () {
        // localStorage.removeItem('user');
        // localStorage.removeItem('purchasedProducts');
        var temp = localStorage.getItem('ManagerArray');
        localStorage.clear();
        localStorage.setItem('ManagerArray',temp);
    });

    let allProducts = [];

    fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(productsResponse => {
            allProducts = productsResponse.data;
            renderFilteredProducts(allProducts);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    const productsContainer = document.getElementById('productsContainer');
    productsContainer.className = 'row row-cols-4 g-4';

    function renderFilteredProducts(products) {
        productsContainer.innerHTML = '';

        products.forEach(product => {
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

            const button = document.createElement('button');
            button.className = 'cardButton btn btn-outline-primary';
            button.addEventListener('click', function () {
                if (localStorage.length > 0) {
                    localStorage.setItem(product._id, JSON.stringify(product));
                }
            });
            button.textContent = 'Add to shopping cart';

            productCard.appendChild(image);
            productCard.appendChild(productName);
            productCard.appendChild(brand);
            productCard.appendChild(color);
            productCard.appendChild(price);
            productCard.appendChild(size);
            productCard.appendChild(button);

            productsContainer.appendChild(productCard);
        });
    }

    $('.dropdown-menu input[type="checkbox"]').on('change', function () {
        const filterType = $(this).closest('.dropdown').find('.btn-dark.dropdown-toggle').text().trim();

        if (!selectedFilterOptions[filterType]) {
            selectedFilterOptions[filterType] = [];
        }

        selectedFilterOptions[filterType] = [];
        $(this).closest('.dropdown').find('input[type="checkbox"]:checked').each(function () {
            selectedFilterOptions[filterType].push($(this).parent().text().trim());
        });

        const filteredProducts = applyFilters(allProducts, selectedFilterOptions);
        renderFilteredProducts(filteredProducts);
    });

    /////////////////////////// Search ///////////////////////////
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Event listener for search button click
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm !== '') {
            const filteredProducts = allProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
            renderFilteredProducts(filteredProducts);
        } else {
            renderFilteredProducts(allProducts);
        }
    });



    /////////////////////////// Search ///////////////////////////



    function applyFilters(products, filters) {
        return products.filter(product => {
            for (const filterType in filters) {
                if (filters[filterType].length === 0) continue;

                if (filterType === 'Brand' && !filters[filterType].includes(product.brand)) {
                    return false;
                }
                if (filterType === 'Color' && !filters[filterType].includes(product.color)) {
                    return false;
                }
                if (filterType === 'Size' && !filters[filterType].includes('' + product.size)) {
                    return false;
                }
                if (filterType === 'Price' && !applyPriceFilter(product.price, filters[filterType])) {
                    return false;
                }
            }
            return true;
        });
    }

    function applyPriceFilter(productPrice, selectedPriceRanges) {
        if (selectedPriceRanges.includes('Under 259$')) {
            return productPrice <= 259;
        } else if (selectedPriceRanges.includes('259$ - 519$')) {
            return productPrice >= 259 && productPrice <= 519;
        }
        else if (selectedPriceRanges.includes('519$ - 709$')) {
            return productPrice >= 519 && productPrice <= 709;
        }
        else if (selectedPriceRanges.includes('Over 709$')) {
            return productPrice >= 709;
        }
    }

    $(document).on('click', '.dropdown-menu', e => e.stopPropagation());
});