import { Component } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UsersService],
})
export class AppComponent {
  // activeUsers: string[] = [];
  // inactiveUsers: string[] = [];
  // constructor(protected usersService: UsersService) {}

  // ngOnInit() {
  //   this.activeUsers = this.usersService.serviceActiveUsers;
  //   this.inactiveUsers = this.usersService.serviceInactiveUsers;
  // }
}
