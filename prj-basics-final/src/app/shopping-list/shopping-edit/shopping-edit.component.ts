import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.css"],
})
export class ShoppingEditComponent implements OnInit {
  constructor(protected slService: ShoppingListService) {}

  ngOnInit() {}

  @ViewChild("name") name: ElementRef;
  @ViewChild("amount") amount: ElementRef;
  @ViewChild("description") description: ElementRef;
  @ViewChild("imageUrl") imageUrl: ElementRef;

  onAddIngredient() {
    this.slService.addIndrientTo({
      name: this.name.nativeElement?.value,
      amount: this.amount.nativeElement?.value,
    });
    

    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
    this.description.nativeElement.value = "";
    this.imageUrl.nativeElement.value = "";
  }

  clearIngredient() {
    this.slService.clearIngredient();
  }
}
