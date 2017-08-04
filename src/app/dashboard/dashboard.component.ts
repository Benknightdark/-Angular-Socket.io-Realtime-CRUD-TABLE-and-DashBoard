import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
      Highcharts.stockChart('container', {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'AAPL Stock Price'
        },
        series: [{
          name: 'AAPL',
          data: data,
          type: 'column',
          tooltip: {
            valueDecimals: 2
          }
        }]
      });
    });

  }

}
