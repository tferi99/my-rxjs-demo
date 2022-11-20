import { createSelector } from '@ngrx/store';
import * as fromConfig from './config.reducer';

export const selectConfigEntities = fromConfig.selectEntities;

export const selectConfigEntity = (name: string) => createSelector(
  selectConfigEntities,
  entities => entities[name]
);

export const selectConfigEntitiesByNames = (names: string[]) => createSelector(
  selectConfigEntities,
  entities => names.map(name => entities[name])
);
