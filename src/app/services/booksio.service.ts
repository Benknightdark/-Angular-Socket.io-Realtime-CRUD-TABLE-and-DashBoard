import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
@Injectable()
export class BooksioService {

  constructor(private socket: Socket) { }
  sendDelete(status) {
    this.socket.emit("Delete", status);
  }
  getDelete() {
    return this.socket
      .fromEvent("Delete")
      .map(data => data);
  }
  sendCreate(status) {
    this.socket.emit("Create", status);
  }
  getCreate() {
    return this.socket
      .fromEvent("Create")
      .map(data => data);
  }
  sendEdit(status) {
    this.socket.emit("Edit", status);
  }
  getEdit() {
    return this.socket
      .fromEvent("Edit")
      .map(data => data);
  }

}
