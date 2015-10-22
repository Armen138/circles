export default class EventHandler {
	constructor() {
		//pseudo-privacy using underscore convention
		this._events = {};
	}
	on(ev, callback) {
		if(!this._events[ev]) {
			this._events[ev] = [];
		}
		this._events[ev].push(callback);
	}
	emit(ev, data) {
		if(this._events[ev]) {
			for(let i = 0; i < this._events[ev].length; i++) {
				this._events[ev][i](data);
			}
		}
	}
}
