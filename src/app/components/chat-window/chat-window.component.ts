import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import * as moment from 'moment';
import { RegisterService } from 'src/app/services/register.service';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private socket: SocketService
  ) {}
  messages = [];
  sendername;
  users = [];
  inputValue = '';
  ngOnInit(): void {
    var senderid = localStorage.getItem('userid');
    this.getUserMessages();
    this.sendername = localStorage.getItem('username');
    let receiverid= localStorage.getItem('ruserid');
    this.socketOn()
  }

  getUserMessages(){
    var senderid = localStorage.getItem('userid');
    this.messageService.getUserMessages(senderid).subscribe((data) => {
      this.messages= [...data.message];
    });
  }
  
  getDate(date) {
    return moment(date).format('LLL');
  }

  sendMessage() {
    this.socket.emitSocket('MESSAGE', {
      message: this.inputValue,
      senderid: localStorage.getItem('userid'),
      receiverid: localStorage.getItem('ruserid'),
      sendername: this.sendername,
      receivername: localStorage.getItem("rusername"),
      date: new Date()
    });

    this.socket.emitSocket('CLIENT_MESSAGE',{
      userid: localStorage.getItem('userid'),
      message: this.inputValue,
      date: new Date(),
      username: this.sendername
    });
    this.inputValue = '';
  }

  socketOn() {
    var senderid = localStorage.getItem('userid');
    this.socket.onSocket(senderid,(data) => {
      this.getUserMessages()
    });

    this.socket.onSocket('CLIENT_MESSAGE',(data) => {
      this.getUserMessages()
    });
  }

}
