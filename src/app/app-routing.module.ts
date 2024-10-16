import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {AuthGuard} from "./guard/auth.guard";
import {CreateUserComponent} from "./create-user/create-user.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path:'users1',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'create',
    component: CreateUserComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
