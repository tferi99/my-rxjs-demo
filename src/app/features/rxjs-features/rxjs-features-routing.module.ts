import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineComponent } from './combine/combine.component';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';

const routes: Routes = [
  {
    path: '',
    component: RxjsHomeComponent,
    children: [
      { path: 'combine', component: CombineComponent },
      { path: '', redirectTo: 'combine', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RxJsFeaturesRoutingModule {}
