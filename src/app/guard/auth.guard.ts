import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable, toArray} from 'rxjs';
import {LoginService} from "../services/login.service";
import {User} from "../user";

import * as JWT from "jwt-decode";
import {KeyValue} from "@angular/common";
import {HttpHeaders} from "@angular/common/http";


interface Permission {
  [key: string]: string;
}
interface DecodedToken  {
  sub: string;
  permissions: string[];
  exp: number;
  iat: number;
}
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  token: string | null = "";
  permissions:Object[]=[];
  temp: Permission = {};
  private headers: HttpHeaders;

  constructor(private router: Router, private loginService: LoginService) {
    this.headers = new HttpHeaders();
  }
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if((this.token = localStorage.getItem('jwt')) !== null){
      this.headers = new HttpHeaders({
        'Authorization': `Bearer ${this.token}`,
      });
      const decodedToken: DecodedToken = JWT.jwtDecode(this.token);
      console.log('token ', decodedToken);
      console.log('permisije ', decodedToken.permissions);
      this.permissions = decodedToken.permissions;
      console.log('value ',this.permissions[0])
      this.permissions.forEach((permission: any, index: number) => {
        this.temp[index.toString()] = permission['authority'];

      })
    }

    const routePath = route.routeConfig?.path;

    let requiredPermission ='';
    switch(routePath){
      case 'users1':
        requiredPermission = 'CAN_READ';
        break;
      case 'create':
        requiredPermission = "CAN_CREATE";
        break;
      case 'delete':
        requiredPermission = "CAN_DELETE";
        break;
      case 'update':
        requiredPermission = "CAN_UPDATE";
        break;
      default:
        return true;
    }
    console.log("aa");
    console.log('temp' , this.temp);
    if (!this.hasPermission(requiredPermission)) {
      console.log(`Nemate dozvolu za pristup: ${requiredPermission}`);
    return false;
      // Implementirajte daljnje akcije, na primer, redirekciju na drugu stranicu
    }else{
      console.log('navigacija');
      // this.router.navigate(['/users1']);
      return true;
    }

  }

  hasPermission(requiredPermission: string):boolean{

    console.log('temp', this.temp);
    return true;
  }
  private hasReadPermission(user: any): boolean {
    return user.permissions && user.permissions.includes('CAN_READ');
  }

}
