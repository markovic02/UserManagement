// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {User} from "../user";
// import {AuthGuard} from "../guard/auth.guard";
// import { Observable, from } from 'rxjs';
// import {LoginService} from "./login.service";
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//
//   private isAuthenticated: boolean = false;
//   private userPermissions: Object[] = [];
//   private username : String='';
//   private password: String = '';
//
//
//
//   constructor(private logInService: LoginService) {}
//   hasPermission(requiredPermission: string): Observable<boolean> {
//
//       console.log('permisije u authservice', this.logInService.getPermissions());
//
//       if(this.logInService.getPermissions() != null){
//         const hasReadPermission =   this.logInService.getPermissions().find(permission => permission === requiredPermission) !== undefined;
//         hasPermission = this.logInService.getPermissions().includes(requiredPermission);
//         console.log('da li ima permisiju ', hasPermission);
//       }else{
//         console.log('Nemate nijednu permsiju.');
//       }
//
//     return from(Promise.resolve(hasPermission));
//   }
//   setAuthData(authData:{isAuthenticated: boolean, userPermissions: string[]}) :void{
//     this.isAuthenticated = authData.isAuthenticated;
//     this.userPermissions = authData.userPermissions;
//   }
//   isAuthenticatedUser(): boolean {
//     return this.isAuthenticated;
//   }
//
//   getUserPermissions(): Object[] {
//     return this.userPermissions;
//   }
//
// }
