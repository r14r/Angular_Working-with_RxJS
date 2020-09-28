import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EagerLazyComponent } from './blocks/eager-lazy/pages/page';
import { HomePageComponent } from './blocks/home/pages/page';
import { DemoPageComponent } from './blocks/demo/pages/page';
import { SyncAsyncComponent } from './blocks/sync-async/pages/page';
import { MultipleValuesComponent } from './blocks/multiple-values/pages/page';
import { OperatorsComponent } from './blocks/operators/pages/page';
import { BootstrapComponent } from './blocks/bootstrap/pages/page';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	// { path: 'home', loadChildren: () => import('./pages/home/home.page.module.tsX').then(m => m.HomePageModule) },
	{ path: 'eagerlazy', component: EagerLazyComponent },
	{ path: 'home', component: HomePageComponent },
	{ path: 'demo', component: DemoPageComponent },
	{ path: 'syncasync', component: SyncAsyncComponent },
	{ path: 'multiplevalues', component: MultipleValuesComponent },
	{ path: 'operators', component: OperatorsComponent },
	{ path: 'bootstrap', component: BootstrapComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
