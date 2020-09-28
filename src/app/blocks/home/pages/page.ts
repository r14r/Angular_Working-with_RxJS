import { Component, OnInit } from '@angular/core';

import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Component({
	selector: 'app-home-page',
	templateUrl: './page.html',
	styleUrls: ['./page.scss']
})
export class HomePageComponent implements OnInit {

	MODULE = 'HomePageComponent';

	public LOGOUTPUT = '';
	public LOGLINENR = 0;

	log(func, line: string = '') {
		this.LOGLINENR += 1;
		this.LOGOUTPUT = this.LOGOUTPUT + '<br>' + this.LOGLINENR + ': ' + line;

		console.log(this.MODULE + '::' + line);
	}
	constructor() {
		this.log('constructor');
	}

	ngOnInit() {
	}

	demo() {
		this.log('demo:');

		range(1, 200).pipe(
			filter(x => x % 2 === 1),
			map(x => x + x)
		).subscribe(x => this.log('demo', 'map of rage: ' + x));
	}
}
