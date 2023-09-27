import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Events } from './events';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EventserviceService {
  private baseURL="http://localhost:8080/events";
  constructor(private http:HttpClient) { }
  createEvent(events:Events):Observable<Object>{
    return this.http.post(`${this.baseURL}`,events);
  }
 
  getEventsByOrganiser(org:any): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseURL}/org/${org}`);
  }

  geteventByCategory(category: string): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.baseURL}/${category}`);

  }
  getEventsById(id:any): Observable<Events> {
    return this.http.get<Events>(`${this.baseURL}/event/${id}`);
  }
}
