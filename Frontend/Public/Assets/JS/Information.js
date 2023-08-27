
var colorData = {
    labels: ['Red', 'Blue', 'Green', 'Yellow'],
    datasets: [{
        data: [25, 30, 20, 15],
        backgroundColor: ['#EC120F', '#3366FF', '#0FE34C ', '#FFC300']
    }]
};

var typeData = {
    labels: ['Nike', 'Adidas', 'New Balanca', 'Puma'],
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
