import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
user = new User();
msg="";
  constructor(private _service : RegistrationService, private _router : Router){

  }
ngOnIt():void{
}

loginUser()
{
  this._service.loginUserFromRemote(this.user).subscribe(
    data =>{ console.log("response received");
    this._router.navigate(['/user-dashboard'])
  },
    error=> {console.log("exception occurred");
    this.msg="Incorrect email or password";
  }
  );
}

gotoregistration()
{
  this._router.navigate(['/registration'])
}

}