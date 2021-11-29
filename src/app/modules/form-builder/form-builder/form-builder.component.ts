import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../../../service/event.service';
import { moveItemInArray, CdkDragDrop, copyArrayItem} from '@angular/cdk/drag-drop';
import { Elements } from '../../../mock-elements';
import {Store} from "@ngrx/store";
import {addElement, changeStyle, moveItemInStore, removeElement} from "../../../store/action/element.action";
import { map, Observable,  } from "rxjs";
import {selectCountElement, storeElements} from "../../../store/selector/element.selector";
import {Element} from "../../../data/interface";
import {FormControl, FormGroup} from "@angular/forms";
import {ENamesElements} from "../../../data/enum";

type ElementDrop = HTMLElement & {name : string};

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit {
  selectedElement?: ElementDrop;
  formBuilder = []
  selectedCountElements$: Observable<any>
  storeElements$: Observable<any>
  selectedEl?: Element
  currentElementFromStore?: Element | any
  elementForDrop?:any
  form!: FormGroup
  dropElement: any = [];
  dragElement = Elements

  namesElements = ENamesElements
  isNoItemSelected = true

  constructor(private _eventService: EventService,
    private _router: Router,
    private store: Store
  ){
    this.selectedCountElements$ = store.select(selectCountElement)
    this.storeElements$ = store.select(storeElements)
  }

  ngOnInit(): void {
    this._eventService.getSpecialEvents()
      .subscribe(
        res => this.formBuilder = res,
        err => {
          if (err instanceof HttpErrorResponse) {
            if(err.status === 401) {
              this._router.navigate(['/login'])
            }
          }
        }
      )

    this.form = new FormGroup( {
      id: new FormControl(''),
      width: new FormControl(''),
      height: new FormControl(''),
      borderWidth: new FormControl(''),
      borderColor: new FormControl(''),
      borderStyle: new FormControl(''),
      fontSize: new FormControl(''),
      fontWeight: new FormControl(''),
      color: new FormControl(''),
      backgroundColor: new FormControl(''),
      value: new FormControl(''),
      placeholder: new FormControl(''),
      required: new FormControl(''),
      label: new FormControl(''),
    })

    this.storeElements$.subscribe(
      res => this.elementForDrop = res
    )
  }

  onDrop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if(!!event.container.data[0].id){
        this.store.dispatch(moveItemInStore(event.container.data))
      }
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      let index = Object.values(event.container.data)
      this.store.dispatch(addElement(index[event.currentIndex]))
    }
  }

  onSelect(element: any) {
    this.form.reset()
    this.selectedEl = element;
    this.storeElements$.pipe(
      map((elements:any) => {
        return elements.filter((el: any) =>{
          return el.id === this.selectedEl?.id
        })
      })
    ).subscribe(
      res => {
        this.currentElementFromStore = res[0];
        this.form.patchValue(res[0]?.styles)
      }
    )
    this.isNoItemSelected = false
  }

  noReturnPredicate() {
    return false;
  }

  submit(id?:string) {
    console.log(id)
    const formData = {...this.form.value, id: id}
    this.store.dispatch(changeStyle(formData))
  }

  removeElement(id:string) {
    this.store.dispatch(removeElement({id}))
    this.isNoItemSelected = true
    this.currentElementFromStore = []
  }

}
