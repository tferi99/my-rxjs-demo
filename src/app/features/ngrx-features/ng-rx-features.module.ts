import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountersComponent } from './counters/counters.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CountersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CountersComponent
  ]
})
export class NgRxFeaturesModule { }
