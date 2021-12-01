import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilderComponent } from './form-builder.component';

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FormBuilderModule } from "../form-builder.module";
import {FormBuilder} from "@angular/forms";
import {ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store} from "@ngrx/store";
import {InjectionToken} from "@angular/core";

describe('FormBuilderComponent', () => {
  let component: FormBuilderComponent;
  let fixture: ComponentFixture<FormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormBuilderModule,
      ],
      providers: [FormBuilder,
        Store,
        StateObservable,
        ActionsSubject,
        ReducerManager,
        ReducerManagerDispatcher,
        InjectionToken ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
