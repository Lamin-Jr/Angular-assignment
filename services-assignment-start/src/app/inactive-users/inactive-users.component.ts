import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(protected usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.serviceInactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
  }
}
