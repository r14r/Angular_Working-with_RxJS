import { Component, OnInit } from '@angular/core';

import { ajax } from 'rxjs/ajax';

import { from } from 'rxjs';
import { of, pipe } from 'rxjs';

import { interval } from 'rxjs';
import { fromEvent } from 'rxjs';

import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-demo-page',
	templateUrl: './page.html',
	styleUrls: ['./page.scss'],
})
export class DemoPageComponent implements OnInit {
	MODULE = 'HomePageComponent';

	public LOGOUTPUT = '';
	public LOGLINENR = 0;

	log(func, line: string = '') {
		const SEP = this.LOGLINENR === 0 ? '' : '<br>';

		this.LOGLINENR += 1;
		this.LOGOUTPUT =
			this.LOGOUTPUT + SEP + this.LOGLINENR + ': ' + func + '| ' + line;

		console.log(this.MODULE + '::' + func + '|' + line);
	}

	constructor() {}

	ngOnInit() {}

	rundemos() {
		this.LOGLINENR = 0;
		this.create_an_Observable_that_will_publish_a_value_on_an_interval();

		this.LOGLINENR = 0;
		this.create_an_observable_from_a_promise();

		this.LOGLINENR = 0;
		this.create_an_observable_from_an_event();

		this.LOGLINENR = 0;
		this.create_an_observable_that_creates_an_ajax_request();

		this.LOGLINENR = 0;
		this.operators_map();

		this.LOGLINENR = 0;
		this.operators_pipe_standalone();
	}

	create_an_observable_from_a_promise() {
		const _FUNC = 'create_an_observable_from_a_promise';

		this.log(_FUNC);

		const data = from(fetch('/demos'));

		data.subscribe({
			next(response) {
				console.log(_FUNC, response);
			},
			error(err) {
				console.log(_FUNC, 'ERROR: ' + err);
			},
			complete() {
				console.log(_FUNC, 'Completed');
			},
		});
	}

	create_an_Observable_that_will_publish_a_value_on_an_interval() {
		const _FUNC =
			'create_an_Observable_that_will_publish_a_value_on_an_interval';

		this.log(_FUNC);

		const secondsCounter = interval(10);

		secondsCounter.subscribe(n =>
			this.log(_FUNC, `It's been ${n} seconds since subscribing!`),
		);
	}

	TEMPLATE() {
		const _FUNC = 'TEMPLATE';

		this.log(_FUNC);

		const secondsCounter = interval(10);

		secondsCounter.subscribe(n =>
			this.log(_FUNC, `It's been ${n} seconds since subscribing!`),
		);
	}

	create_an_observable_that_creates_an_ajax_request() {
		const _FUNC = 'create_an_observable_that_creates_an_ajax_request';

		this.log(_FUNC);

		const apiData = ajax('/api/data');
		apiData.subscribe(res => {
			console.log(res.status, res.response);
		});
	}

	create_an_observable_from_an_event() {
		const _FUNC = 'TEMPLATE';

		this.log(_FUNC);

		const el = document.getElementById('output');

		this.log(_FUNC, 'observe element: ' + el);

		this.log(
			_FUNC,
			'create an Observable that will publish mouse movements',
		);
		const mouseMoves = fromEvent(el, 'mousemove');

		this.log(_FUNC, 'subscribe to start listening for mouse-move events');
		const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
			console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

			if (evt.clientX < 40 && evt.clientY < 40) {
				this.log(_FUNC, 'unsubscribte');
				subscription.unsubscribe();
			}
		});
	}

	operators_map() {
		const _FUNC = 'operators_map';

		this.log(_FUNC);
		this.log(
			_FUNC,
			'const vals = map((val: number) => val * val); vals(of(1, 2, 3)).subscribe();',
		);

		this.log(_FUNC, 'build nums=of(1,2,3)');
		const nums = of(1, 2, 3);

		this.log(_FUNC, 'build map');
		const squareValues = map((val: number) => val * val);
		const squaredNums = squareValues(nums);

		this.log(_FUNC, 'subscribe');
		squaredNums.subscribe(val => {
			this.log(_FUNC, val.toLocaleString());
		});

		this.log(_FUNC, 'oneliner');
		const vals = map((val: number) => val * val);
		vals(of(1, 2, 3)).subscribe(val =>
			this.log(_FUNC, val.toLocaleString()),
		);

		this.log(_FUNC);
	}

	operators_pipe_standalone() {
		const _FUNC = 'operators_pipe_standalone';
		this.log(
			_FUNC,
			'pipe(filter((n: number) => n % 2 !== 0), map(n => n * n))',
		);

		const nums = of(1, 2, 3, 4, 5);

		this.log(_FUNC, 'create a function that accepts an Observable');
		const squareOddVals = pipe(
			filter((n: number) => n % 2 !== 0),
			map(n => n * n),
		);

		this.log(
			_FUNC,
			'create an Observable that will run the filter and map functions',
		);
		const squareOdd = squareOddVals(nums);

		this.log(_FUNC, 'subscribe to run the combined functions');
		squareOdd.subscribe(val => {
			this.log(_FUNC, val.toLocaleString());
		});
	}
}
