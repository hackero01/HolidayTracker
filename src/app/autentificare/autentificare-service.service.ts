import { Injectable } from '@angular/core';
import { User } from '../autentificare/user'
import { of } from 'rxjs';

export class AutentificareServiceService {
  test=JSON.parse(localStorage.getItem('testObject'));
  constructor() { console.log("asd",this.test)}
 
 // console.log(JSON.parse(localStorage.getItem('testObject')));
  userData:any =[
    {
      username:this.test.username,password:this.test.password,grup:this.test.grup
    }
  ]
  //u= new User('admin','bogdan','bogdan');
  
  public checkLogin(username:string,password:string){
    const user = this.test.find((x) => x.username === username)
    
    if(this.test.find((x)=>x.username==username && x.password==password)){
      alert("Merge taica");
    }else{
      alert("Nu merge taica");
    }
  }
}
