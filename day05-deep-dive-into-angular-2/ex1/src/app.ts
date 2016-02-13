import {Component, FormBuilder, Validators} from 'angular2/core'

@Component({
  selector: 'my-form',
  template: `
    <form [ngFormModel]="loginForm" (submit)="doLogin($event)">
    <input ngControl="email" type="email" placeholder="Your email">
    <input ngControl="password" type="password" placeholder="Your password">
  <button type="submit">Log in</button>
</form>
  `
})


export class LoginPage {
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
}