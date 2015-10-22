/*
 * Circles is a ES2015 boilerplate project
 */

//import module
import EventHandler from 'eventhandler';

//declare class with inheritance
class Circles extends EventHandler {
	constructor() {
		super();
		console.log('constructed circles');
	}
	roll() {
		this.emit('ready');
	}
}

var circles = new Circles();

circles.on('ready', function() { console.log('circles ready'); });
circles.roll();

