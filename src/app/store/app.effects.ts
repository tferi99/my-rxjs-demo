import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AppEffects {
/*
  loadApps$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AppActions.loadApps),
      //...
    );
  });
*/

  constructor(private actions$: Actions) {}
}
