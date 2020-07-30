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
 
 entriComponents:any [] =JSON.parse(localStorage.getItem("concedii"))
  editHoliday(nume,dataInceput,dataFinal,grup){
      console.log(JSON.stringify(this.entriComponents));
    var ob={"nume":nume,"dataInceput":dataInceput,"dataFinal":dataFinal,"grup":grup}
  //  this.entriComponents.push(ob);
   // const c=this.entriComponents.find(item => item !== ob.nume)
   // localStorage.setItem("aaa",JSON.stringify(c));
  //localStorage.setItem("ddd",JSON.stringify(this.entriComponents));
  var index = this.entriComponents.findIndex(({ nume, dataFinal,dataInceput }) => nume === ob.nume || dataFinal=== ob.dataFinal || dataInceput=== ob.dataInceput);
  console.log(index)
if (index === -1) {
  this.entriComponents.push(ob);
} else {
  this.entriComponents[index] = ob;
}

localStorage.setItem("concedii",JSON.stringify(this.entriComponents));
    
  }
}
