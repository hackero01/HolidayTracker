import { Component, OnInit } from '@angular/core';
import { RegisterServiceService} from './register-service.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[RegisterServiceService]
})
export class RegisterComponent implements OnInit {

  constructor(private serviceRegister:RegisterServiceService) { }

  ngOnInit(): void {
  }
  register(event){
    event.preventDefault();
    console.log(event);
    var username=event.target.elements[0].value;
    var password=event.target.elements[1].value;
    var grup = event.target.elements[2].value;
    this.serviceRegister.register(username,password,grup);
   
  }

}
