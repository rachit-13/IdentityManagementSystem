import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, fromEvent, takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit{
  private unsubscriber: Subject<void> = new Subject<void>();
 showErrorModal:any;
  token:any;
  isAuthenticated:any;
  constructor(private route : Router) {}

  ngOnInit(): void{
  }

  // logout(){
  //   localStorage.removeItem("token");
  //   this.route.navigate(['/']);
  // }

  logout()
  {
    this.unsubscriber.next();
    this.unsubscriber.complete();
    history.pushState(null,'');
    fromEvent(window,'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null,'');
      this.showErrorModal("You are Logged out and can't go back");
    });
    this.route.navigate(['/common-page']);
    
  }

  newAadhar(){
    this.route.navigate(['/create-aadhar']);
  }

  searchAadhar(){
    this.route.navigate(['/update-aadhar']);
  }

  searchPan(){
    this.route.navigate(['/update-pan']);
  }

  link(){
    this.route.navigate(['/link']);
  }

  linkStatus(){
    this.route.navigate(['/link-status']);
  }

  newPan(){
    this.route.navigate(['/create-pan']);
  }
}
