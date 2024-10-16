import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './main-page/main-page.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {LoginService} from "./services/login.service";
import {HTTPInterceptor} from "./guard/http.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    AddUserComponent,
    NoAccessComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
