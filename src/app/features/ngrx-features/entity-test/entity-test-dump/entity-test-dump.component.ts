import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, tap } from 'rxjs';
import { Config } from '../entity-test.model';
import { selectConfig } from '../store/config.selectors';
import { Store } from '@ngrx/store';
import { CONFIG1, CONFIG2, CONFIG3 } from '../entity-test.component';

@Component({
  selector: 'app-entity-test-dump',
  template: '',
  styleUrls: ['./entity-test-dump.component.scss']
})
export class EntityTestDumpComponent implements OnInit, OnDestroy {
  config1Sub!: Subscription;
  config2Sub!: Subscription;
  config3Sub!: Subscription;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.config1Sub = this.store.select(selectConfig(CONFIG1)).pipe(
      tap(val => console.log(CONFIG1 + ' emitted from store: ', val))
    ).subscribe();
    this.config2Sub = this.store.select(selectConfig(CONFIG2)).pipe(
      tap(val => console.log(CONFIG2 + ' emitted from store: ', val))
    ).subscribe();
    this.config3Sub = this.store.select(selectConfig(CONFIG3)).pipe(
      tap(val => console.log(CONFIG3 + ' emitted from store: ', val))
    ).subscribe();
  }

  ngOnDestroy(): void {
    if (this.config1Sub) {
      this.config1Sub.unsubscribe();
    }
    if (this.config2Sub) {
      this.config2Sub.unsubscribe();
    }
    if (this.config3Sub) {
      this.config3Sub.unsubscribe();
    }
  }
}
