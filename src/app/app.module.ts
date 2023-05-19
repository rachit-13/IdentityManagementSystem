import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AadharListComponent } from './aadhar-list/aadhar-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { PanListComponent } from './pan-list/pan-list.component';
import { CreatePanComponent } from './create-pan/create-pan.component';
import { CreateAadharComponent } from './create-aadhar/create-aadhar.component';
import { UpdateAadharComponent } from './update-aadhar/update-aadhar.component';
import { UpdatePanComponent } from './update-pan/update-pan.component';
import { LinkComponent } from './link/link.component';
import { LinkStatusComponent } from './link-status/link-status.component';
import { CommonPageComponent } from './common-page/common-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AadharListComponent,
    RegistrationComponent,
    PanListComponent,
    CreatePanComponent,
    CreateAadharComponent,
    UpdateAadharComponent,
    UpdatePanComponent,
    LinkComponent,
    LinkStatusComponent,
    CommonPageComponent,
    AdminLoginComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
