import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  contNou; conturiNoi: any = [];
  constructor() { }
  public register(username:string,password:string,grup:string){
    
  
   
    
    
    var testObject ={"username":username, "password":password,"grup":grup};
    
   
    this.conturiNoi.push(testObject);
    localStorage.setItem('testObject', JSON.stringify(this.conturiNoi));
 
   //console.log(JSON.parse(localStorage.getItem("testObject")));
    //console.log("conturinoi:",this.conturiNoi);
   // console.log("testobj:",testObject)
    var arr = JSON.parse( localStorage.getItem('testObject') );
   // console.log(JSON.stringify(this.conturiNoi.push(testObject)));
    //console.log(arr);


 
 }
}
