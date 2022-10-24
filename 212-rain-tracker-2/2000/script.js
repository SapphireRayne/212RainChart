// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

var bar_ctx = document.getElementById('bar-chart').getContext('2d');

var lightblue_white_gradient = bar_ctx.createLinearGradient(0, 0, 0, 1000);
lightblue_white_gradient.addColorStop(0, 'white');
lightblue_white_gradient.addColorStop(1, 'lightblue');

var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",],
        datasets: [{
            label: 'Monthly mm Average',
            data: [65.14, 72.20, 91.16, 80.06, 120.80, 143.94, 118.22, 106.60, 89.08, 96.14, 93.77, 74.02,],
						backgroundColor: lightblue_white_gradient,
						hoverBackgroundColor: lightblue_white_gradient,
						hoverBorderWidth: 4,
						hoverBorderColor: 'white'
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
