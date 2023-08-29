$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();
$('#colorGraph').hide();
$('#typeGraph').hide();
const user = JSON.parse(localStorage.getItem('user'));
if (user && user.isLoggedIn) {
    $('.loginIcon').hide();
    if (user.isAdmin) {
        $('.logoutIcon').show();
        $('.infoIcon').show();
        $('.settingsIcon').show();
        $('#colorGraph').show();
        $('#typeGraph').show();
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

});


var colorData = {
    labels: ['Red', 'Blue', 'Green', 'Yellow'],
    datasets: [{
        data: [25, 30, 20, 15],
        backgroundColor: ['#EC120F', '#3366FF', '#0FE34C ', '#FFC300']
    }]
};

var typeData = {
    labels: ['Nike', 'Adidas', 'New Balance', 'Puma'],
    datasets: [{
        data: [40, 25, 15, 20],
        backgroundColor: ['#030805', '#C7EA02', '#C8C2BC ', '#F98203']
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
    const ordersHistory = document.getElementById('ordersHistory');
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