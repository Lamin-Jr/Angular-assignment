import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  public selectedRecipe = new EventEmitter<Recipe>();
  public recipeDetailsElements: Recipe;

  private recipes: Recipe[] = [
    {
      name: "A Test Recipe",
      description: "This is simply a test",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
      ingredients: [{ name: "apple", amount: 2 }],
    },
    {
      name: "Orange",
      description: "This is simply a test",
      imagePath:
        "http://orfiagro.com/wp-content/uploads/2020/10/orange-1hoca2l.jpg",
      ingredients: [
        { name: "apple", amount: 2 },
        { name: "orange", amount: 5 },
      ],
    },
    {
      name: "Mango",
      description: "This is simply a test",
      imagePath:
        "https://st.depositphotos.com/1642482/3698/i/950/depositphotos_36983317-stock-photo-mango.jpg",
      ingredients: [{ name: "apple", amount: 2 }],
    },
  ];
  constructor(protected slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShop(ingredient: Ingredient[]) {
    this.slService.addIngredientToShop(ingredient);
  }
}
