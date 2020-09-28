import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomePageComponent } from './blocks/home/pages/page';
import { DemoPageComponent } from './blocks/demo/pages/page';
import { BootstrapComponent } from './blocks/bootstrap/pages/page';
import { EagerLazyComponent } from './blocks/eager-lazy/pages/page';
import { SyncAsyncComponent } from './blocks/sync-async/pages/page';
import { MultipleValuesComponent } from './blocks/multiple-values/pages/page';
import { OperatorsComponent } from './blocks/operators/pages/page';

@NgModule({
	declarations: [
		AppComponent,
		BootstrapComponent,
		EagerLazyComponent,
		SyncAsyncComponent,
		MultipleValuesComponent,
		OperatorsComponent,
		HomePageComponent,
		DemoPageComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
