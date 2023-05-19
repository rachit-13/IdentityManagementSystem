import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  user = new User();
  msg='';

  constructor(private _service : RegistrationService, private _router : Router){}
  ngOnInit()
  {}

  registerUser()
  {
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{ console.log("response received");
      this._router.navigate(['/login'])
    },
      error=> {console.log("exception occurred");
      this.msg="Incorrect email or password";
    }
    );
  }
 
}