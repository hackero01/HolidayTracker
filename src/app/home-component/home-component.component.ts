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
  userdata = this.homeServ.userData
  dataSource = this.userdata
  displayedColumns: string[] = ['username', 'password', 'grup','deleteAction'];

  constructor(private homeServ:HomeServService,public dialog:MatDialog) { }

  ngOnInit(): void {
    
   // this.homeServ.displaydata();
  }
  openDialog(){
    this.dialog.open(DialogAddContComponent);
  }
  createNew(event){
    alert("Vezi ca merge");
  }
}
