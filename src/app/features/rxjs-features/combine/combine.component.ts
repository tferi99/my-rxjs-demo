import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  combineLatestWith,
  fromEvent,
  interval,
  map,
  mergeMap,
  Observable,
  of,
  share,
  tap,
  withLatestFrom
} from 'rxjs';
import { watch } from 'rxjs-watcher';
import { select, Store } from '@ngrx/store';
import { selectCounter1, selectCounter2, selectCounter3 } from '../../../store/app.selectors';

const RXJS_WATCH_DURATION = 30;

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.scss']
})
export class CombineComponent implements OnInit, AfterViewInit {
  @ViewChild('wlfClickSource') wlfClickSource!: ElementRef<HTMLDivElement>;
  @ViewChild('clwClickSource') clwClickSource!: ElementRef<HTMLDivElement>;
  @ViewChild('customClickSource') customClickSource!: ElementRef<HTMLDivElement>;

  offset: number = 0;

  childSource1$: Observable<number> = interval(3000).pipe(
    watch('BaseInterval', RXJS_WATCH_DURATION),
    share(),
  );

  childSource2$: Observable<number> = this.childSource1$.pipe(
    share(),
    map(val => val * 10)
  );

  childSource3$: Observable<number> = this.childSource1$.pipe(
    share(),
    map(val => val * 100)
  );

  wlfClickWithChild$!: Observable<number[]>;
  clwClickWithChild$!: Observable<number[]>;
  customClickWithChild$!: Observable<number[]>;

  constructor(
    private store: Store
  ) {}

  ngAfterViewInit(): void {
    //console.log('SOURCE1:', this.wlfClickSource);

    this.wlfClickWithChild$ = fromEvent(this.wlfClickSource.nativeElement, 'click').pipe(
      //tap((ev: any) => console.log('click', ev)),
      map((ev: any) => (ev as PointerEvent).x),

      // tested operator
      withLatestFrom(this.childSource1$, this.childSource2$, this.childSource3$),

      watch('Click[withLatestFrom]', RXJS_WATCH_DURATION),
    );
    this.wlfClickWithChild$.subscribe({
      next: (value: any) => console.log('CLICK withLatestFrom:', value)
    });

    // withLatestFrom
    this.clwClickWithChild$ = fromEvent(this.clwClickSource.nativeElement, 'click').pipe(
      //tap((ev: any) => console.log('click', ev)),
      map((ev: any) => (ev as PointerEvent).x),

      // tested operator
      combineLatestWith(this.childSource1$, this.childSource2$, this.childSource3$),

      watch('Click[combineLatestWith]', RXJS_WATCH_DURATION),
    );
    this.clwClickWithChild$.subscribe({
      next: (value: any) => console.log('CLICK combineLatestWith:', value)
    });

    // custom
    this.customClickWithChild$ = fromEvent(this.customClickSource.nativeElement, 'click').pipe(
      //tap((ev: any) => console.log('offset: ', this.offset)),
      //tap((ev: any) => console.log('click', ev)),
      map((ev: any) => (ev as PointerEvent).x),

      // tested operator
/*      withLatestFrom(
        this.store.pipe(select(selectCounter1(this.offset))),
        this.store.pipe(select(selectCounter2(this.offset))),
        this.store.pipe(select(selectCounter3(this.offset))),
        ),*/

      // tested operator
      mergeMap((action) =>
        of(action).pipe(
          withLatestFrom(
            this.store.pipe(select(selectCounter1(this.offset))),
            this.store.pipe(select(selectCounter2(this.offset))),
            this.store.pipe(select(selectCounter3(this.offset))),
          ),
          tap(val => console.log('CUSTOM 1:', val)),
          map(([action, cs1, cs2, cs3]) => [action, cs1, cs2, cs3]),
          tap(val => console.log('CUSTOM 2:', val)),
        ),
//      (action, data) => data
      ),
      tap(val => console.log('CUSTOM 3:', val)),

      watch('Click[custom]', RXJS_WATCH_DURATION),
    );
    this.customClickWithChild$.subscribe({
      next: (value: any) => console.log('CLICK custom:', value)
    });
  }

  ngOnInit(): void {}
}
