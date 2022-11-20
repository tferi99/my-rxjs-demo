import { Component, OnInit } from '@angular/core';
import { Config } from './entity-test.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectConfigEntity } from './store/config.selectors';

const CONFIG1 = 'config1';

@Component({
  selector: 'app-entity-test',
  templateUrl: './entity-test.component.html',
  styleUrls: ['./entity-test.component.scss']
})
export class EntityTestComponent implements OnInit {
  config1$!: Observable<Config>;
  config1: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.config1$ = this.store.pipe(select(selectConfigEntity(CONFIG1)));

  }

  saveConfig1() {
    const data: Config = {

    }
  }
}
