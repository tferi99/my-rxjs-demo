import { createFeatureSelector, createSelector, MemoizedSelector, State } from '@ngrx/store';
import * as fromConfig from './config.reducer';
import { ConfigState } from './config.reducer';
import { Config } from '../entity-test.model';
import { map } from 'rxjs';
import { EntityState } from '@ngrx/entity';

export const selectConfigState = createFeatureSelector<ConfigState>(fromConfig.featureKey);

export const selectAllConfigEntities = createSelector(
  selectConfigState,
  fromConfig.selectEntities
);

// ------------------------------------- all -------------------------------------
export const selectAllConfigs = createSelector(
  selectConfigState,
  fromConfig.selectAll
);

const _selectAll = createSelector(
  fromConfig.selectIds,
  fromConfig.selectEntities,
  (ids, entities): any => ids.map((id: any) => (entities as any)[id])
)


export const selectAllConfigs2 = createSelector(
  selectConfigState,
  _selectAll
);


/**
 * It returns undefined if length of configs is 3.
 */
export const selectAllConfigsWithUndefined = createSelector(
  selectConfigState,
  fromConfig.selectAll,
)
export const selectAllConfigsWithUndefined2 = createSelector(
  selectConfigState,
  fromConfig.selectAll,
  (state, configs) => {
    console.log('############## state:', state);
    console.log('############## configs:', configs);
    return configs
  }
) as MemoizedSelector<object, Config[]>;

/*export const selectAllConfigsWithUndefined3 = createSelector(
  selectConfigState,
  fromConfig.selectAll,
  ((state, configs) => {
    console.log('>>>>>>>>>>>>>>>>>>>> CONFIGS:', configs);
    if (configs && configs.length === 3) {
      return undefined;
    }
    return configs;
  })
);  // as MemoizedSelector<object, Config[]>;*/

/**
 * selectAllConfigs, but protected against nullish result
 */
/*export const selectAllConfigsSafe = createSelector(
  selectAllConfigsWithUndefined as MemoizedSelector<object, Config[]>,
  configs => (configs ?? [])
);


// ------------------------------------- count -------------------------------------
export const selectConfigsCount = createSelector(
  selectConfigState,
  fromConfig.selectTotal
);
*/
// ------------------------------------- one -------------------------------------
export const selectConfig = (name: string) => createSelector(
  selectAllConfigEntities,
  (entities) => entities[name]
);

