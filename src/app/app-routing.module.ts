import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EventListComponent } from './event-list/event-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrganisersLoginComponent } from './organisers-login/organisers-login.component';
import { OrganisersRegisterComponent } from './organisers-register/organisers-register.component';
import { OrganiserDashboardComponent } from './organiser-dashboard/organiser-dashboard.component';
import { AddEventComponent } from './add-event/add-event.component';
import { OrganiserProfileComponent } from './organiser-profile/organiser-profile.component';
import { OrganiserEventListComponent } from './organiser-event-list/organiser-event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'events-list',component:EventListComponent},
  {path:'user-profile',component:UserProfileComponent},
  {path:'organisers-login',component:OrganisersLoginComponent},
  {path:'organisers-register',component:OrganisersRegisterComponent},
  {path:'organisers-dashboard',component:OrganiserDashboardComponent},
  {path:'add-event',component:AddEventComponent},
  {path:'organiser-profile',component:OrganiserProfileComponent},
  {path:'organiser-event-list',component:OrganiserEventListComponent},
  {path:'event-details/:id',component:EventDetailsComponent},
  {path:'booking-history',component:BookingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
