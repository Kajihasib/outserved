$(function () {
	'use strict';
	// chart 1
	let chart1_options = {
		series: [
			{
				name: 'Audience',
				data: [427, 613, 901, 257, 505, 414, 671, 160, 440, 450, 320, 245],
			},
		],
		xaxis: {
			categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		chart: {
			type: 'area',
			height: 250,
			toolbar: {
				show: false,
			},
			zoom: {
				enabled: true,
			},
			dropShadow: {
				enabled: true,
				top: 3,
				left: 14,
				blur: 4,
				opacity: 0.12,
				color: '#673ab7',
			},
			sparkline: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			horizontalAlign: 'center',
		},
		markers: {
			size: 0,
			colors: ['#673ab7'],
			strokeColors: '#fff',
			strokeWidth: 2,
			hover: {
				size: 5,
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 3,
			curve: 'smooth',
		},
		colors: ['#673ab7'],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1,
		},
		grid: {
			show: true,
			borderColor: '#ededed',
			strokeDashArray: 4,
		},
		tooltip: {
			theme: 'dark',

			x: {
				show: true,
			},

			marker: {
				show: true,
			},
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						height: 250,
					},
					plotOptions: {
						bar: {
							columnWidth: '30%',
						},
					},
				},
			},
		],
	};
	let chart1 = new ApexCharts(document.querySelector('#chart1'), chart1_options);
	chart1.render();

	// chart 2
	let chart2_options = {
		series: [
			{
				name: 'New Visitors',
				data: [94, 55, 57, 56, 61, 58, 63, 60, 66, 75],
			},
			{
				name: 'Returning Visitors',
				data: [-76, -85, -101, -98, -87, -105, -91, -114, -94, -105],
			},
		],
		chart: {
			foreColor: '#000',
			type: 'bar',
			height: 250,
			stacked: true,
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '12%',
				endingShape: 'rounded',
			},
		},
		legend: {
			horizontalAlign: 'center',
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		colors: ['#6236af', '#f02769'],
		xaxis: {
			categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		},
		fill: {
			opacity: 1,
		},
		grid: {
			show: true,
			borderColor: '#ededed',
			strokeDashArray: 4,
		},
		responsive: [
			{
				breakpoint: 480,
				options: {
					chart: {
						height: 250,
					},
					plotOptions: {
						bar: {
							columnWidth: '30%',
						},
					},
				},
			},
		],
	};
	let chart2 = new ApexCharts(document.querySelector('#chart2'), chart2_options);
	chart2.render();
	// chart 5
	// var options = {
	// 	series: [25, 65, 10],
	// 	chart: {
	// 		height: 240,
	// 		type: 'donut',
	// 	},
	// 	legend: {
	// 		position: 'bottom',
	// 		show: false,
	// 	},
	// 	plotOptions: {
	// 		pie: {
	// 			// customScale: 0.8,
	// 			donut: {
	// 				size: '80%',
	// 			},
	// 		},
	// 	},
	// 	colors: ['#f02769', '#673ab7', '#ffc107'],
	// 	dataLabels: {
	// 		enabled: false,
	// 	},
	// 	labels: ['Mobile', 'Desktop', 'Tablet'],
	// 	responsive: [
	// 		{
	// 			breakpoint: 480,
	// 			options: {
	// 				chart: {
	// 					height: 200,
	// 				},
	// 				legend: {
	// 					position: 'bottom',
	// 				},
	// 			},
	// 		},
	// 	],
	// };
	// var chart = new ApexCharts(document.querySelector('#chart5'), options);
	// chart.render();
	// // chart 5
	// var options = {
	// 	series: [25, 65, 10],
	// 	chart: {
	// 		height: 360,
	// 		type: 'pie',
	// 	},
	// 	legend: {
	// 		position: 'bottom',
	// 		show: true,
	// 	},
	// 	plotOptions: {
	// 		pie: {
	// 			customScale: 0.9,
	// 			donut: {
	// 				size: '80%',
	// 			},
	// 		},
	// 	},
	// 	colors: ['#198fed', '#673ab7', '#ffc107'],
	// 	dataLabels: {
	// 		enabled: true,
	// 	},
	// 	labels: ['Male', 'Female', 'Others'],
	// 	responsive: [
	// 		{
	// 			breakpoint: 480,
	// 			options: {
	// 				chart: {
	// 					height: 360,
	// 				},
	// 				legend: {
	// 					position: 'bottom',
	// 				},
	// 			},
	// 		},
	// 	],
	// };
	// var chart = new ApexCharts(document.querySelector('#chart6'), options);
	// chart.render();
});
