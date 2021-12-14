import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Element } from '../../data/interface';

export const storeElements = createSelector(
  createFeatureSelector('elementEntries'),
  (state: Element[]) => {
    return Object.values(state);
  },
);
