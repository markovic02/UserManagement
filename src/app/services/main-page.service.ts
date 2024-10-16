import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ALL_USERS, CREATE_USER, DELETE_USER, GET_USER_BY_ID, UPDATE_USER} from "../url-const";
import {reflectTypeEntityToDeclaration} from "@angular/compiler-cli/src/ngtsc/reflection";
import {User} from "../user";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class MainPageService {


  constructor(private httpClient: HttpClient, private loginService: LoginService) {

  }

  getAllUsers():Observable<User[]>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('jwt'));
    const options = { headers: headers};
    return this.httpClient.get<User[]>(`${ALL_USERS}`, options);
  }

  // findCurrUser(username: string):User | void{
  //   this.users.forEach(user=>{
  //     if(user.username === this.loginService.getUsername()){
  //       return  this.currUser = user;
  //       console.log("Trenutni korisnik ", user.first_name);
  //     }
  //     return null;
  //   })
  // }
  getUserById(user_id: number):Observable<User>{
    return  this.httpClient.get<User>(`${GET_USER_BY_ID}/${user_id}`);
  }

  createUser(user: User):Observable<User>{
    return this.httpClient.post<User>(`${CREATE_USER}`, user);
  }

  updateUser(user: User):Observable<User>{
    return this.httpClient.post<User>(`${UPDATE_USER}`, user);
  }
  deleteUser(user_id: number):Observable<void>{
    return  this.httpClient.delete<void>(`${DELETE_USER}/${user_id}`);
  }



}
