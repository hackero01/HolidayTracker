import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  constructor() { }
  public afiseaza(name){
    alert(name);
  }
  concediiNoi:any = []
  array:any = []
 
 concediiExistente:any [] =JSON.parse(localStorage.getItem("concedii"))
  editHoliday(nume,dataInceput,dataFinal,grup){
      console.log(JSON.stringify(this.concediiExistente));
    var ob={"nume":nume,"dataInceput":dataInceput,"dataFinal":dataFinal,"grup":grup}
 
  var index = this.concediiExistente.findIndex(({ nume, dataFinal,dataInceput }) => nume === ob.nume );
  console.log(index)
if (index === -1) {
  this.concediiExistente.push(ob);
} else {
  this.concediiExistente[index] = ob;
}

localStorage.setItem("concedii",JSON.stringify(this.concediiExistente));
    
  }
}
