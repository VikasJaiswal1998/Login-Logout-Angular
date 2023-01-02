import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:'full',//localhost:4200/
  },
  {
    path : "login",
    component : LoginComponent,
    pathMatch : 'full', //localhost:4200/login
  },
  {
    path:"signup",
    component:RegisterComponent,
    pathMatch:'full',//localhost:4200/signups
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
