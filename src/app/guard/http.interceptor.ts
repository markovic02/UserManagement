import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {

  private token: any = '';
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.token = localStorage.getItem('jwt');
    console.log('token u interceptoru', this.token);

    const authR = request.clone({ setHeaders : { Authorization: this.token}});

    console.log('REquest headrs: ', request.headers);
      return next.handle(authR);

  }
}
