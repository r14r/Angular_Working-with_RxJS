import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert/alert.component';

@NgModule({
	declarations: [
		AlertComponent,
		PlaceholderDirective,
		LoadingSpinnerComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		AlertComponent,
		PlaceholderDirective,
		LoadingSpinnerComponent,
		CommonModule
	],
	entryComponents: [
		AlertComponent
	]
})
export class ComponentsModule {

}
