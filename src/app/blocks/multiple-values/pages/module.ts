import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MultipleValuesComponent } from './page';

@NgModule({
	declarations: [MultipleValuesComponent],
	imports: [
		RouterModule.forChild([
			{ path: '', component: MultipleValuesComponent },
		]),
		FormsModule,
		MultipleValuesComponent,
	],
})
export class MultipleValuesComponentModule {}
