import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountersComponent } from './component/counters/counters.component';
import { FormsModule } from '@angular/forms';
import { NgrxHomeComponent } from './ngrx-home/ngrx-home.component';
import { SharedModule } from '../../shared/shared.module';
import { NgRxFeaturesRoutingModule } from './ngrs-features-routing.module';
import { EntityTestComponent } from './entity-test/entity-test.component';
import * as fromConfig from './entity-test/store/config.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './entity-test/store/config.effects';
import { EntityTestDumpComponent } from './entity-test/entity-test-dump/entity-test-dump.component';
import { EntityTestMonitorComponent } from './entity-test/entity-test-monitor/entity-test-monitor.component';
import { EntityTable2Component } from './entity-test/entity-table2/entity-table2.component';

@NgModule({
  declarations: [CountersComponent, NgrxHomeComponent, EntityTestComponent, EntityTestDumpComponent, EntityTestMonitorComponent, EntityTable2Component],
  imports: [
    CommonModule,
    FormsModule,
    NgRxFeaturesRoutingModule,
    SharedModule,

    StoreModule.forFeature(fromConfig.featureKey, fromConfig.reducer, {}),
    EffectsModule.forFeature([ConfigEffects]),

  ],
  exports: [CountersComponent],
})
export class NgRxFeaturesModule {}
