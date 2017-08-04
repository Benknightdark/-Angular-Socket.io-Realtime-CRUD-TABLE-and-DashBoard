import { Component, OnInit } from '@angular/core';
import { BooksdashboardService } from "app/services/booksdashboard.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private BooksdashboardService:BooksdashboardService) { }

  ngOnInit() {
    this.BooksdashboardService.GetBookData().subscribe(a=>console.log(a))
    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {
      console.log(data)
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
    Highcharts.chart('pie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Browser market shares January, 2015 to May, 2015'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
            style: {
              color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
            }
          }
        }
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Microsoft Internet Explorer',
          y: 56.33
        }, {
          name: 'Chrome',
          y: 24.03,
          sliced: true,
          selected: true
        }, {
          name: 'Firefox',
          y: 10.38
        }, {
          name: 'Safari',
          y: 4.77
        }, {
          name: 'Opera',
          y: 0.91
        }, {
          name: 'Proprietary or Undetectable',
          y: 0.2
        }]
      }]
    });
  }

}
