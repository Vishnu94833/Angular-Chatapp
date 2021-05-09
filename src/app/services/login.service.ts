import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.model';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginData:Login

  constructor(private http: HttpClient) { }

  login(data:Login):Observable<any>{
    return this.http.post(`${BASE_URL}/login`,{
      'email': data.emailId,
      'password': data.password
    })
  }

}
