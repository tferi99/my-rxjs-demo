import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { TRACE_ROUTING } from './shared/constants';
import { Page404Component } from './features/page404/page404.component';

const routes: Routes = [
  {
    path: 'rxjs',
    loadChildren: () =>
      import('./features/rxjs-features/rxjs-features.module').then(
        (m) => m.RxJsFeaturesModule
      ),
  },
  {
    path: 'ngrx',
    loadChildren: () =>
      import('./features/ngrx-features/ngrx-features.module').then(
        (m) => m.NgRxFeaturesModule
      ),
  },

  { path: '', redirectTo: '/rxjs/combine', pathMatch: 'full' }, // default
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: TRACE_ROUTING })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
