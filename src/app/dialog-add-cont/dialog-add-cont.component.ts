import { Component, OnInit } from '@angular/core';
import {DialogService} from '../dialog-add-cont/dialog.service'
@Component({
  selector: 'app-dialog-add-cont',
  templateUrl: './dialog-add-cont.component.html',
  styleUrls: ['./dialog-add-cont.component.scss'],
  providers:[ DialogService]
})
export class DialogAddContComponent implements OnInit {

  constructor(private dialogS:DialogService) { }

  ngOnInit(): void {
  }
  introduConcediul(event){
    event.preventDefault();
    console.log(event);
    var nume=event.target.elements[0].value;
    var dataInceput=event.target.elements[1].value;
    var dataFinal = event.target.elements[2].value;
    var grup = event.target.elements[3].value;
    debugger;
    this.dialogS.introduConcediul(nume,dataInceput,dataFinal,grup);
    
   
  }
}
