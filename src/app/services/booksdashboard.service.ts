import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/map'
import { BooksData } from 'app/Models/BooksData';


@Injectable()
export class BooksdashboardService {
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/books'
  constructor(private http: Http) { }
  GetBookData() {
    return this.http.get(this.Host)
      .map(res => {
        return alasql('SELECT author AS name, SUM(age) AS y FROM ? GROUP BY author', [res.json()])
      })
  }
}

