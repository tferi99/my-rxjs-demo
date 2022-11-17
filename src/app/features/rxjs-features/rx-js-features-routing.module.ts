import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombineComponent } from './combine/combine.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent
    , children: [
      { path: 'combine', component: CombineComponent },
      { path: '', redirectTo: 'combine', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxJsFeaturesRoutingModule { }
