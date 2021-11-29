import { Element } from "../../data/interface";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectCountElement = createSelector(
  createFeatureSelector('elementEntries'),
  (state: Element[]) => {
    return state.length;
  }
)

export const storeElements = createSelector(
  createFeatureSelector('elementEntries'),
  (state: Element[]) => {
    return Object.values(state)
  }
)
