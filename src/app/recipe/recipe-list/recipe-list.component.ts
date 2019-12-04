import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes:Recipe[] = [
	new Recipe(
		'a test name', 
		'a test description', 
		'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'
		)
	];
	@Output() selectedRecipe= new EventEmitter<Recipe>();

  constructor() { }

  onSelected(items){
  	this.selectedRecipe.emit(items);
  }

  ngOnInit() {
  }

}
