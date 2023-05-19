import { Component } from '@angular/core';
import { Aadhar } from '../aadhar';
import { Router } from '@angular/router';
import { AadharService } from '../aadhar.service';

@Component({
  selector: 'app-update-aadhar',
  templateUrl: './update-aadhar.component.html',
  styleUrls: ['./update-aadhar.component.css']
})
export class UpdateAadharComponent {

  adh1:any;
  empl:any;
  adh:any;

  newaad:any;
  constructor(private aadharService : AadharService,private router: Router){}
   
  ngOnInit(): void 
  {
    this.futureDateDisable();
  }

  aadharDetails(formdata:any)
  {
     this.aadharService.searchAadhar(formdata.aadharNum).subscribe((aadhardetails:any)=>{
      this.adh1=aadhardetails;
      console.log(this.adh1);
    },
    error=> {console.log("exception occurred");
    alert("Aadhar Number not found.");}
    )
    
  }

  updateaadhar(data:any)
  {
    return this.aadharService.updateAadhar(data).subscribe((res:any)=>{
      alert("Aadhar Updated successfully.");
      this.router.navigate(['user-dashboard']);
    },
    error=> {console.log("exception occurred");
    alert("Please Enter Valid Details.");})
  }

  delAadhar(aadharNum:any)
  {
    return this.aadharService.delete(aadharNum).subscribe((data:any)=>
    {
      alert("Aadhar deleted successfully.");
      this.router.navigate (['user-dashboard']);
    })
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

    navto(){
      this.router.navigate(['/user-dashboard']);
    }
    
}
