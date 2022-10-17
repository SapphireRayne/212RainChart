// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

var bar_ctx = document.getElementById('bar-chart').getContext('2d');

var lightblue_white_gradient = bar_ctx.createLinearGradient(0, 0, 0, 1000);
lightblue_white_gradient.addColorStop(0, 'white');
lightblue_white_gradient.addColorStop(1, 'lightblue');

var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990"],
        datasets: [{
            label: 'yearly mm average',
            data: [12, 19, 3, 8, 14, 5, 2, 6, 12, 18, 6],
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
