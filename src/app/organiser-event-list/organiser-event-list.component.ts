import { Component, OnInit } from '@angular/core';
import { Events } from '../events';
import { EventserviceService } from '../eventservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-organiser-event-list',
  templateUrl: './organiser-event-list.component.html',
  styleUrls: ['./organiser-event-list.component.css']
})
export class OrganiserEventListComponent implements OnInit {
events:Events[]=[]; 
name=localStorage.getItem('name');
constructor(private eventservice:EventserviceService,private router:Router,private route:ActivatedRoute){
}
ngOnInit():void{
  this.eventservice.getEventsByOrganiser(this.name).subscribe((data:Events[])=>{
    this.events=data;
     });}
    }

