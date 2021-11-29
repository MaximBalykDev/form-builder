import { createAction, props } from "@ngrx/store";
import {Element} from "../../interfaces/interface";

export const clearElement = createAction('Clear Element')
export const addElement = createAction('Add Element', props<Element>())
export const selectedElement = createAction('Selected Element', props<any>())
export const changeStyle = createAction('Change Style Element', props<any>())
export const removeElement = createAction('Remove Element', props<any>())
export const moveItemInStore = createAction('Move Element', props<any>())
