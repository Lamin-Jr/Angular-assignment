import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-event-tracker',
  templateUrl: './event-tracker.component.html',
  styleUrls: ['./event-tracker.component.css'],
  providers: [UsersService]
})
export class EventTrackerComponent {

  activeUsersClick: number;
  inActiveUsersClick: number;

  constructor(protected usersService: UsersService ) {
    this.activeUsersClick = this.usersService.activeCount;
    this.inActiveUsersClick = this.usersService.inActiveCount;
   }
}
