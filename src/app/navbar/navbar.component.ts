import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private backendService: BackendService , private router : Router) {}

  show: boolean = false;
  ok: boolean = true; // this is for only function running
   tempname : string = "" ;
  while(ok: any) {
    if (this.backendService.isLogIn()) {
      // you are logged in
      //  this.tempname += ;
      //  console.log(this.tempname);
      ok = true;
    } else {
      ok = false;
    }
  }
  logout(){
    this.backendService.removeAll();
    this.router.navigate(['']);
    this.ok = false;
  }
}
