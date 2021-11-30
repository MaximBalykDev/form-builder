import { createAction, props } from "@ngrx/store";
import {Element, IFormGroup} from "../../data/interface";

export const addElement = createAction('Add Element', props<Element>())
export const changeStyle = createAction('Change Style Element', props<IFormGroup>())
export const removeElement = createAction('Remove Element', props<Element>())
export const moveItemInStore = createAction('Move Element', props<any>())
