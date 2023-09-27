import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OrganiserDashboardComponent } from './organiser-dashboard/organiser-dashboard.component';
import { AddEventComponent } from './add-event/add-event.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { OrganisersLoginComponent } from './organisers-login/organisers-login.component';
import { OrganisersRegisterComponent } from './organisers-register/organisers-register.component';
import { OrganiserProfileComponent } from './organiser-profile/organiser-profile.component';
import { OrganiserEventListComponent } from './organiser-event-list/organiser-event-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon'; 
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    EventListComponent,
    EventDetailsComponent,
    BookingsComponent,
    UserProfileComponent,
    UserDashboardComponent,
    OrganiserDashboardComponent,
    AddEventComponent,
    OrganisersLoginComponent,
    OrganisersRegisterComponent,
    OrganiserProfileComponent,
    OrganiserEventListComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
