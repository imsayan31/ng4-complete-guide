import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: {name: string, desc: string, imagePath: string};
  @Output() recipeDetailsClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeDetails() {
    this.recipeDetailsClick.emit();
  }

}
