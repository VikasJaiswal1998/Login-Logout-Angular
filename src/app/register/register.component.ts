import { Component } from '@angular/core';
import {user} from "./User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username:any =" " ;
  password:any = " ";
  emailid:any =" ";

  constructor(){}
  

  registerme(){
    console.log("im working ");
    console.log(this.username +" " + this.password + " " + this.emailid);
  }
}
