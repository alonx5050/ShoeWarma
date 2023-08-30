$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();
$('#statisticsHeader').hide();
$('#colorGraph').hide();
$('#typeGraph').hide();
$('.userOrdersHeader').hide();
$('.managerOrdersHeader').hide();
$('#userOrdersHistory').hide();
$('#managerOrdersHistory').hide();


const user = JSON.parse(localStorage.getItem('user'));
if (user && user.isLoggedIn) {
    $('.loginIcon').hide();
    if (user.isAdmin) {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.settingsIcon').show();
        $('#statisticsHeader').show();
        $('#colorGraph').show();
        $('#typeGraph').show();
        $('.managerOrdersHeader').show();
        $('#managerOrdersHistory').show();
    }
    else {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.bagIcon').show();
        $('.userOrdersHeader').show();
        $('#userOrdersHistory').show();
    }
}

$('.logoutIcon').click(function () {
    //e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('purchasedProducts');
});


const managerData = JSON.parse(localStorage.getItem('ManagerArray'));
const colorCounts = {};

managerData.forEach(product => {
    if (colorCounts.hasOwnProperty(product.color)) {
        colorCounts[product.color]++;
    } else {
        colorCounts[product.color] = 1;
    }
});

var colorData = {
    labels: Object.keys(colorCounts),
    datasets: [{
        data: Object.values(colorCounts),
        backgroundColor: ['#228B22', '#FFD700', '#1E90FF', '#B22222', '#FFFAF0', '#000000']
    }]
};


const brandCounts = {};

managerData.forEach(product => {
    if (brandCounts.hasOwnProperty(product.brand)) {
        brandCounts[product.brand]++;
    } else {
        brandCounts[product.brand] = 1;
    }
});

var typeData = {
    labels: Object.keys(brandCounts),
    datasets: [{
        data: Object.values(brandCounts),
        backgroundColor: ['#030805', '#C7EA02', '#C8C2BC ', '#F98203'] // You can update this array of colors if needed
    }]
};


var options = {
    responsive: true,
    maintainAspectRatio: false
};

var colorGraph = new Chart(document.getElementById('colorGraph').getContext('2d'), {
    type: 'doughnut',
    data: colorData,
    options: options
});

var typeGraph = new Chart(document.getElementById('typeGraph').getContext('2d'), {
    type: 'doughnut',
    data: typeData,
    options: options
});




//////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", function () {

    const purchasedProducts = JSON.parse(localStorage.getItem('purchasedProducts'));
    const ordersHistory = document.getElementById('userOrdersHistory');
    ordersHistory.className = 'row row-cols-4 g-4';


    if (purchasedProducts && purchasedProducts.length > 0) {
        purchasedProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'purchasedProductCard col card h-100 card-body';


            const image = document.createElement('img');
            image.src = 'Assets/Images/' + product.frontImage;
            image.alt = product.name;


            const productName = document.createElement('h4');
            productName.textContent = product.name;

            const price = document.createElement('p');
            price.textContent = `Price: $${product.price}`;

            // Append elements to the product card
            productCard.appendChild(image);
            productCard.appendChild(productName);
            productCard.appendChild(price);


            // Append the product card to the orders history section
            ordersHistory.appendChild(productCard);

        });
    } else {
        const noProductsMessage = document.createElement('p');
        noProductsMessage.textContent = "No purchased products available.";
        ordersHistory.appendChild(noProductsMessage);
    }
});





////////////////////////////////////



document.addEventListener("DOMContentLoaded", function () {

    const ManagerArray = JSON.parse(localStorage.getItem('ManagerArray'));
    const ordersHistory = document.getElementById('managerOrdersHistory');
    ordersHistory.className = 'row row-cols-4 g-4';


    if (ManagerArray && ManagerArray.length > 0) {
        ManagerArray.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'purchasedProductCard col card h-100 card-body';


            const image = document.createElement('img');
            image.src = 'Assets/Images/' + product.frontImage;
            image.alt = product.name;


            const productName = document.createElement('h4');
            productName.textContent = product.name;

            const price = document.createElement('p');
            price.textContent = `Price: $${product.price}`;

            // Append elements to the product card
            productCard.appendChild(image);
            productCard.appendChild(productName);
            productCard.appendChild(price);


            // Append the product card to the orders history section
            ordersHistory.appendChild(productCard);

        });
    } else {
        const noProductsMessage = document.createElement('p');
        noProductsMessage.textContent = "No purchased products available.";
        ordersHistory.appendChild(noProductsMessage);
    }
});