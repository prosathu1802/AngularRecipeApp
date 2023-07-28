import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    constructor(private slSerive: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe('Test Recipe', "Sample Recipe", "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
         [
            new Ingredient("Meat", 1),
            new Ingredient("Fries", 20),
         ]),
        new Recipe('ANother Test Recipe', "Sample Recipe 2", "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg",
         [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 2),
         ]),
      ];

    getRecipes() {
        return this.recipes.slice();    //return a copy instead of reference
    }

    AddIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slSerive.addIngredients(ingredients);
    }
}