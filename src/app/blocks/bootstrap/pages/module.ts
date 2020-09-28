import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BootstrapComponent } from "./page";

@NgModule({
	declarations: [BootstrapComponent],
	imports: [
		RouterModule.forChild([{ path: "", component: BootstrapComponent }]),
		FormsModule,
		BootstrapComponent
	]
})
export class BootstrapComponentModule {}
