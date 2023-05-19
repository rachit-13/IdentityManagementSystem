import { Component } from '@angular/core';
import { Aadhar } from '../aadhar';
import { AadharService } from '../aadhar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-link-status',
  templateUrl: './link-status.component.html',
  styleUrls: ['./link-status.component.css']
})
export class LinkStatusComponent {

  aadhar : Aadhar = new Aadhar();
  constructor(private aadharService : AadharService,private router: Router){}

  linkStatusDetails(data : any){
    this.aadharService.checkLink(this.aadhar).subscribe(data =>{
      console.log(data);  
      alert("Aadhar card and PAN Card already Linked.");
  },
  error=> {console.log("exception occurred");
    alert("Aadhar card and PAN Card are not linked. Please link them.");})
}

navto(){
  this.router.navigate(['/user-dashboard']);
}

}
