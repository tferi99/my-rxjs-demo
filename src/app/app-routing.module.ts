import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CounterPauseResumeComponent} from './counter-pause-resume/counter-pause-resume.component';

const routes: Routes = [
  { path: 'counterPauseResume', component: CounterPauseResumeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
