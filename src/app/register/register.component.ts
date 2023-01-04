import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { user } from '../register/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public user = {
    username: '',
    emailid: '',
    password: '',
  };
  User!: user[];

  constructor(private api: BackendService) {}

  registerme() {
    if (
      this.user.username != null &&
      this.user.password != null &&
      this.user.emailid != null &&
      this.user.username != '' &&
      this.user.password != '' &&
      this.user.emailid != ''
    )
    {
      this.api.createUser(this.user).subscribe(
        (body) => {
          //success message coming ;
          localStorage.setItem("emailid" , this.user.emailid);
          localStorage.setItem("password" , this.user.password);
          localStorage.setItem("username" , this.user.username);
          Swal.fire({
            title: 'success!',
            text: 'Sucessfully Created ',
            icon: 'success',
            confirmButtonText: 'Ok',
          });
          console.log(this.user);
        },
        (error) => {
          Swal.fire({
            title: 'Error!',
            text: 'Oops.. User Not  Created',
            icon: 'error',
            confirmButtonText: 'Cool',
          });
        }
      );
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter all the fields',
        icon: 'error',
        confirmButtonText: 'Error',
      });
    }
  }

  getusers() {
    this.api.getUser().subscribe(
      (success) => {
        //sucess
        this.User = success;
        console.log(this.User);
      },
      (error) => {
        console.log('some error occured');
      }
    );
  }
}
