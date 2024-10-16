import { Component } from '@angular/core';
import {LoginService} from "../services/login.service";
import * as JWT from 'jwt-decode';

import {HttpParams} from "@angular/common/http";
import {User} from "../user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  decodedToken: { [key: string]: string } = {};
  // private currUser: any;
  userPermission: string[] = [];


  constructor(private logService: LoginService) {
    this.username = logService.getUsername();
    this.password = logService.getPassword();
  }

  setUsername():void{
    this.logService.setUsername(this.username);
  }
  setPassword():void{
    this.logService.setPassword(this.password);
  }
  onSubmit():void{
    this.setUsername();
    this.setPassword();
    const paramsObject = {
      username: this.username,
      password: this.password
    };

    this.logService.login(paramsObject).subscribe(
      (response) => {
        console.log('Uspešan login:', response);
        const jwt = response.jwt;
        console.log('izdvojen jwt', jwt);

        // const decoded: { [key: string]: any } = JWT(jwt);
        // console.log(response.permissions, " permisije")
      },
      (error) => {
        console.error('Greška prilikom login-a:', error);
      }
    );

  }

}
