import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CombineComponent } from './combine/combine.component';
import { RxJsFeaturesRoutingModule } from './rxjs-features-routing.module';
import { RxjsHomeComponent } from './rxjs-home/rxjs-home.component';
import { SharedModule } from '../../shared/shared.module';
import { NgRxFeaturesModule } from '../ngrx-features/ngrx-features.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CombineComponent, RxjsHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    RxJsFeaturesRoutingModule,
    SharedModule,
    NgRxFeaturesModule,
  ],
})
export class RxJsFeaturesModule {}
