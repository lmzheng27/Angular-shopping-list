import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-list-edit',
  templateUrl: './list-edit.component.html',
  styleUrls: ['./list-edit.component.css']
})
export class ListEditComponent implements OnInit {
	@ViewChild('nameInput', {static:false}) nameInput:ElementRef;
	@ViewChild('amountInput', {static:false}) amountInput:ElementRef;
	@Output() ingInput = new EventEmitter<Ingredient>()

  constructor() { }

  ngOnInit() {
  }

  onAddList(){
  	const ingName = this.nameInput.nativeElement.value;
  	const ingAmount = this.amountInput.nativeElement.value;
  	const newIng = new Ingredient (ingName, ingAmount);
  	this.ingInput.emit(newIng);

  };

}
