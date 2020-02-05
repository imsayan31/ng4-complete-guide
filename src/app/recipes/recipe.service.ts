import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';


export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simple test description', 'https://food-images.files.bbci.co.uk/food/recipes/chicken_with_red_kidney_97909_16x9.jpg'),
    new Recipe('Potato Recipe', 'Simply potato recipe description', 'https://bakingamoment.com/wp-content/uploads/2019/11/IMG_6643-thanksgiving-stuffing-recipe.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

}
