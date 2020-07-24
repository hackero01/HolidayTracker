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
  iadatele(event){
    event.preventDefault();
    console.log(event);
    var username=event.target.elements[0].value;
    var password=event.target.elements[1].value;
    var grup = event.target.elements[2].value;
    this.dialogS.register(username,password,grup);
   
  }
}
