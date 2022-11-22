import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Config } from '../entity-test.model';
import * as ConfigActions from './config.actions';
import { createReducer, on } from '@ngrx/store';

export const featureKey = 'configs';

export interface ConfigState extends EntityState<Config> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Config> = createEntityAdapter<Config>(
  {
    selectId: (config) => config.name
  }
);

export const initialState: ConfigState = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ConfigActions.addConfig,
    (state, action) => adapter.addOne(action.config, state)
  ),
  on(ConfigActions.upsertConfig,
    (state, action) => adapter.upsertOne(action.config, state)
  ),
  on(ConfigActions.addConfigs,
    (state, action) => adapter.addMany(action.configs, state)
  ),
  on(ConfigActions.upsertConfigs,
    (state, action) => adapter.upsertMany(action.configs, state)
  ),
  on(ConfigActions.updateConfig,
    (state, action) => adapter.updateOne(action.config, state)
  ),
  on(ConfigActions.updateConfigs,
    (state, action) => adapter.updateMany(action.configs, state)
  ),
  on(ConfigActions.deleteConfig,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ConfigActions.deleteConfigs,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ConfigActions.loadConfigs,
    (state, action) => adapter.setAll(action.configs, state)
  ),
  on(ConfigActions.clearConfigs,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

