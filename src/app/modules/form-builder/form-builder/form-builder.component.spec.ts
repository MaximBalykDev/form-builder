import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilderComponent } from './form-builder.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilderModule } from '../form-builder.module';

import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { CdkAccordionModule } from '@angular/cdk/accordion';

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
        FormsModule,
        CdkAccordionModule,
      ],
      providers: [provideMockStore(),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('function noReturnPredicate should always return false', () => {
    const res = component.noReturnPredicate();

    expect(res).toBeFalsy();
  });

  it('onInit declare form', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;
    await component.ngOnInit();
    expect(component.form).toBeDefined();
  }));

  it('removeElement should delete element from array', ( async() => {
    const fixture = TestBed.createComponent(FormBuilderComponent);
    const component = fixture.componentInstance;

  }));

});
