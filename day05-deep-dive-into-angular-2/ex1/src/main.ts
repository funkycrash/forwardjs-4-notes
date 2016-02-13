//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {LoginPage} from './app';

bootstrap(LoginPage, [])
  .catch(err => console.error(err));