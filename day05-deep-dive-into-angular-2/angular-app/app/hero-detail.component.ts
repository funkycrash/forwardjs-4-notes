import {Component} from 'angular2/core';
import {Component} from 'angular2/core';

@Component({
	selector: 'my-hero-detail',
	template: `
	<div *ngIf="hero">
    	<h2>{{hero.name}} details!</h2>
    	<div><label>id: </label>{{hero.id}}</div>
    	<div><input [(ngModel)]=hero.name placeholder="name"/></div>
    </div>`
})

export class HeroDetailComponent {
	hero: Hero;
}