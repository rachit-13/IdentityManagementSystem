import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { AadharListComponent } from './aadhar-list/aadhar-list.component';
import { PanListComponent } from './pan-list/pan-list.component';
import { CreatePanComponent } from './create-pan/create-pan.component';
import { CreateAadharComponent } from './create-aadhar/create-aadhar.component';
import { UpdateAadharComponent } from './update-aadhar/update-aadhar.component';
import { UpdatePanComponent } from './update-pan/update-pan.component';
import { LinkComponent } from './link/link.component';
import { LinkStatusComponent } from './link-status/link-status.component';
import { CommonPageComponent } from './common-page/common-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

const routes: Routes = [
  // {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path: 'user-dashboard', component: UserDashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'registration', component: RegistrationComponent},
  {path:'aadhar-list', component: AadharListComponent},
  {path:'pan-list', component: PanListComponent},
  {path:'create-pan', component: CreatePanComponent},
  {path:'create-aadhar', component: CreateAadharComponent},
  {path:'update-aadhar', component: UpdateAadharComponent},
  {path:'update-pan', component: UpdatePanComponent},
  {path:'link', component: LinkComponent},
  {path:'link-status', component: LinkStatusComponent},
  {path:'common-page', component: CommonPageComponent},
  {path:'', component: CommonPageComponent},
  {path:"admin-login", component: AdminLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
