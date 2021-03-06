import { Ingredient } from '../shared/ingredient.model';
// import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';

export class ShoppingListService {
    // ingredientsChanged = new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10),
        ];

    getShoppingList() {
        return this.ingredients.slice();
    }

    getIngredient(index: number) {
        return this.ingredients[index];
    }

    addInputData(addedData) {
        this.ingredients.push(new Ingredient(addedData.name, addedData.amount));
        // this.ingredientsChanged.emit(this.ingredients.slice());
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateData(index: number, newData: Ingredient) {
        this.ingredients[index] = newData;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteData(index: number) {
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}
