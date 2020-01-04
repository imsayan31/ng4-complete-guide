import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: {name: string, desc: string, imagePath: string};


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onRecipeDetails() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
