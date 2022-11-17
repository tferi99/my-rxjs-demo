import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TRACE_ROUTING } from './shared/constants';
import { Page404Component } from './features/page404/page404.component';

const routes: Routes = [
  { path: 'rxjs', loadChildren: () => import('./features/rxjs-features/rx-js-features.module').then(m => m.RxJsFeaturesModule) },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/rxjs/combine', pathMatch: 'full' },   // default
  { path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: TRACE_ROUTING})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
