import { Component, OnInit } from '@angular/core';
import {HomeServService} from './home-serv.service'
import { User } from '../autentificare/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddContComponent } from '../dialog-add-cont/dialog-add-cont.component';
import {EditUserService} from '../dialog-edit-user/edit-user.service'
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
  providers:[HomeServService,EditUserService]
})
export class HomeComponentComponent implements OnInit {
 
  elementeTabel:any  = JSON.parse(localStorage.getItem('concedii'))
  
  name:string
 
  
  constructor(private homeServ:HomeServService,private editServ:EditUserService,public dialog:MatDialog) { }

  ngOnInit(): void {
    
   console.log(this.elementeTabel)
  }
  openDialog(){
    this.dialog.open(DialogAddContComponent)
  }
  delete(row){
    const stergeRand=this.elementeTabel.filter(item => item.nume !== row.nume)
     localStorage.setItem("concedii",JSON.stringify(stergeRand));
    this.elementeTabel=JSON.parse(JSON.stringify(stergeRand));// this line is to refresh view and detect changes for updating table view
    

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
  edit(row){
    
   
    this.dialog.open(DialogEditUserComponent, {
      data: {
        nume:row.nume,
        dataInceput:row.dataInceput,
        dataFinal:row.dataFinal,
        grup:row.grup
      }
    });
    
    
  }
 
}