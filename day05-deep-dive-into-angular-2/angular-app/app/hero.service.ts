import {HEROES} from './mock-heroes';
import {Injectable} from 'angular2/core';


@Injectable()
export class HeroService {
	getHeroes(){
		console.log('getting heroes...');
		return HEROES;		
	}
}