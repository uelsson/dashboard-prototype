var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
	// The type of chart we want to create
	type: 'bar',

	// The data for our dataset
	data: {
		labels: ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Out', 'Nov', 'Dec', 'Jan', 'Feb'],
		datasets: [{
			label: 'Ganhos',
			backgroundColor: 'rgb(101, 115, 214, 0.1)',
			borderColor: 'rgb(101, 115, 214)',
			data: [250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250, 250],
		
		},{
			label: 'Ganhos',
			backgroundColor: 'rgb(101, 115, 214, 0.1)',
			borderColor: 'rgb(101, 115, 214)',
			data: [150, 200, 130, 200, 90, 190, 140, 120, 130, 100, 150, 230],
			fill : true,
			lineTension: 0,
			type:'line'
		}]
	},

	// Configuration options go here
	options: {
		scales: {
			xAxes: [{
				gridLines: {
					color: "rgba(0, 0, 0, 0)"
				},
				ticks : {
					maxTicksLimit: 7
				}
			}],
			yAxes: [{
				gridLines: {
					color: "rgba(0, 0, 0, 0)"
				},
				ticks: {
					stepSize: 50,
					 // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return '$' + value;
                    }
				}
			}]
		},
		
		legend: {
			display: false
		},

		tooltips: {
			callbacks: {
				label: function(tooltipItem, data) {
				  var dataset = data.datasets[tooltipItem.datasetIndex];
				 
				  var currentValue = dataset.data[tooltipItem.index];

				  return "$" + currentValue;
				}
			}
		},
		maintainAspectRatio : false
	}
});