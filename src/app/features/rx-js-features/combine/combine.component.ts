import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subject, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.scss']
})
export class CombineComponent implements OnInit {
  currentValue = 0;

  wlfSubject1: Subject<number> = new Subject<number>();
  wlfSubject2: Subject<number> = new Subject<number>();
  wlfSubject3: Subject<number> = new Subject<number>();

  wlf$!: Observable<number[]>;

  constructor() { }

  ngOnInit(): void {
    this.wlf$ = interval(1000).pipe(
      withLatestFrom(
        this.wlfSubject1,
        this.wlfSubject2,
        this.wlfSubject3,
      )
    )
  }

  fireWlf1() {
    this.wlfSubject1.next(this.currentValue++);
  }

  fireWlf2() {
    this.wlfSubject2.next(this.currentValue++);
  }
  fireWlf3() {
    this.wlfSubject3.next(this.currentValue++);
  }

}
