import { Component } from '@angular/core';
import { Aadhar } from '../aadhar';
import { Router } from '@angular/router';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-create-aadhar',
  templateUrl: './create-aadhar.component.html',
  styleUrls: ['./create-aadhar.component.css']
})
export class CreateAadharComponent {

  aadhar : Aadhar = new Aadhar();
  constructor(private aadharService : AadharService,private router: Router){}
  

ngOnInit() {
this.futureDateDisable();
}

MaxDate:any;
    
    futureDateDisable(){
      var date = new Date();
      var todayDate:any = date.getDate();
      var month:any=date.getMonth() +1;
      var year:any=date.getFullYear();

      if(todayDate<10){
        todayDate='0'+todayDate;
      }
    
      if(month<10){
        month ='0'+month;
      }
      this.MaxDate=year+"-"+month+"-"+todayDate;
      console.log(this.MaxDate);
      
    }

saveAadhar(){
  this.aadharService.createAadhar(this.aadhar).subscribe(data =>{
    console.log(data);  
    this.goToAadharList();  
    this.router.navigate(['/user-dashboard']);
    alert("Aadhar card generated successfully");
    
  },
  error=> {console.log("exception occurred");
    alert("User already exist.");}); 
 }
 goToAadharList(){
  this.router.navigate(['/aadhar']);
 }

onSubmit(){
  console.log(this.aadhar);
  this.saveAadhar();
  this.router.navigate(['/user-dashboard']);
}

navto(){
  this.router.navigate(['/user-dashboard']);
}

}
