//main entry point
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from './app.components';

bootstrap(AppComponent, [])
  .catch(err => console.error(err));