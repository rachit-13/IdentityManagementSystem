import { Component } from '@angular/core';
import { PanService } from '../pan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-pan',
  templateUrl: './update-pan.component.html',
  styleUrls: ['./update-pan.component.css']
})
export class UpdatePanComponent {

  p:any;
  constructor(private panService : PanService,private router: Router){}

  ngOnInit(): void 
  {
    this.futureDateDisable();
  }

  delPan(panNum:any)
  {
    return this.panService.delete(panNum).subscribe((data:any)=>
    {
      alert("PAN deleted successfully.");
      this.router.navigate (['user-dashboard']);
    })
  }

  panDetails(formdata:any)
  {
     this.panService.searchPan(formdata.panNum).subscribe((pandetails:any)=>{
      this.p=pandetails;
      console.log(this.p);
    },
    error=> {console.log("exception occurred");
    alert("PAN Number not found.");}
    )
    
  }

  updatepan(data:any)
  {
    return this.panService.updatePan(data).subscribe((res:any)=>{
      alert("PAN Updated successfully.");
      this.router.navigate(['user-dashboard']);
    },
    error=> {console.log("exception occurred");
    alert("Please Enter Valid Details.");})
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
