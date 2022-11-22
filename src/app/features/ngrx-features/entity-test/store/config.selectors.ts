import { createFeatureSelector, createSelector, MemoizedSelector, State } from '@ngrx/store';
import * as fromConfig from './config.reducer';
import { ConfigState } from './config.reducer';
import { Config } from '../entity-test.model';

export const selectConfigState = createFeatureSelector<ConfigState>(fromConfig.featureKey);

export const selectAllConfigEntities = createSelector(
  selectConfigState,
  fromConfig.selectEntities
);

export const selectAllConfigs = createSelector(
  selectConfigState,
  fromConfig.selectAll
);

export const selectConfig = (name: string) => createSelector(
  selectAllConfigEntities,
  (entities) => entities[name]
);

export const selectConfigEntitiesByNames = (names: (string)[]): MemoizedSelector<ConfigState, (Config | undefined)[]> => createSelector(
  selectAllConfigEntities,
  entities => names.map(name => entities[name])
);
