import { createReducer, on } from '@ngrx/store';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  counter1: number;
  counter2: number;
  counter3: number;
}

export const initialState: AppState = {
  counter1: 10,
  counter2: 20,
  counter3: 30,
};

export const reducer = createReducer(
  initialState,

  on(AppActions.loadApps, (state) => state),
  on(AppActions.incrementCounter1, (state) => ({
    ...state,
    counter1: state.counter1 + 1,
  })),
  on(AppActions.incrementCounter2, (state) => ({
    ...state,
    counter2: state.counter2 + 1,
  })),
  on(AppActions.incrementCounter3, (state) => ({
    ...state,
    counter3: state.counter3 + 1,
  })),
  on(AppActions.decrementCounter1, (state) => ({
    ...state,
    counter1: state.counter1 - 1,
  })),
  on(AppActions.decrementCounter2, (state) => ({
    ...state,
    counter2: state.counter2 - 1,
  })),
  on(AppActions.decrementCounter3, (state) => ({
    ...state,
    counter3: state.counter3 - 1,
  }))
);
