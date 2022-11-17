import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineComponent } from './combine/combine.component';
import { RxJsFeaturesRoutingModule } from './rx-js-features-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { NgRxFeaturesModule } from '../ngrx-features/ng-rx-features.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CombineComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RxJsFeaturesRoutingModule,
    SharedModule,
    NgRxFeaturesModule,
    FormsModule
  ]
})
export class RxJsFeaturesModule { }
