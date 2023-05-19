import { Component } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  user = new User();
msg="";
  constructor(private _service : RegistrationService, private _router : Router){

  }
ngOnIt():void{
}

loginAdmin()
{
  this._service.loginAdminFromRemote(this.user).subscribe(
    data =>{ console.log("response received");
    this._router.navigate(['/admin-dashboard'])
  },
    error=> {console.log("exception occurred");
    this.msg="Incorrect email or password";
  }
  );
}

}
