import { Component } from '@angular/core';
import { Events } from '../events';
import { Router } from '@angular/router';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  events:Events=new Events();
  constructor(private eventservice:EventserviceService,private router:Router) {}
  onSubmit(){
   console.log(this.events);
   this.saveEvent();
   }
 saveEvent()
 {
  this.eventservice.createEvent(this.events).subscribe(data=>{
 },
   error=>console.log(error));

  alert("event added successfully");
 }
}
