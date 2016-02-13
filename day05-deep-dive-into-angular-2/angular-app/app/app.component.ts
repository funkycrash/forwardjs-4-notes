import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div><label>name: </label>{{hero.name}}</div>
	`
})
export class AppComponent { 
	public title = "Heroes Management App";
	public hero: Hero = {
		id: 1, 
		name: "Windstorm"
	};
}

interface Hero {
	id: number;
	name: string;
}