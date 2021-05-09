import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor(private socket: Socket) {}

  emitSocket(id:string,res:any) {
    this.socket.emit(id, res);
  }

  onSocket(id:any,callback:Function) {
    this.socket.on(id, callback);
  }
}
