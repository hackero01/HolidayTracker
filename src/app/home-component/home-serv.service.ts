import { Injectable } from '@angular/core';
import { User } from '../autentificare/user';

@Injectable({
  providedIn: 'root'
})
export class HomeServService {
  
  test=JSON.parse(localStorage.getItem('testObject'));
  userData:any =[
    {
      username:this.test.username,password:this.test.password,grup:this.test.grup
    }
  ]

  constructor() { }
  
  createNew(event){
    
  }
}
