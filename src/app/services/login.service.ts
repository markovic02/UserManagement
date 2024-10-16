import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {GET_USER_BY_USERNAME, USER_LOGIN} from "../url-const";
// import {AuthService} from "./auth.service";
import { catchError, tap } from 'rxjs/operators';
import {User} from "../user";
import {AuthGuard} from "../guard/auth.guard";
import { HttpHeaders } from '@angular/common/http';
import {resolve} from "@angular/compiler-cli";
import * as jwt_decode from 'jwt-decode';
import * as JWT from "jwt-decode";

interface Permission {
  authority: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private username: string = '';
  private password: string = '';
  private token: string =  '';
  private decoded: { [key: string]: any }= {};
  private headers: HttpHeaders;
  private permissionsArray: any[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {
    this.headers = new HttpHeaders();

  }

  login(params: { username: string; password: string }): Observable<any> {
    const requestBody = {
      username: params.username,
      password: params.password,
    };

    return this.httpClient.post<any>(`${USER_LOGIN}`, requestBody).pipe(
      catchError((error) => {
        console.error('Greška pri loginu i upisu tokena:', error);
         throw (error); // Bacanje greške kako bi se rukovalo dalje
      }),
      tap((response) => {
        // console.log("odogovor", response)
        if (response) {
          this.token = response.jwt;
          this.setToken(this.token);
          localStorage.setItem('jwt', this.token);

          this.decoded = jwt_decode.jwtDecode(this.token);
          console.log('dekodiran token:', this.decoded);
          this.headers = new HttpHeaders({
            'Authorization': `Bearer ${response.jwt}`,
          });
        }


      })
    );
  }

  getHeaders():HttpHeaders{
    return this.headers;
  }
  setToken(token: string):void{
    this.token = token;
  }
  getToken(): string{
    return this.token;
  }
  setUsername(username: string):void{
    this.username = username;
  }
  setPassword(password: string):void{
    this.password=password;
  }
  getUsername():string{return this.username;}
  getPassword():string{return this.password;}
  getDecoded():{ [key: string]: any }{return this.decoded;}

  getPermissions():Object[]{
    if(this.decoded && this.decoded["permissions"] && Array.isArray(this.decoded["permissions"])){
      this.permissionsArray =  this.decoded["permissions"].map((p: Permission) => p.authority);
      console.log("PERMISIJE ", this.permissionsArray);

    }else{
      console.log("nema nista");
    }
    return this.permissionsArray;
  }
}
