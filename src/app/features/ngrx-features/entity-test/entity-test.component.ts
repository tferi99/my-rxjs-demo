import { Component, OnInit } from '@angular/core';
import { Config } from './entity-test.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectAllConfigs, selectConfig } from './store/config.selectors';
import { addConfigs, deleteConfig, upsertConfig } from './store/config.actions';

export const CONFIG1 = 'config1';
export const CONFIG2 = 'config2';
export const CONFIG3 = 'config3';

@Component({
  selector: 'app-entity-test',
  templateUrl: './entity-test.component.html',
  styleUrls: ['./entity-test.component.scss']
})
export class EntityTestComponent implements OnInit {
  configs$!: Observable<Config[]>;
  config1$!: Observable<Config | undefined>;
  config1: string = '';
  config2$!: Observable<Config | undefined>;
  config2: string = '';
  config3$!: Observable<Config | undefined>;
  config3: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.configs$ = this.store.select(selectAllConfigs);
    this.config1$ = this.store.select(selectConfig(CONFIG1));
    this.config2$ = this.store.select(selectConfig(CONFIG2));
    this.config3$ = this.store.select(selectConfig(CONFIG3));

    this.store.dispatch(addConfigs({configs: [
      {name: 'cica', value: '111'},
      {name: 'kutya', value: '222'},
      {name: 'malac', value: '333'},
    ]}));
  }

  config1Changed(value: string) {
    this.config1 = value;
  }

  saveConfig1() {
    this.store.dispatch(upsertConfig({config: {name: CONFIG1, value: this.config1}}));
  }

  config2Changed(value: string) {
    this.config2 = value;
  }

  saveConfig2() {
    this.store.dispatch(upsertConfig({config: {name: CONFIG2, value: this.config2}}));
  }

  config3Changed(value: string) {
    this.config3 = value;
  }

  saveConfig3() {
    this.store.dispatch(upsertConfig({config: {name: CONFIG3, value: this.config3}}));
  }

  deleteConfig1() {
    this.store.dispatch(deleteConfig({id: CONFIG1}));
  }

  deleteConfig2() {
    this.store.dispatch(deleteConfig({id: CONFIG2}));
  }

  deleteConfig3() {
    this.store.dispatch(deleteConfig({id: CONFIG3}));
  }
}
