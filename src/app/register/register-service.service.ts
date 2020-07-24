import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  contNou;
  constructor() { }
  public register(username:string,password:string,grup:string){
    
  

   var testObject ={"username":username, "password":password,"grup":grup};

   localStorage.setItem('testObject', JSON.stringify(testObject));

   console.log(localStorage.getItem("testObject"));


}
}
