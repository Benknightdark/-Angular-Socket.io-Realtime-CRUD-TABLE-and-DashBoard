import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksService } from "app/services/books.service";
import { BooksComponent } from './books/books.component';
import { BooksformComponent } from './booksform/booksform.component';
import { BooksdashboardService } from "app/services/booksdashboard.service";
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
import { BooksioService } from "app/services/booksio.service";
import * as alasql from 'alasql';
const config: SocketIoConfig = { url: 'http://localhost:3001', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    DashboardComponent,
    BooksComponent,
    BooksformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    FormsModule,
    SocketIoModule.forRoot(config)
    //BrowserModule.withServerTransition({ appId: 'socket' })
  ],
  providers: [BooksService,BooksdashboardService,BooksioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
