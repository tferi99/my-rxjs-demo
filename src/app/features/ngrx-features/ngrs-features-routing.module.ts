import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { EntityTestComponent } from './entity-test/entity-test.component';

const routes: Routes = [
  {
    path: '',
    component: NgrxHomeComponent,
    children: [
      { path: 'entity', component: EntityTestComponent },
      { path: '', redirectTo: 'entity', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgRxFeaturesRoutingModule {}
