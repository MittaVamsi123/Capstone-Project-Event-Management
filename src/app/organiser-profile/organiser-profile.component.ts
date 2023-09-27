import { Component } from '@angular/core';
import { Users } from '../users';
import { UserserviceService } from '../userservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-organiser-profile',
  templateUrl: './organiser-profile.component.html',
  styleUrls: ['./organiser-profile.component.css']
})
export class OrganiserProfileComponent {
  users: Users=new Users();
  user_id = localStorage.getItem('userid');
  constructor(private userservice:UserserviceService,private route:ActivatedRoute){}
  ngOnInit(): void {
      this.userservice.getUserById(this.user_id).subscribe(data => {
        this.users = data;
      });
  };
}
