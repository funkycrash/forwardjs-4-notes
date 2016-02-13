import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <input type="text" placeholder="Project name" [(ngmodel)]="project.name">
	 <ul>
	   <li>{{ project.name }}</li>
	</ul>
	`
})
export class AppComponent { 

}