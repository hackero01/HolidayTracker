import { Injectable } from '@angular/core';
import { User } from '../autentificare/user';

@Injectable({
  providedIn: 'root'
})
export class HomeServService {
  
  test=JSON.parse(localStorage.getItem('concedii'));
 // console.log(JSON.parse(localStorage.getItem('testObject')));
  userData:any =[
    {
      nume:this.test.nume,dataInceput:this.test.dataInceput,dataFinal:this.test.dataFinal,grup:this.test.grup
    }
  ]

  constructor() {
    console.log(JSON.parse(localStorage.getItem('concedii')));
   }
  
  
}
