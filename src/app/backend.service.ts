import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http : HttpClient) { }
  private url = "assets/database.json"; // dummu api;

  //get , post , delete , put
  createUser(){
    // return this.http.post(this.url , )
  }


}
