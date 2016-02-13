import {Component, FormBuilder, Validators} from 'angular2/core'

@Component({
  selector: 'login-page',
  template: `
    coucou
  `
})


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