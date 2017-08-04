import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BooksService } from "app/services/books.service";
import { Observable } from "rxjs";
import 'rxjs'
import { BooksData } from 'app/Models/BooksData';
import { BooksioService } from "app/services/booksio.service";
@Component({
  selector: 'app-booksform',
  templateUrl: './booksform.component.html',
  styleUrls: ['./booksform.component.css']
})
export class BooksformComponent implements OnInit {
  BooksData: BooksData
  formName = "";
  ActionName = "";
  ButtonName=""
  DisableInput:boolean
  Showform: boolean
  constructor(private BookService: BooksService ,
     private router: Router ,
     private route: ActivatedRoute ,
     private BookioService: BooksioService) { }

  ngOnInit() {
    this.route.url.subscribe(r => {
      this.Showform = false;
      this.ActionName = r[1].path
      switch (this.ActionName) {
        case 'edit':
          this.formName = "編輯頁面"
          this.DisableInput=false;
          this.ButtonName="更新資料"
          this.BookService.GetBookDataDetail(r[2].path).subscribe(r => {
            this.BooksData = r;
            this.Showform = true;
          })
          break;
        case 'detail':
          this.formName = "明細頁面"
          this.ButtonName="編輯資料";
          this.DisableInput=true;
          this.BookService.GetBookDataDetail(r[2].path).subscribe(r => {
            this.BooksData = r;
            this.Showform = true;
          })
          break;
        case 'create':
          this.formName = "建立資料頁面"
           this.ButtonName="新增資料";
           this.DisableInput=false;
          this.BooksData = {
            id: "",
            author: "",
            book: "",
            place: "",
            price: 0,
            count: 0,
            age: 0
          };
          this.Showform = true;

          break;

        default:
          //   this.router.navigate(['/books']);
          break;
      }
    })

  }
  onSubmit(f) {
    switch (this.ActionName) {
      case 'edit':
        console.log(this.ActionName)
         console.log(f)
         console.log(this.BooksData)
         this.BookService.UpdateBookData(this.BooksData).subscribe(r=>{
           this.BookioService.sendEdit(r)
           this.router.navigate(['/books']);
         })
        break;
      case 'detail':
        console.log(this.ActionName)
        console.log(f)
        this.router.navigate(['/booksform','edit',this.BooksData.id]);
        break;
      case 'create':
        console.log(this.ActionName)
        console.log(f)
        this.BookService.CreateBookData(f.value).subscribe(r=>{
          this.BookioService.sendCreate(r)
          this.router.navigate(['/books']);
        })
        break;
      default:

        break;
    }
  }

}
