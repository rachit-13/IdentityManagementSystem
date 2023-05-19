import { Component } from '@angular/core';
import { Pan } from '../pan';
import { PanService } from '../pan.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-create-pan',
  templateUrl: './create-pan.component.html',
  styleUrls: ['./create-pan.component.css']
})
export class CreatePanComponent {
  pan : Pan = new Pan();
  constructor(private panService : PanService,private router: Router){}
  

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

savePan(){
  this.panService.createPan(this.pan).subscribe(data =>{
    console.log(data);  
    this.goToPanList();
    alert("PAN created successfully");
    this.router.navigate(['user-dashboard']);  
  },
  error => {
    alert("PAN already exist");
  }); 
 }
 goToPanList(){
  this.router.navigate(['/pan']);
 }

onSubmit(){
  console.log(this.pan);
  this.savePan();
  // alert("PAN created successfully");
}
navto(){
  this.router.navigate(['/user-dashboard']);
}
}
