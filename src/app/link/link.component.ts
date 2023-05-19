import { Component } from '@angular/core';
import { Aadhar } from '../aadhar';
import { Router } from '@angular/router';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent {

  aadhar : Aadhar = new Aadhar();
  constructor(private aadharService : AadharService,private router: Router){}

  linkDetails(data : any){
    this.aadharService.link(this.aadhar).subscribe(data =>{
      console.log(data);  
      alert("Aadhar card and PAN Card Linked Successfully");
  },
  error=> {console.log("exception occurred");
    alert("Linking failed, Please check the details.");})
}

navto(){
  this.router.navigate(['/user-dashboard']);
}
}
