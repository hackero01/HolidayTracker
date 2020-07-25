import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor() { }
  public afiseaza(name){
    alert(name);
  }
  
}
