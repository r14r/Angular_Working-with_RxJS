import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-multiple-values',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class MultipleValuesComponent implements OnInit {
	MODULE = 'MultipleValuesComponent';

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
		this.log('Starting with Multiple Values');

		const notifications = new Observable(observer => {
			const interval = setInterval(() => {
				observer.next('New notification');
			}, 2000);

			return () => clearInterval(interval);
		});

		const subscription = notifications.subscribe(data => {
			this.log('subscribe: ' + data);
		});

		setTimeout(() => subscription.unsubscribe(), 8000);
	}
}
