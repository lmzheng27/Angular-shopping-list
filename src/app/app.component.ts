import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';
  componentDisplay = 'recipe';

  cSelected(event:string){
  	this.componentDisplay = event ;
  };
}
