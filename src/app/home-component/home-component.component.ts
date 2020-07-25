import { Component, OnInit } from '@angular/core';
import {HomeServService} from './home-serv.service'
import { User } from '../autentificare/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddContComponent } from '../dialog-add-cont/dialog-add-cont.component';
import {EditUserService} from '../dialog-edit-user/edit-user.service'
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
  providers:[HomeServService,EditUserService]
})
export class HomeComponentComponent implements OnInit {
 
  dataSource = JSON.parse(localStorage.getItem('concedii'))
 
  name:string
  
  constructor(private homeServ:HomeServService,private editServ:EditUserService,public dialog:MatDialog) { }

  ngOnInit(): void {
    
   console.log(this.dataSource)
  }
  openDialog(){
    this.dialog.open(DialogAddContComponent)
  }
  delete(i){
    this.dataSource.splice(i,1);
  
    this.dataSource=JSON.parse(JSON.stringify(this.dataSource));// this line is to refresh view and detect changes for updating table view


  }
  edit(row){
    
    var nume= JSON.parse(JSON.stringify(row.nume))
    var dataInceput= JSON.parse(JSON.stringify(row.dataInceput))
    var dataFinal= JSON.parse(JSON.stringify(row.dataFinal))
    var grup= JSON.parse(JSON.stringify(row.grup))

    var numeL=localStorage.setItem("numeL",row.nume);
    var dataIL=localStorage.setItem("dataIL",row.dataInceput);
    var dataFL=localStorage.setItem("dataFL",row.dataFinal);
    var grupL=localStorage.setItem("grupL",row.grup);
    this.dialog.open(DialogEditUserComponent)
    
  }
  createNew(event){
    alert("Vezi ca merge");
  }
}
