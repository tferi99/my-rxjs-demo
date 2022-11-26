import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Config } from '../entity-test.model';
import { Store } from '@ngrx/store';
import {
  ERROR_IF_COUNT,
  selectAllConfigs, selectAllConfigsFiltered, selectAllConfigsFiltered2, selectAllConfigsSafe,
  selectAllConfigsWithUndefined, selectAllConfigsWithUndefined2,
  selectConfigsCount, selectConfigState
} from '../store/config.selectors';

interface NumValue {
  value: number;
}

@Component({
  selector: 'app-nullish-test',
  templateUrl: './nullish-test.component.html',
  styleUrls: ['./nullish-test.component.scss']
})
export class NullishTestComponent implements OnInit {
  configs$!: Observable<Config[]>;
  configsCount$!: Observable<NumValue>;
  configsNoProtection$!: Observable<Config[]>;
  configsWithError$!: Observable<Config[] | undefined>;
  configsWithErrorFixedInController$!: Observable<Config[]>;
  configsWithSafeSelector$!: Observable<Config[]>;
  selectAllConfigsFiltered$!: Observable<Config[]>;
  selectAllConfigsFiltered2$!: Observable<Config[]>;

  ERROR_IF_COUNT = ERROR_IF_COUNT;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.configs$ = this.store.select(selectAllConfigs);
    this.configsWithError$ = this.store.select(selectAllConfigsWithUndefined);
    this.configsCount$ = this.store.select(selectConfigsCount).pipe(
      map(value => ({value}))
    );
    this.configsWithSafeSelector$ = this.store.select(selectAllConfigsSafe);

    this.configsWithError$ = this.store.select(selectAllConfigsWithUndefined);   // it works!
    //this.configsWithError$ = this.store.select(selectAllConfigsWithUndefined2);   // it won't work !!!

    this.selectAllConfigsFiltered$ = this.store.select(selectAllConfigsFiltered);   // it works!
    //this.selectAllConfigsFiltered2$ = this.store.select(selectAllConfigsFiltered2);   // it won't work !!!

    this.configsWithErrorFixedInController$ = this.store.select(selectAllConfigsWithUndefined).pipe(
      map(configs => configs ?? [])
    );
  }
}
