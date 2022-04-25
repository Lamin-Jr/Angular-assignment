import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable()
export class UsersService {
  //   @Output() userSetToInactive = new EventEmitter<number>();
  serviceActiveUsers = ["Max", "Anna"];
  serviceInactiveUsers = ["Chris", "Manu"];
  activeCount:number = 0 
  inActiveCount:number = 0 

  onSetToInactive(id: number) {
    this.serviceInactiveUsers.push(this.serviceActiveUsers[id]);
    this.serviceActiveUsers.splice(id, 1);
    this.onCountInActive()
  }
  onSetToActive(id: number) {
    this.serviceActiveUsers.push(this.serviceInactiveUsers[id]);
    this.serviceInactiveUsers.splice(id, 1);
    this.onCountActive()
  }

  onCountActive(): void{
    this.activeCount++;
    console.log("Active Count", this.activeCount);
  }
  onCountInActive(): void{
    this.inActiveCount++;
    console.log("Inactive count", this.inActiveCount);
  }
}
