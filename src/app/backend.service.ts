import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from './register/User';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http : HttpClient ) { }
  // private url = "http://localhost:3000/"; // dummu api;

  //get , post , delete , put
  createUser(Data : any){
    return this.http.post("http://localhost:3000/signup" , Data);
  }

  getUser():Observable<user[]>{
    return this.http.get<user[]>("http://localhost:3000/signup" );
  }

  getEmailId(){
    return localStorage.getItem("emailid");
  }
  // getName():string{
  //   let name =  localStorage.key["username"];
  //   return name;
  // }
  
  getPassword(){
    return localStorage.getItem("password");
  }

  isLogIn():boolean{
    if(localStorage.getItem("token")){  
      return true;
    }
    else{
      return false;
    }
  }

  removeAll(){
    localStorage.clear();
  }

}
