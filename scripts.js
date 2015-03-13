// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	var bigArray = [];

	for (var i = 0; i < ebolaData.length; i++) {

		var smallerArray = [];

		var myData = ebolaData[i];

		smallerArray.push(myData.date);
		smallerArray.push(myData.cases);
		smallerArray.push(myData.deaths);

		bigArray.push(smallerArray);

	}//end of for loop

	function drawChart() {

		var data = new google.visualization.DataTable();
		data.addColumn('string', 'Date');
		data.addColumn('number', 'Cases');
		data.addColumn('number', 'Deaths');

		data.addColumn({
			type : 'string',
			role : 'style'
		})

		data.addRows(bigArray);

		var numberFormatter = new google.visualization.NumberFormat({
			fractionDigits : 0
		});
		numberFormatter.format(data, 1);

		var options = {
			width : 800,
			height : 500,
			hAxis : {
				title : 'Date'
			},
			vAxis : {
				title : 'Incidences'
			},
			series : {
				1 : {
					curveType : 'function'
				}
			}
		};

		var chart = new google.visualization.LineChart(document.getElementById('ex2'));

		chart.draw(data, options);
	}

}