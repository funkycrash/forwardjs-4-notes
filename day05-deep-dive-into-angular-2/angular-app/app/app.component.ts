import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Component }       from 'angular2/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, HeroService],
  template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component: HeroDetailComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes';
}