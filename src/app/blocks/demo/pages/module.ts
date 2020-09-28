import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DemoPageComponent } from './page';

@NgModule({
	declarations: [DemoPageComponent],
	imports: [
		RouterModule.forChild([{ path: '', component: DemoPageComponent }]),
		FormsModule,
		DemoPageComponent,
	],
})
export class DemoPageComponentModule {}
