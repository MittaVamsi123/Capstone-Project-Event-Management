import { Component } from '@angular/core';
import { EventserviceService } from '../eventservice.service';
import { Router } from '@angular/router';
import { Events } from '../events';
import { BookingserviceService } from '../bookingservice.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  model: any = {};
  events: Events[] = [];
  user_id = localStorage.getItem('userid') || ''; // Initialize with an empty string if 'userid' is not available.
  id: any;

  constructor(private eventservice: EventserviceService, private bookingservice: BookingserviceService, private router: Router) {}

  category: string | null = this.model.category || null; // Initialize with null or the default value you prefer.

  findcategory() {
    this.eventservice.geteventByCategory(this.model.category).subscribe((data: Events[]) => {
      this.events = data;
      console.log(this.events);
    });
  }

  details(id: any) {
    this.router.navigate(['/event-details', id]);
  }
}
