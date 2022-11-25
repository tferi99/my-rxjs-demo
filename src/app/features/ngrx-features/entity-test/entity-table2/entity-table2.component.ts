import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Config } from '../entity-test.model';
import { MemoizedSelector, select, Store } from '@ngrx/store';
import {
  selectAllConfigs,
  selectAllConfigsWithUndefined, selectAllConfigsWithUndefined2,
  selectConfigState
} from '../store/config.selectors';

@Component({
  selector: 'app-entity-table2',
  templateUrl: './entity-table2.component.html',
  styleUrls: ['./entity-table2.component.scss']
})
export class EntityTable2Component implements OnInit {
  configs$!: Observable<Config[]>;
  configsCount$!: Observable<number>;
  configsNoProtection$!: Observable<Config[]>;
  configsWithError$!: Observable<Config[] | undefined>;
  configsWithErrorFixedInController$!: Observable<Config[]>;
  configsWithSafeSelector$!: Observable<Config[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.configs$ = this.store.select(selectAllConfigs);

    this.configsWithError$ = this.store.select(selectAllConfigsWithUndefined2);

//    this.configsCount$ = this.store.select(selectConfigsCount);

//    this.configsWithError$ = this.store.select(selectAllConfigsWithUndefined);
/*    this.configsWithError$ = this.store.select(selectConfigState).pipe(
      select(selectAllConfigsWithUndefined)
    );*/

    //this.configsWithErrorFixedInController$ = this.store.select(selectAllConfigsWithUndefined).pipe(
/*    this.configsWithErrorFixedInController$ = this.store.select(selectConfigState).pipe(
      select(selectAllConfigsWithUndefined),
      map(configs => configs ?? [])
    )

    this.configsWithSafeSelector$ = this.store.select(selectConfigState).pipe(
      select(selectAllConfigsSafe)
    );
    this.configsWithSafeSelector2$ = this.store.select(selectAllConfigsSafe);*/
  }
}
