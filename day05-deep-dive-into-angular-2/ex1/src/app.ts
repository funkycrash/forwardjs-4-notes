//our root app component
import {Component} from 'angular2/core'


@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Hello {{name}}</h2>
      <button (click)="toggleMyName()">Toggle Name</button>
      <div class=".form"></div>
    </div>
  `,
  directives: []
})

@Component({
  selector: 'my-form',
  providers: [],
  template: `

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

export class LoginPage {
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  doLogin(event) {
    console.log(this.loginForm.value);
    event.preventDefault();
  }
}

