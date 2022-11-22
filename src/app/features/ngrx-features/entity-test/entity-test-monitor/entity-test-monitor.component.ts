import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../entity-test.model';
import { selectConfig } from '../store/config.selectors';
import { CONFIG1, CONFIG2, CONFIG3 } from '../entity-test.component';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-entity-test-monitor',
  templateUrl: './entity-test-monitor.component.html',
  styleUrls: ['./entity-test-monitor.component.scss']
})
export class EntityTestMonitorComponent implements OnInit {
  config1$!: Observable<Config | undefined>;
  config2$!: Observable<Config | undefined>;
  config3$!: Observable<Config | undefined>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.config1$ = this.store.select(selectConfig(CONFIG1));
    this.config2$ = this.store.select(selectConfig(CONFIG2));
    this.config3$ = this.store.select(selectConfig(CONFIG3));
  }
}
