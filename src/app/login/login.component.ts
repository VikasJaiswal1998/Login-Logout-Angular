import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    login = {
      emailid : '',
      password : '',
    };

    show : boolean = false;
    constructor(private backendService : BackendService , private snack : MatSnackBar , private router : Router){}
    Login(){
      // console.log(this.login.emailid + " " + this.login.password);
      //validation 
      if((this.login.emailid == '' || this.login.emailid == null) && (this.login.password == '' || this.login.password == null))
      {
        this.snack.open('Oops...Fill all fields', 'Ok', {
          duration: 3000
        });
      }
      else if(this.login.emailid == '' || this.login.emailid == null){
        this.snack.open('Unvalid EmailId', 'Ok', {
          duration: 3000
        });
      }
      else if(this.login.password == '' || this.login.password == null){
        this.snack.open('Unvalid Password', 'Ok', {
          duration: 3000
        });
      }
      else{
        // check for login now;
        if((this.backendService.getEmailId() == this.login.emailid) && (this.backendService.getPassword() == this.login.password))
        {
            localStorage.setItem("token" , "BLACKADAM");
            setTimeout(() => {
              this.router.navigate(['dashboard']);
            }, 2);
            this.show = true;
            location.reload();
        }
        else{
          Swal.fire({
            title: 'Error!',
            text: 'please Enter Correct Details',
            icon: 'error',
            confirmButtonText: 'ok',
          });
        }
      }
      
    }


}
