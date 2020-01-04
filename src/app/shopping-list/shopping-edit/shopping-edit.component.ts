import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredients = new EventEmitter<{name: string, amount: number}>();
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef
  @ViewChild('quantityInput', {static: true}) quantityInputRef: ElementRef

  constructor() { }

  ngOnInit() {
  }

  onAddIngredients(nameInput: HTMLInputElement, quantityInput: HTMLInputElement) {
    this.addIngredients.emit({
      name: this.nameInputRef.nativeElement.value,
      amount: this.quantityInputRef.nativeElement.value
    });
  }

}
