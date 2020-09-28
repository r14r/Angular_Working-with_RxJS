import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoPageComponent } from './page';

@NgModule({
	declarations: [
		TodoPageComponent
	],
	imports: [
		RouterModule.forChild([
			{ path: '', component: TodoPageComponent }
		]),
		FormsModule,
		TodoPageComponent
	]
})
export class TodoPageComponentModule {

}
