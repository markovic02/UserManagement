// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {MainPageService} from "../services/main-page.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  users: User[] = [];
  permissions: string[]  = [];

  constructor(private mainPageService: MainPageService, private loginService: LoginService) {
    this.users = [];
    this.permissions = [];
  }

  ngOnInit(): void {
    this.mainPageService.getAllUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }
//   canUpdate():boolean{
//    // @ts-ignore
//     this.permissions = this.loginService.getCurrentUser().permissions;
// console.log(this.permissions);
//     const hasUpdatePermission = this.permissions.some(permission => permission === 'CAN_UPDATE');
//
//     if (hasUpdatePermission) {
//       console.log('Korisnik ima permisiju za ažuriranje.');
//       return true;
//     } else {
//       console.log('Korisnik nema permisiju za ažuriranje.');
//       return false;
//     }
//   }

}
