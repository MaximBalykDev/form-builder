import { createReducer, on} from "@ngrx/store";
import {addElement, changeStyle, clearElement, moveItemInStore, removeElement} from "../action/element.action";
import { Element } from "../../data/interface";

export const initialElementEntries: Element[] | any = [];

export const elementReducer = createReducer(
  initialElementEntries,
  on(clearElement, () => []),

  on(addElement, (state, element) => {
    const elementWithUniqeId = {
      ...element,
      id: new Date()
    }
    return [...state, elementWithUniqeId]
  }),

  on(changeStyle, (state, element) => {
    const changedStates = state.map((el:any )=> {
      if(el.id === element.id){
        return {
          ...el,
          styles: {
            ...element,
            width: typeof(element.width) === 'number' ? element.width + 'px' : element.width ,
            height: typeof(element.height) === 'number' ? element.height + 'px' : element.height
          }
        };
      } else {
        return el
      }
    })

    return changedStates;
  }),

  on(removeElement, (state, currentEl) => {
    const changedState = state.filter((el:any) => {
      if (el.id !== currentEl.id){
        return el
      }
    })
    console.log('changedState', changedState)
    return changedState
  }),

  on(moveItemInStore, (state, newOrderData) => {
    let objectValues = Object.values(newOrderData)
    objectValues.pop()
    return objectValues
  })

)
