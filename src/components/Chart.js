import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const chartData = {
    labels: ['Users', 'Whole Books', 'Borrowed Books', 'Remain Books'],
    datasets: [
        {
            label: 'Library State',
            backgroundColor: 'rgba(60,141,188,0.9)',
            strokeColor: 'rgba(60,141,188,0.8)',
            pointColor: '#3b8bba',
            pointStrokeColor: 'rgba(60,141,188,1)',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(60,141,188,1)',
            data: [10, 30, 20, 10],
        },
    ],
};

const chartOptions = {

    // Boolean - If we should show the scale at all
    showScale: true,
    // Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: false,
    // String - Colour of the grid lines
    scaleGridLineColor: 'rgba(0,0,0,.05)',
    // Number - Width of the grid lines
    scaleGridLineWidth: 1,
    // Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    // Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,
    // Number - Tension of the bezier curve between points
    lineTension: 0.3,
    // Number - Radius of each point dot in pixels
    pointRadius: 0,
    // Boolean - Whether to show a stroke for datasets
    datasetStroke: true,
    // Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,
    // Boolean - Whether to fill the dataset with a color
    datasetFill: true,
    legend: {
        display: true,
    },
    // String - A leg,end template
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    // Boolean - whether to make the chart responsive to window resizing
    responsive: true,
};

class RentalChart extends Component {
    state = {}
    render() {
        return (
            <Line ref={(c) => { this.chartRef = c; }} data={chartData} options={chartOptions} height={180} />
        );
    }
}

export default RentalChart;
