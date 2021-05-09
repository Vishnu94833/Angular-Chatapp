import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RegisterModel } from '../models/register.model';

const BASE_URL = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  getUsers(id): Observable<any> {
    return this.http.get(`${BASE_URL}/auth/users/${id}/list`, {
      headers: { token: localStorage.getItem('token') },
    });
  }

  registerUser(res:RegisterModel): Observable<any> {
    return this.http.post(`${BASE_URL}/register`, {
      firstname: res.firstName,
      lastname: res.lastName,
      mobilenumber: res.phoneNumber,
      email: res.emailId,
      password: res.password,
    });
  }
}
