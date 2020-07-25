import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  contNou; concediiNoi: any = [];
  constructor() { }
  public introduConcediul(nume:string,dataInceput:string,dataFinal:string,grup:string){

    var obiectConcediu ={"nume":nume, "dataInceput":dataInceput,"dataFinal":dataFinal,"grup":grup};
    this.concediiNoi.push(obiectConcediu);
    debugger;
    localStorage.setItem('concedii', JSON.stringify(this.concediiNoi));

 }
}
