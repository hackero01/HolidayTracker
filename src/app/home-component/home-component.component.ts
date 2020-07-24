import { Component, OnInit } from '@angular/core';
import {HomeServService} from './home-serv.service'
import { User } from '../autentificare/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddContComponent } from '../dialog-add-cont/dialog-add-cont.component';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss'],
  providers:[HomeServService]
})
export class HomeComponentComponent implements OnInit {
 
  dataSource = JSON.parse(localStorage.getItem('testObject'))
  displayedColumns: string[] = ['username', 'password', 'grup','deleteAction'];

  constructor(private homeServ:HomeServService,public dialog:MatDialog) { }

  ngOnInit(): void {
    
   // this.homeServ.displaydata();
  }
  openDialog(){
    this.dialog.open(DialogAddContComponent)
  }
  onRemove(){
    this.dataSource.pop();
  }
  createNew(event){
    alert("Vezi ca merge");
  }
}
