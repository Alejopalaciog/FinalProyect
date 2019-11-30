import { userInterface } from '../interface/user-interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type" : "application/json",
  });

  registerUser(name: string, email: string, password: string){
     const url = "http://localhost:3000/api/Users";
     return this.http.post<userInterface>(url,{name,email,password},{headers: this.headers})
     .pipe(map(data => data));
  }

  loginUser(email: string, password: string):Observable<any>{
    const url = "http://localhost:3000/api/Users/login?include=user";
    return this.http.post<userInterface>(url,{email,password},{headers: this.headers})
    .pipe(map(data => data));
  }
  setUser(user: userInterface):void{
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser',user_string);
  }
  setToken(token):void{
    localStorage.setItem('accessToken', token);
  }

  getToken(){
    return localStorage.getItem("accessToken");
  }

  getCurrentUser():userInterface{
    let user_string = localStorage.getItem("currentUser");
    if(!isNullOrUndefined(user_string)){
      let user : userInterface = JSON.parse(user_string);
      return user;
    }else{
      return null;
    }
  }

  logoutUser(){
    let accessToken = localStorage.getItem('accessToken')
    const url = "http://localhost:3000/api/Users/logout?accessToken";
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUser');
    return this.http.post<userInterface>(url,{headers: this.headers});
  }

}
