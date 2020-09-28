import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SyncAsyncComponent } from './page';

@NgModule({
	declarations: [SyncAsyncComponent],
	imports: [
		RouterModule.forChild([{ path: '', component: SyncAsyncComponent }]),
		FormsModule,
		SyncAsyncComponent,
	],
})
export class SyncAsyncComponentModule {}
