import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OperatorsComponent } from './page';

@NgModule({
	declarations: [OperatorsComponent],
	imports: [
		RouterModule.forChild([{ path: '', component: OperatorsComponent }]),
		FormsModule,
		OperatorsComponent,
	],
})
export class OperatorsComponentModule {}
