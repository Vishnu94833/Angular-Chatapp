import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }

  getMessages(receiverid,senderid):Observable<any>{
    return this.http.get(`${BASE_URL}/users/getsinglechat/${receiverid}/and/${senderid}`)
  }

  getUserMessages(id): Observable<any> {
    return this.http.get(`${BASE_URL}/auth/users/${id}/msgs`, {
      headers: { token: localStorage.getItem('token') },
    });
  }
}
