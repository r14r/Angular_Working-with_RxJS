import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HelperService {
	MODULE = 'HelperService';

	constructor(private module: string) {
		this.MODULE = module;
	}


	public LOGOUTPUT = '';
	public LOGLINENR = 0;

	log(func, line: string = '') {

		const SEP = this.LOGLINENR == 0 ? '' : '<br>';

		this.LOGLINENR += 1;
		this.LOGOUTPUT = this.LOGOUTPUT + SEP + this.LOGLINENR + ': ' + func + '| ' + line;

		console.log(this.MODULE + '::' + func + '|' + line);
	}
}
