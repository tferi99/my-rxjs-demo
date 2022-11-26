import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromConfig from './config.reducer';
import { ConfigState } from './config.reducer';
import { Config } from '../entity-test.model';

export const ERROR_IF_COUNT = 4;

export const selectConfigState = createFeatureSelector<ConfigState>(fromConfig.featureKey);

export const selectAllConfigEntities = createSelector(
  selectConfigState,
  fromConfig.selectEntities
);

// ------------------------------------- all -------------------------------------
export const selectAllConfigs = createSelector(
  selectConfigState,
  fromConfig.selectAll,
);

// source of adapter.getSelectors().selectAll
const _selectAll = createSelector(
  fromConfig.selectIds,
  fromConfig.selectEntities,
  (ids, entities): any => ids.map((id: any) => entities[id])
)

export const selectAllConfigs2 = createSelector(
  selectConfigState,
  _selectAll
);

/**
 * It returns undefined if length of configs is 3.
 */
export const selectAllConfigsWithUndefined = createSelector(
  selectAllConfigs,
  (items: Config[]) => items.length === ERROR_IF_COUNT ? undefined : items
);

export const selectAllConfigsWithUndefined2 = createSelector(
  selectConfigState,
  fromConfig.selectAll,
  (state: ConfigState, items: Config[]) => items.length === ERROR_IF_COUNT ? undefined : items
);

/*
                          !!!!!!!!!!!!!!!!!!!!!!! NOTE !!!!!!!!!!!!!!!!!!!!!!!
You cannot use second form of SAME selector:

export const selectAllConfigsWithUndefined:  MemoizedSelector<object,              Config[] | undefined, DefaultProjectorFn<Config[] | undefined>>
export const selectAllConfigsWithUndefined2: MemoizedSelector<EntityState<Config>, Config[] | undefined, DefaultProjectorFn<Config[] | undefined>>
*/

export const selectAllConfigsFiltered = createSelector(
  selectAllConfigs,
  (items: Config[]) => items.filter(item => item.name !== 'FORBIDDEN')
);

export const selectAllConfigsFiltered2 = createSelector(
  selectConfigState,
  fromConfig.selectAll,
  (state: ConfigState, items: Config[]) => items.filter(item => item.name !== 'FORBIDDEN')
);

/*
  export const selectAllConfigsFiltered:  MemoizedSelector<object,              Config[], DefaultProjectorFn<Config[]>>
  export const selectAllConfigsFiltered2: MemoizedSelector<EntityState<Config>, Config[], DefaultProjectorFn<Config[]>>
 */

/**
 * selectAllConfigs, but protected against nullish result
 */
export const selectAllConfigsSafe = createSelector(
  selectAllConfigsWithUndefined,
  configs => (configs ?? [])
);

// ------------------------------------- count -------------------------------------
export const selectConfigsCount = createSelector(
  selectConfigState,
  fromConfig.selectTotal
);

// ------------------------------------- one -------------------------------------
export const selectConfig = (name: string) => createSelector(
  selectAllConfigEntities,
  (entities) => entities[name]
);

