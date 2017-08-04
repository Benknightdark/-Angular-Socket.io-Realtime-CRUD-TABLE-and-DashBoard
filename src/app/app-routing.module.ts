import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatroomComponent } from "./chatroom/chatroom.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BooksComponent } from "app/books/books.component";
import { BooksformComponent } from "app/booksform/booksform.component";

const routes: Routes = [
  {
    path: '', component: BooksComponent
  },
  {
    path: 'DashBoard', component: DashboardComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'booksform/create', component: BooksformComponent
  },
  {
    path: 'booksform/detail/:id', component: BooksformComponent
  },
  {
    path: 'booksform/edit/:id', component: BooksformComponent
  },
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
