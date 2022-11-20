import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.AppState>(
  fromApp.appFeatureKey
);

export const selectCounter1 = (offset: number) =>
  createSelector(selectAppState, (state) => {
    console.log('offset:', offset);
    console.log('state.counter1:', state.counter1);
    return state.counter1 + offset;
  });

export const selectCounter2 = (offset: number) =>
  createSelector(selectAppState, (state) => state.counter2 + offset);

export const selectCounter3 = (offset: number) =>
  createSelector(selectAppState, (state) => state.counter3 + offset);
