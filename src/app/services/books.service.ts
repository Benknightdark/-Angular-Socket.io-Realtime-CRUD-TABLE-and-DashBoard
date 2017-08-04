import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs'
import { BooksData } from "app/Models/BooksData";
@Injectable()
export class BooksService {
  JSONoptions = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json;charset=utf-8' }) });
  Host = 'http://localhost:3000/books'
  constructor(private http: Http) { }
  GetBookData(): Observable<BooksData> {
    return this.http.get(this.Host).map(res => res.json())
  }
  DeleteBookData(id) {
    return this.http.delete(this.Host + "/" + id)//.map(res => res.json())
  }
  GetBookDataDetail(id) {
    return this.http.get(this.Host + "/" + id).map(res => res.json())
  }
  CreateBookData(data) {
    return this.http.post(this.Host, data, this.JSONoptions).map(res => res.json())
  }
  UpdateBookData(data: BooksData) {
    return this.http.put(this.Host + "/" + data.id, data, this.JSONoptions).map(res => res.json())
  }
}
