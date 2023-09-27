import { Component } from '@angular/core';
import { Bookings } from '../bookings';
import { BookingserviceService } from '../bookingservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
bookings:Bookings[]=[];
uid=localStorage.getItem('userid')
constructor(private bookingservice:BookingserviceService,private router:Router ){}
ngOnInit():void{
  this.bookingservice.getBookings(this.uid).subscribe((data:Bookings[])=>{ 
    console.log(data); 
    this.bookings=data;
     });}
}


