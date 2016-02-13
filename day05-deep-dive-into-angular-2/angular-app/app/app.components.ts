import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
    <my-heroes></my-heroes>
    `
})


export class AppComponent { 
	public title = 'My Heroe App'
  
}


// add the <my-heroes> tags to the template so we still see the heroes.
// add the HeroesComponent to the directives array so Angular recognizes the <my-heroes> tags.
// add the HeroService to the providers array because we'll need it in every other view.
// add the supporting import statements.