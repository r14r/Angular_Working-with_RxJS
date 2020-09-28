import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Component({
	selector: 'app-operators',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class OperatorsComponent implements OnInit {
	private MODULE = 'OperatorsComponent';

	public LOGOUTPUT = '';
	public LOGLINENR = 0;

	log(line: string) {
		this.LOGLINENR += 1;
		this.LOGOUTPUT = this.LOGOUTPUT + '<br>' + this.LOGLINENR + ': ' + line;

		console.log(this.MODULE + '::' + line);
	}
	constructor() {
		this.log('constructor');
	}

	ngOnInit() {
		this.log('ngOnInit');

		this.LOGOUTPUT = '';
		this.LOGLINENR = 0;
	}

	run_code() {
		this.LOGOUTPUT = '';
		this.log('Starting with Operators');

		this.log('notifications = new Observable()');
		const notifications = new Observable(observer => {
			this.log('in notifications');
			const interval = setInterval(() => {
				observer.next('New notification');
			}, 2000);

			this.log('return clearInterval');
			return () => clearInterval(interval);
		});

		this.log('enhancedNotifications = notifications.pipe');
		const enhancedNotifications = notifications.pipe(
			map(message => `${message} ${new Date()}`),
		);

		this.log('subscription = enhancedNotifications.subscribe');
		const subscription = enhancedNotifications.subscribe(this.log);

		this.log('setTimeout => subscription.unsubscribe()');
		setTimeout(() => subscription.unsubscribe(), 8000);
	}
}
