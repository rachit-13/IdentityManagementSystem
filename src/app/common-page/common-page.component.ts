import { Component } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css']
})
export class CommonPageComponent {
  user = new User();
msg="";
  constructor(private _service : RegistrationService, private _router : Router){

  }
ngOnIt():void{
}


  adminLogin()
{
    this._router.navigate(['/admin-login']);
  
}

userLogin(){
  this._router.navigate(['/login']);
}
}
