import {Component, FormBuilder, Validators} from 'angular2/core'

@Component({
  selector: 'my-form',
  template: `
    <form [ngFormModel]="loginForm" (submit)="doLogin()">
      <input ngControl="email" type="email" placeholder="Your email">
      <input ngControl="password" type="password" placeholder="Your password">
    <button type="submit">Log in</button>
  </form>
  `
})


export class LoginPage {
  constructor(_builder:FormBuilder) {
    this.signinForm = _builder.group({
          login: ['', Validators.required],
          password: ['', Validators.required]
  });
  doLogin(){
    console.log('log in');
  }
}