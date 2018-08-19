import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { DashboardService } from './dashboard.service';
import { log } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart = []; // This will hold our chart info
  myDoughnutChart = [];
  myBarChart=[];
  constructor(private service:DashboardService) { }

  ngOnInit() {
    
      let res = this.service.dailyForecast();
      console.log(res);
      let temp_max = res['list'].map(res => res.main.temp_max);
let temp_min = res['list'].map(res => res.main.temp_min);
let alldates = res['list'].map(res => res.dt)

let weatherDates = []
alldates.forEach((res) => {
    let jsdate = new Date(res * 1000)
    weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
})
console.log("weather",weatherDates);
this.chart = new Chart('canvas', {
  type: 'line',
  data: {
    labels: weatherDates,
    datasets: [
      { 
        data: temp_max,
        borderColor: "#3cba9f",
        fill: false
      },
      { 
        data: temp_min,
        borderColor: "#ffcc00",
        fill: false
      },
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true
      }],
    }
  }
});
    // })

    this.myDoughnutChart = new Chart('ctx', {
      type: 'doughnut',
      data: {
        datasets: [{
            data: [50, 20, 10]
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Todays',
            'Yesterday',
            'Day Before Yesterday'
        ]
    },
      options: {
      }
    });

    this.myBarChart = new Chart('bar', {
      type: 'bar',
      data: {
        labels: ['Technology', 'Fun', 'Travel'],
        datasets: [{
            data: [20, 10, 4]
        }]
    },
      options: {
        // scales: {
        //     xAxes: [{
        //         stacked: true
        //     }],
        //     yAxes: [{
        //         stacked: true
        //     }]
        // },
        legend: { display: false }
    }
  });


  }


}
