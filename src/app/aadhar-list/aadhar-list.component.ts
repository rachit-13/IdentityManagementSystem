import { Component, OnInit } from '@angular/core';
import { Aadhar } from '../aadhar';
import { AadharService } from '../aadhar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadhar-list',
  templateUrl: './aadhar-list.component.html',
  styleUrls: ['./aadhar-list.component.css']
})
export class AadharListComponent implements OnInit {

  aadhar: Aadhar[]=[];
  
  constructor(private aadharService : AadharService,private router : Router) {}

  ngOnInit(): void {
    this.getAadhar();
  }

  private getAadhar(){
    this.aadharService.getAadharList().subscribe(data=> {
      this.aadhar = data;
    });
  }

  navto(){
    this.router.navigate(['/admin-dashboard']);
  }

}
