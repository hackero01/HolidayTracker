import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  contNou;conturiNoi: any = [];
  constructor() { }
  public register(username:string,password:string,grup:string){

    var testObject ={"username":username, "password":password,"grup":grup};
    this.conturiNoi.push(testObject);
    localStorage.setItem('testObject', JSON.stringify(this.conturiNoi));

 }
}
