let pieChart = [
    {
        value : 30,
        color : '#FFA3BA',
    },
    {
        value : 50,
        color : '#1d365f',
    },
    {
        value : 100,
        color : '#f9e03b',
    }
];

let myChart = new Chart(document.getElementById('pie').getContext('2d')).Pie(pieChart);