import { Component, OnInit } from '@angular/core';
import { TITLE } from '../../shared/constants';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = TITLE;

  constructor() {}

  ngOnInit(): void {}
}
