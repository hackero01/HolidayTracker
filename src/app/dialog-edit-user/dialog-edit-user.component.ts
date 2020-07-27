import { Component, OnInit, Inject } from '@angular/core';
import { EditUserService } from './edit-user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Concedii} from '../autentificare/concedii'
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
  providers:[EditUserService]
})
export class DialogEditUserComponent implements OnInit {
 
  
  
  ngOnInit(): void {
    console.log(this.data);
   }
  constructor(private editUser:EditUserService,@Inject(MAT_DIALOG_DATA) public data: Concedii) { }
 
  
 
  

}