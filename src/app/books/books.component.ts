import { Router, Route } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from "app/services/books.service";
import { Observable } from "rxjs";
import { BooksData } from "app/Models/BooksData";
import { BooksioService } from "app/services/booksio.service";
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  BooksData: Observable<BooksData>;
  constructor(private BookService: BooksService, private router: Router, private BookioService: BooksioService) { }

  ngOnInit() {
    this.initTable();
    this.BookioService.getDelete().subscribe(r => {
      console.log("Get Delete")
      this.initTable();
    })
    this.BookioService.getCreate().subscribe(r => {
      console.log("Get Create")
      this.initTable();
    })
    this.BookioService.getEdit().subscribe(r => {
      console.log("Get Edit")
      this.initTable();
    })

  }
  click(action, id) {
    switch (action) {
      case "delete":
        const r = confirm('確定刪除')
        if (r) {
          this.BookService.DeleteBookData(id).subscribe(a => {
            console.log("Send Delete")
            this.BookioService.sendDelete(a.status)
          })
        }
        break;
      case "detail":
        this.router.navigate(['booksform', 'detail', id])
        break;
      case "edit":
        this.router.navigate(['booksform', 'edit', id])
        break;
      default:
        break;
    }
  }
  initTable() {
    this.BooksData = this.BookService.GetBookData()//.subscribe(s => console.log(s));
  }

}
