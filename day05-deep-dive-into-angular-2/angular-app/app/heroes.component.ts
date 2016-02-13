import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    directives: [HeroDetailComponent],
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
	<ul class="heroes">
	  <li *ngFor="#hero of heroes" 
    (click)="onSelect(hero)" 
    [class.selected]="hero === selectedHero">
	  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
	</ul>
  <my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`
})


export class HeroesComponent implements OnInit { 
  constructor(private _heroService: HeroService) { }
	public title = "Heroes Management App";
	public heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
  getHeroes() {
    this._heroService.getHeroes().then(heroes=> this.heroes = heroes);
  }
  ngOnInit(){
    this.getHeroes();
  }
}
