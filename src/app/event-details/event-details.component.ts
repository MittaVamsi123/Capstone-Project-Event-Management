import { Component } from '@angular/core';
import { Events } from '../events';
import { BookingserviceService } from '../bookingservice.service';
import { Router } from '@angular/router';
import { EventserviceService } from '../eventservice.service';
import { ActivatedRoute } from '@angular/router';
import { PaymentserviceService } from '../paymentservice.service';
// import * as Razorpay from 'razorpay';

declare var Razorpay:any;
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent {
events=new Events();
user_id=localStorage.getItem('userid');
id:any;
bookingDate: string;
constructor(private eventservice:EventserviceService,private bookingservice:BookingserviceService,private router:Router,private route:ActivatedRoute,private paymentservice:PaymentserviceService){
  this.bookingDate = new Date().toISOString().slice(0, 10);
}
ngOnInit():void{
  this.id=this.route.snapshot.params[`id`];
  this.eventservice.getEventsById(this.id).subscribe((data:Events)=>{  
    this.events=data;
     });}

book(id:number,price:number){
    console.log(id);
    this.bookingDate=new Date().toISOString().slice(0, 10); 
   
    this.paymentservice.createTransaction(price).subscribe(
      (data)=>{
        console.log(data);
        this.openTransactionModal(data,id);
      },
      (error)=>
      {
        console.log(error);
      }    
    )
  }
  openTransactionModal(response:any,id:number){
    var options={
      order_id:response.orderId,
      // key_id:response.key_id,
      // key_secret:response.key_secret,
      key:response.key,
      amount:response.amount,
      currency:response.currency,
      name:'make a payment',
      description:'pay for the event',
      image:'https://www.istockphoto.com/photo/hand-holding-mobile-with-pay-word-and-bill-icon-feature-with-blur-back-office-counter-gm808070602-130885449',
      handler:(response:any)=>{
        this.processResponse(response,id);
      },
      prefill:{
        name:'PAYMENT',
        email:'sushmithasushmi2002@gmail.com',
        contact:'767868987'
      },
      notes:{
        address:'online booking'
      },
      theme:{
        color:'pink'
     }
    }
  var razorpayObject=new Razorpay(options);
  razorpayObject.open();
  }
  processResponse(res:any,id:number){
    console.log(res);
    this.bookevent(id);
  }
  bookevent(id:number){
    alert("event booked successfully");
    this.bookingservice.postbooking(id,this.user_id,{}).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }
}
