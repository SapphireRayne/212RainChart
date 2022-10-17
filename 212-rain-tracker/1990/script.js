// Chart.defaults.global.elements.rectangle.backgroundColor = '#FF0000';

var bar_ctx = document.getElementById('bar-chart').getContext('2d');

var blue_white_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
blue_white_gradient.addColorStop(0, 'white');
blue_white_gradient.addColorStop(1, 'blue');

var bar_chart = new Chart(bar_ctx, {
    type: 'bar',
    data: {
        labels: ["1900", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"],
        datasets: [{
            label: 'yearly mm average',
            data: [12, 19, 3, 8, 14, 5, 2, 6, 12, 18, 6],
						backgroundColor: blue_white_gradient,
						hoverBackgroundColor: blue_white_gradient,
						hoverBorderWidth: 2,
						hoverBorderColor: 'blue'
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
