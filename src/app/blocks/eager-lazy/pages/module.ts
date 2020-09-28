import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EagerLazyComponent } from './page';

@NgModule({
	declarations: [EagerLazyComponent],
	imports: [
		RouterModule.forChild([{ path: '', component: EagerLazyComponent }]),
		FormsModule,
		EagerLazyComponent,
	],
})
export class EagerLazyComponentModule {}
