import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  protected ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  ingredientChange = new EventEmitter<Ingredient[]>();

  addIndrientTo(ingredient: Ingredient): any {
    this.ingredients.push(ingredient);
    this.ingredientChange.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients;
  }

  clearIngredient() {
    this.ingredients = [];
  }

  deleteIngredient(event) {
    this.ingredients = this.ingredients.filter((items) => items !== event);
    this.ingredients.slice();
  }
}
