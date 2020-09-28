import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-eager-lazy',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class EagerLazyComponent implements OnInit {
	MODULE = 'EagerLazyComponent';

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

	demo_eager() {
		this.LOGOUTPUT = '';
		this.log('demo_eager: Starting with Demo Eager');

		const greetingPoster = new Promise((resolve, reject) => {
			this.log('demo_eager: Inside Promise (proof of being eager)');
			resolve('Welcome! Nice to meet you.');
		});

		this.log('demo_eager: Before calling then on Promise');
		greetingPoster.then(res =>
			this.log('demo_eager' + `Greeting from promise: ${res}`),
		);
	}

	demo_lazy() {
		this.LOGOUTPUT = '';
		this.log('demo_lazy: Starting with Demo Lazy');
		const greetingLady$ = new Observable(observer => {
			this.log('demo_lazy: Inside Observable (proof of being lazy)');
			observer.next('Hello! I am glad to get to know you.');
			observer.complete();
		});
		this.log('demo_lazy: Before calling subscribe on Observable');
		greetingLady$.subscribe({
			next: this.log,
			complete: () =>
				this.log('demo_lazy: End of conversation with preety lady'),
		});
	}

	demo_sync1() {
		const greetingPoster = new Promise((resolve, reject) => {
			resolve('Welcome! Nice to meet you.');
		});
		this.log('Before calling then on Promise');
		greetingPoster.then(res => this.log(`Greeting from promise: ${res}`));
		this.log('After calling then on Promise (proof of being always async)');
	}

	demo_sync2() {
		const greetingLady$ = new Observable(observer => {
			observer.next('Hello! I am glad to get to know you.');
			observer.complete();
		});

		this.log('Before calling subscribe on Observable');

		greetingLady$.subscribe({
			next: next => this.log('sync2' + next),
			error: err => this.log(`Oops... ${err}`),
			complete: () => this.log('End of conversation with preety lady'),
		});

		this.log(
			'After calling subscribe on Observable (proof of being able to execute sync)',
		);
	}
}
