import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter1, selectCounter2, selectCounter3 } from '../../../../store/app.selectors';
import { decrementCounter1, decrementCounter2, decrementCounter3, incrementCounter1, incrementCounter2, incrementCounter3 } from '../../../../store/app.actions';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.scss'],
})
export class CountersComponent implements OnInit {
  counter1$!: Observable<number>;
  counter2$!: Observable<number>;
  counter3$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // show values without offset
    this.counter1$ = this.store.pipe(select(selectCounter1(0)));
    this.counter2$ = this.store.pipe(select(selectCounter2(0)));
    this.counter3$ = this.store.pipe(select(selectCounter3(0)));
  }

  decrementCounter1() {
    this.store.dispatch(decrementCounter1());
  }

  incrementCounter1() {
    this.store.dispatch(incrementCounter1());
  }

  decrementCounter2() {
    this.store.dispatch(decrementCounter2());
  }

  incrementCounter2() {
    this.store.dispatch(incrementCounter2());
  }

  decrementCounter3() {
    this.store.dispatch(decrementCounter3());
  }

  incrementCounter3() {
    this.store.dispatch(incrementCounter3());
  }
}
