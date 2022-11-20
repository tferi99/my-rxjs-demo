import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Config } from '../entity-test.model';

export const initConfigs = createAction(
  '[Config/API] Init Configs'
);

export const loadConfigs = createAction(
  '[Config/API] Load Configs',
  props<{ Configs: Config[] }>()
);

export const addConfig = createAction(
  '[Config/API] Add Config',
  props<{ Config: Config }>()
);

export const upsertConfig = createAction(
  '[Config/API] Upsert Config',
  props<{ Config: Config }>()
);

export const addConfigs = createAction(
  '[Config/API] Add Configs',
  props<{ Configs: Config[] }>()
);

export const upsertConfigs = createAction(
  '[Config/API] Upsert Configs',
  props<{ Configs: Config[] }>()
);

export const updateConfig = createAction(
  '[Config/API] Update Config',
  props<{ Config: Update<Config> }>()
);

export const updateConfigs = createAction(
  '[Config/API] Update Configs',
  props<{ Configs: Update<Config>[] }>()
);

export const deleteConfig = createAction(
  '[Config/API] Delete Config',
  props<{ id: string }>()
);

export const deleteConfigs = createAction(
  '[Config/API] Delete Configs',
  props<{ ids: string[] }>()
);

export const clearConfigs = createAction(
  '[Config/API] Clear Configs'
);
