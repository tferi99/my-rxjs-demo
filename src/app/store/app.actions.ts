import { createAction, props } from '@ngrx/store';

export const loadApps = createAction(
  '[App] Load Apps'
);

export const incrementCounter1 = createAction(
  '[App] Counter1++'
);

export const incrementCounter2 = createAction(
  '[App] Counter2++'
);

export const incrementCounter3 = createAction(
  '[App] Counter3++'
);

export const decrementCounter1 = createAction(
  '[App] Counter1--'
);

export const decrementCounter2 = createAction(
  '[App] Counter2--'
);

export const decrementCounter3 = createAction(
  '[App] Counter3--'
);

