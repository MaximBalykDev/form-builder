import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  CdkDragDrop,
  copyArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable, Subject, takeUntil } from 'rxjs';

import { Elements } from '../../../data/mock-elements';
import {
  addElement,
  changeStyle,
  moveItemInStore,
  removeElement,
} from '../../../store/action/element.action';
import { storeElements } from '../../../store/selector/element.selector';
import { Element, IFormBuilder } from '../../../data/interface';
import { ENamesElements } from '../../../data/enum';
import { formControls } from '../../../data/constants';

type ElementDrop = HTMLElement & { name: string };

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent implements OnInit, OnDestroy {
  selectedElement?: ElementDrop;
  formBuilder: IFormBuilder[];
  storeElements$: Observable<Element[]>;
  currentElementFromStore?: Element;
  elementForDrop: Element[] = Elements;
  form!: FormGroup;
  dragElement: Element[] = Elements;
  isNoItemSelected: boolean = true;
  unsubscribe$: Subject<void> = new Subject();
  namesElements = ENamesElements;

  constructor(private store: Store) {
    this.formBuilder = [];
    this.storeElements$ = store.select(storeElements);
  }

  ngOnInit(): void {
    this.form = new FormGroup(formControls);
    this.storeElements$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => (this.elementForDrop = res));
  }

  onDrop(event: CdkDragDrop<Element[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (!!event.container.data[0].id) {
        this.store.dispatch(
          moveItemInStore({ elements: event.container.data })
        );
      }
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let index = Object.values(event.container.data);
      this.store.dispatch(addElement(index[event.currentIndex]));
    }
  }

  onSelect(element: Element): void {
    this.form.reset();
    this.currentElementFromStore = element;
    this.storeElements$
      .pipe(
        map((elements: Element[]) => {
          return elements.filter((el: Element) => {
            return el.id === this.currentElementFromStore?.id;
          });
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((res) => {
        if (res.length) {
          this.form.patchValue(res[0].styles!);
        }
      });
    this.isNoItemSelected = false;
  }

  noReturnPredicate(): boolean {
    return false;
  }

  submit(id: string): void {
    const formData = { ...this.form.value, id: id };
    this.store.dispatch(changeStyle(formData));
  }

  removeElement(id: string): void {
    this.store.dispatch(removeElement({ id }));
    this.isNoItemSelected = true;
    this.currentElementFromStore = undefined;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
