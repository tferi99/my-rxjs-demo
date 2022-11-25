import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../entity-test.model';
import { Store } from '@ngrx/store';
import { selectAllConfigs } from '../store/config.selectors';

@Component({
  selector: 'app-entity-table',
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.scss']
})
export class EntityTableComponent implements OnInit {
  configs$!: Observable<Config[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.configs$ = this.store.select(selectAllConfigs);
  }
}
