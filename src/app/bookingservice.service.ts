import { Injectable } from '@angular/core';
import { Users } from './users';
import { Bookings } from './bookings';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';
@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
  private baseURL="http://localhost:8080/bookings";
  constructor(private http:HttpClient) { }
  postbooking(id:number,uid:any,{}){
    return this.http.post(`${this.baseURL}/${id}/${uid}`,{});
  }
  getBookings(id:any): Observable<Bookings[]> {
    return this.http.get<Bookings[]>(`${this.baseURL}/${id}`);
  }
}
