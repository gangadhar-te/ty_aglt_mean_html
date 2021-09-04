import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {  }

  registerUser(userDetails){
   return this.http.post<any>('https://ty-shop.herokuapp.com/api/users/register',userDetails)
  }

  loginUser(credentials){
    return this.http.post<any>('https://ty-shop.herokuapp.com/api/users/login',credentials)
  }
}
