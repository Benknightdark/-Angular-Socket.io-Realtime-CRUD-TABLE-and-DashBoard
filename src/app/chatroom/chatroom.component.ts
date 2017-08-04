import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
//import * as io from 'socket.io-server';
@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {
  data = null;
  constructor() { }

  ngOnInit() {
     const socket = io.connect('http://localhost:3001');
    $('#send').click(function () {
      socket.emit("news", $('#m').val());
      return false;
    });

   socket.on('news', function (data) {
      console.log(data);
      $('#messages').append($('<li>').text(data));
    });

  }

}
