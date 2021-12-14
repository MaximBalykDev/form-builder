import { createReducer, on } from '@ngrx/store';

import {
  addElement,
  changeStyle,
  moveItemInStore,
  removeElement,
} from '../action/element.action';
import { Element } from '../../data/interface';

export const initialElementEntries: any = [];

export const elementReducer = createReducer(
  initialElementEntries,

  on(addElement, (state, element) => {
    const elementWithUniqueId = {
      ...element,
      id: new Date(),
    };

    return [...state, elementWithUniqueId];
  }),

  on(changeStyle, (state, element) => {
    return state.map((el: Element) => {
      if (el.id === element.id) {
        return {
          ...el,
          styles: {
            ...element,
            width:
              typeof element.width === 'number'
                ? element.width + 'px'
                : element.width,
            height:
              typeof element.height === 'number'
                ? element.height + 'px'
                : element.height,
          },
        };
      } else {
        return el;
      }
    });
  }),

  on(removeElement, (state, currentEl) => {
    return state.filter((el: Element): Element | void => {
      if (el.id !== currentEl.id) {
        return el;
      }
    });
  }),

  on(moveItemInStore, (state, newOrderData) =>
    Object.values(newOrderData.elements)
  )
);
