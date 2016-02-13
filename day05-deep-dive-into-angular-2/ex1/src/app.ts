//our root app component
import {Component} from 'angular2/core'


@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <button (click)="toggleMyName()">Toggle Name</button>
      
    </div>
  `,
  directives: []
})

export class App {
  constructor() {
    this.name = 'Nicolas'
  }
  toggleMyName() {
    if (this.name == 'Nicolas') {
      this.name = 'Funkenstein'
    } else { 
      this.name = 'Nicolas'
    }
  }
}

