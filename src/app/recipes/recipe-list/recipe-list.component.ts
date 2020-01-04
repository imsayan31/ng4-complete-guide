import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() clickedDet = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  clickedRecipe(recipe: Recipe) {
    this.clickedDet.emit({
      name: recipe.name,
      desc: recipe.desc,
      imagePath: recipe.imagePath
    });
  }

}
