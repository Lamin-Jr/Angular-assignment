import { Component, Input, OnInit } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  showDetail: boolean = false;

  constructor(protected recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe((recipe: Recipe) => {
      this.showDetail = true;
    });
  }

  addIngredientsToShop(){
    this.recipeService.addIngredientsToShop(this.recipe.ingredients)
  }
}
