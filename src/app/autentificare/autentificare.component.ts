import { Component, OnInit } from '@angular/core';
import { AutentificareServiceService} from '../autentificare/autentificare-service.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-autentificare',
  templateUrl: './autentificare.component.html',
  styleUrls: ['./autentificare.component.scss'],
  providers:[AutentificareServiceService]
})
export class AutentificareComponent implements OnInit {
value: any
mesajEroare
  constructor(private servLogin:AutentificareServiceService,private router:Router) { }
  showErrorMessage;isLogged:boolean;
  ngOnInit(): void {
  }
 
  
  
  loginUser(event){
    event.preventDefault();
    console.log(event);
    var username=event.target.elements[0].value;
    var password=event.target.elements[1].value;
    this.servLogin.checkLogin(username,password);
    this.value=this.servLogin.isLogged;
    this.mesajEroare=this.servLogin.errorMessage;
    if(!this.servLogin.isLogged){
      return this.mesajEroare;

    }
    debugger;
  }
    
    
  
    

  
}
 
  


