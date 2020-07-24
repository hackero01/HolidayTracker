import { Injectable } from '@angular/core';
import { User } from '../autentificare/user'

export class AutentificareServiceService {
   
  constructor() { }
  u= new User('admin','bogdan','bogdan');
  public checkLogin(username:string,password:string){
    if(this.u.username==username && this.u.password==password){
      alert("Merge taica");
    }else{
      alert("Nu merge taica");
    }
  }
}
