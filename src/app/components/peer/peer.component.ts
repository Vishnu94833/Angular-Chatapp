import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import * as moment from 'moment';
import { RegisterService } from 'src/app/services/register.service';
import { Socket } from 'ngx-socket-io';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-peer',
  templateUrl: './peer.component.html',
  styleUrls: ['./peer.component.scss'],
})
export class PeerComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private usersService: RegisterService,
    private socket: SocketService
  ) {}
  messages = [];
  sendername;
  users = [];
  inputValue = '';
  ngOnInit(): void {
    var senderid = localStorage.getItem('userid');
    this.messageService.getUserMessages(senderid).subscribe((data) => {
      this.messages = data.message;
    });
    const id = localStorage.getItem('userid');
    // this.socketOn();
    this.usersService.getUsers(id).subscribe((res) => {
      // console.log(res);
      this.users = res.message;
    });

    this.sendername = localStorage.getItem('username');
  }

  getDate(date) {
    return moment(date).format('LLL');
  }

  // sendMessage() {
  //   this.socket.emitSocket('MESSAGE',{
  //     userid: localStorage.getItem('userid'),
  //     message: this.inputValue,
  //     date: new Date(),
  //     username: this.sendername,
  //   });

    // {
    //   message: $scope.message,
    //   senderid: senderid,
    //   receiverid: receiverid,
    //   sendername: sendername,
    //   receivername: receivername,
    //   date: new Date(),
    // }
  // }

  // socketOn() {
  //   this.socket.onSocket('MESSAGE',(data) => {
  //     debugger;
  //     var receiverid = localStorage.getItem('ruserid');
  //     debugger;
  //     console.log(data);
  //   });
  // }

  openUserChat(userdata) {
    localStorage.setItem("rusername", userdata.firstname);
      localStorage.setItem("ruserid", userdata.userid);
  }
}
