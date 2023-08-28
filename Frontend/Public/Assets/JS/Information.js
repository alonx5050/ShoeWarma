
$('.settingsIcon').hide();
$('.infoIcon').hide();
$('.bagIcon').hide();
$('.logoutIcon').hide();

const user = JSON.parse(localStorage.getItem('user'));
if(user && user.isLoggedIn){
    $('.loginIcon').hide();
    if(user.isAdmin){
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

$('.logoutIcon').click(function (){ 
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


