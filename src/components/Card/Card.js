import React from 'react';
import classes from './Card.module.css';
import {Line} from 'react-chartjs-2';

const graphOptions = {
    legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
        displayColors:false
      },
      scales: {
        yAxes: [
          {
            id: 'y-0',
            display: false,
          },
        ],
        xAxes: [
          {
            id: 'x-0',
            display: false,
          },
        ],
      },
      responsive:true,
      maintainAspectRatio:false
}

function generateGraphDataSet(dataset) {
    return {
        labels: Array(dataset.length).fill(0),
        datasets: [
            {
            fill:false,
            backgroundColor: 'rgba(0,191,191,1)',
            borderColor: 'rgba(63,191,191,1)',
            borderWidth: 2,
            pointRadius:0,
            data: dataset
            }
        ]
    }
}

const card = (props) => {
    return (
        <div className={classes.Card}>
            <div className={classes.CardHeader}>
                <div>
                    {props.coinName}
                </div>
                <div>
                    ${props.currentPrice}
                </div>
            </div>
            <div className={classes.CardHeader}>
                <div>
                    <img src={props.image} width="20" height="20"/> {props.symbol.toUpperCase()}
                </div>
                <div>
                    {props.priceChange24hPercentage.toFixed(2)} %
                </div>
            </div>
            <div className={classes.CardContent}>
               <Line data={() => generateGraphDataSet(props.sparkline7Days)} options={graphOptions}/>
            </div>
        </div>
    )
}

export default card;