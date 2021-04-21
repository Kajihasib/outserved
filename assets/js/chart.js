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

	// chart 1
	let revenue_options = {
		series: [
			{
				name: 'previous',
				data: [987, 574, 901, 365, 505, 745, 671, 364, 287, 354, 320, 987],
			},
			{
				name: 'current',
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
		colors: ['#ffc20d', '#2ecc71'],
		fill: {
			type: 'gradient',
			colors: ['#ffc20d', '#2ecc71'],

			gradient: {
				shadeIntensity: 1,
				opacityFrom: 0.7,
				opacityTo: 0.9,
				stops: [50, 100],
			},
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
	let revenue_chart = new ApexCharts(document.querySelector('#revenue'), revenue_options);
	revenue_chart.render();

	// visitor_device
	var visitor_device_options = {
		series: [40, 50, 10],
		chart: {
			height: 230,
			type: 'pie',
		},
		legend: {
			position: 'bottom',
			show: false,
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
		plotOptions: {
			pie: {
				customScale: 0.9,
				donut: {
					size: '90%',
				},
			},
		},
		colors: ['#ffc20d', '#2ecc71', '#673ab7'],
        fill: {
			type: 'gradient',
		
		},
		dataLabels: {
			enabled: false,
		},
		labels: ['Mobile', 'Desktop', 'Tablet'],
	};
	var visitor_device_chart = new ApexCharts(document.querySelector('#visitor_device'), visitor_device_options);
	visitor_device_chart.render();
});
