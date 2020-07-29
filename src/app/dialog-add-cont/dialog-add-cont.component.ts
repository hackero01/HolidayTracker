import { Component, OnInit } from '@angular/core';
import {DialogService} from '../dialog-add-cont/dialog.service';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-dialog-add-cont',
  templateUrl: './dialog-add-cont.component.html',
  styleUrls: ['./dialog-add-cont.component.scss'],
  providers:[ DialogService]
})
export class DialogAddContComponent implements OnInit {
  public dataFinal:any;
  public grup:any;
  public nume:any;
  public dataInceput:any;
  constructor(private dialogS:DialogService,private dateAdapter: DateAdapter<Date>) {
    this.dateAdapter.setLocale('RO'); 
   }

  ngOnInit(): void {
    
  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('.');
}
  introduConcediul(event){
    event.preventDefault();
    console.log(event);
    var nume=this.nume;
    var dataInceput=this.formatDate(this.dataInceput);
    var dataFinal = this.formatDate(this.dataFinal);
     
    var grup = this.grup
    
    debugger;
    this.dialogS.introduConcediul(nume,dataInceput,dataFinal,grup);
    
   
  }
}
