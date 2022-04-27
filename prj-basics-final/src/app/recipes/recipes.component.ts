import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
  providers: [RecipeService, ShoppingListService],
})
export class RecipesComponent implements OnInit {
  recipeDetailsElements: Recipe;

  constructor(protected recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe: Recipe) => (this.recipeDetailsElements = recipe)
    );
  }
}
