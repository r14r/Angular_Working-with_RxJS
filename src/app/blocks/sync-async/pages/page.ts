import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-sync-async',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class SyncAsyncComponent implements OnInit {
	MODULE = 'SyncAsyncComponent';

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

	run_code_sync() {
		this.LOGOUTPUT = '';
		this.log('Starting with Sync');

		const notifications$ = new Observable(observer => {
			observer.next('Hello! I am glad to get to know you.');
			observer.complete();
		});

		this.log('Before calling subscribe on Observable');

		notifications$.subscribe({
			next: this.log,
			complete: () => this.log('End of conversation with preety lady'),
		});

		this.log(
			'After calling subscribe on Observable (proof of being able to execute sync)',
		);
	}

	run_code_async() {
		this.LOGOUTPUT = '';
		this.log('Starting with Async');

		const notifications$ = new Observable(observer => {
			setTimeout(() => {
				observer.next('Hello! I am glad to get to know you.');
				observer.complete();
			}, 2000);
		});

		this.log('Before calling subscribe on Observable');

		notifications$.subscribe({
			next: this.log,
			complete: () =>
				this.log('End of conversation with tired preety lady'),
		});

		this.log(
			'After calling subscribe on Observable (proof of being able to execute async)',
		);
	}
}
