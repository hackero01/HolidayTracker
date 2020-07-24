import { Component, OnInit } from '@angular/core';
import { AutentificareServiceService} from '../autentificare/autentificare-service.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-autentificare',
  templateUrl: './autentificare.component.html',
  styleUrls: ['./autentificare.component.scss'],
  providers:[AutentificareServiceService]
})
export class AutentificareComponent implements OnInit {
a
  constructor(private servLogin:AutentificareServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(event){
    event.preventDefault();
    console.log(event);
    var username=event.target.elements[0].value;
    var password=event.target.elements[1].value;
    this.servLogin.checkLogin(username,password);
    
    
  }

}
