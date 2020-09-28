import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './page';

@NgModule({
	declarations: [
		HomePageComponent
	],
	imports: [
		RouterModule.forChild([
			{ path: '', component: HomePageComponent }
		]),
		FormsModule,
		HomePageComponent
	]
})
export class HomePageComponentModule {

}
