import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { Box } from 'adminlte-2-react';
import uuidv4 from 'uuid';

export default class RentalPie extends Component {
    state = {}

    pieData = {
        labels: ['Users', 'Whole Books', 'Borrowed Books', 'Remain Books'],
        datasets: [{
            data: [10, 30, 20, 10],
            backgroundColor: ['red', '#00c0ef', '#f39c12', '#00a65a'],
        }]
    }

    pieOptions = {
        segmentShowStroke: true,
        segmentStrokeColor: '#fff',
        segmentStrokeWidth: 1,
        cutoutPercentage: 30, // This is 0 for Pie charts
        animationSteps: 100,
        animationEasing: 'easeOutBounce',
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        legend:
        {
            display: true,
        },
        legendCallback: (chart) => {
            const mapColor = (color) => {
                switch (color) {
                    case '#f56954':
                        return 'red';
                    case '#00a65a':
                        return 'green';
                    case '#f39c12':
                        return 'yellow';
                    case '#00c0ef':
                        return 'aqua';
                    case '#3c8dbc':
                        return 'light-blue';
                    case '#d2d6de':
                        return 'gray';
                    default:
                        return 'red';
                }
            };
            // const { backgroundColor } = chart.data.datasets[0];
            // return (
            //     <ul className="chart-legend clearfix">
            //         {chart.data.labels.map((p, i) => (
            //             <li key={uuidv4()}>
            //                 <i className={`fa fa-circle-o text-${mapColor(backgroundColor[i])}`} />
            //                 {' '}
            //                 {p}
            //             </li>
            //         ))}
            //     </ul>
            // );
        },
        tooltips: {
            displayColors: false,
            callbacks: {
                label(tooltipItem, data) {
                    const { datasets, labels } = data;
                    const { index } = tooltipItem;
                    return `${labels[index]} ${datasets[0].data[index]}`;
                },
            },
        },
    };

    render() {
        return (
            <>
                <Box>
                    <Pie
                        key='RentalPie'
                        data={this.pieData}
                        options={this.pieOptions}
                        height={70}
                    />
                </Box>
            </>

        );
    }
} 