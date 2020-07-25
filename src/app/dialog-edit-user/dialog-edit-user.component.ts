import { Component, OnInit } from '@angular/core';
import { EditUserService } from './edit-user.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
  providers:[EditUserService]
})
export class DialogEditUserComponent implements OnInit {
  nume = localStorage.getItem('numeL');
  dataInceput=localStorage.getItem('dataIL');
  dataFinal=localStorage.getItem('dataFL');
  grup=localStorage.getItem('grupL');
  
   testObject ={"name":this.nume,"dataInceput":this.dataInceput,"dataFinal":this.dataFinal,"grup":this.grup};
  ngOnInit(): void {
    
    console.log(this.testObject)
   }
  constructor(private editUser:EditUserService) { }
 
  
 
  displayData(event){
    var name=JSON.parse(JSON.stringify(event.name))
    debugger;
    
  }

}
