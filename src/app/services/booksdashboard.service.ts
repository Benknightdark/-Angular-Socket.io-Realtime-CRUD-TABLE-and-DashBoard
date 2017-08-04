import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs'
import { BooksData } from 'app/Models/BooksData';


@Injectable()
export class BooksdashboardService {
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/books'

  constructor(private http: Http) { }
  GetBookData() {
    return this.http.get(this.Host)
      .map(res => {
        let data = [{ a: 1, b: 10 }, { a: 2, b: 20 }, { a: 1, b: 30 }];

        let r = alasql('SELECT author, SUM(age) AS age FROM ? GROUP BY author', [res.json()]);

        console.log(r); // [{"a":1,"b":40},{"a":2,"b":20}]
        return r//res.json()
      })
  }





}

