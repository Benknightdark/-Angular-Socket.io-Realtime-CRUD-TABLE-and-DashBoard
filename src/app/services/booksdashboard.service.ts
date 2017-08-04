import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs'
import { BooksData } from "app/Models/BooksData";
@Injectable()
export class BooksdashboardService {
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/books'
  constructor(private http: Http) { }
  GetBookData() {
    return this.http.get(this.Host)
    .map(res => res.json())
    .groupBy(data => data.author)


  }
}
