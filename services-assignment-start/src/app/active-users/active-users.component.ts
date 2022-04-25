import { Component, OnInit } from "@angular/core";
import { UsersService } from "../users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(protected usersService: UsersService) {}

  ngOnInit(): void {
      this.users = this.usersService.serviceActiveUsers
  }

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }
}
