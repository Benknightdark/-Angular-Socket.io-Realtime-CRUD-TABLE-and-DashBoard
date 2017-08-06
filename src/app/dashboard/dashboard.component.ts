import { Component, OnInit } from '@angular/core';
import { BooksdashboardService } from "app/services/booksdashboard.service";
import { BooksioService } from "app/services/booksio.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private BooksdashboardService: BooksdashboardService,
    private BookioService: BooksioService
  ) { }

  ngOnInit() {
    this.InitDashBoard();
    this.BookioService.getDelete().subscribe(r => {
      console.log("Get Delete")
      this.InitDashBoard();
    })
    this.BookioService.getCreate().subscribe(r => {
      console.log("Get Create")
      this.InitDashBoard();
    })
    this.BookioService.getEdit().subscribe(r => {
      console.log("Get Edit")
      this.InitDashBoard();
    })
  }
  InitDashBoard() {
    this.BooksdashboardService.GetBookData().subscribe(SeriesData => {
      this.PieChart(SeriesData)
    })
  }
  PieChart(SeriesData) {
    Highcharts.chart('pie', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'author' + ":" + 'age'
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
        name: 'age',
        colorByPoint: true,
        data: SeriesData
      }]
    })
  }

}

