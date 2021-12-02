import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthModule } from '../auth.module';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AuthModule,
      ],
      providers: [FormBuilder],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 2 input', () => {
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('password')).toBeTruthy();
  });

  it('initializes login module', () => {
    const module = TestBed.inject(AuthModule);

    expect(module).toBeTruthy();
  });

  it('passoword field should be required', () => {
    const password = component.form.controls['password'];
    password.setValue('');

    expect(password.hasError('required')).toBeTruthy();
  });

  it('Password length must be at least 6 characters', () => {
    const password = component.form.controls['email'];
    password.setValue('1234');

    expect(password.valid).toBeFalsy();
  });

  it('email field should be required', () => {
    const email = component.form.controls['email'];
    email.setValue('');

    expect(email.hasError('required')).toBeTruthy();
  });

  it('email field incorrect', () => {
    const email = component.form.controls['email'];
    email.setValue('fake@');

    expect(email.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.form.controls['email'].setValue('fake@mail.com');
    component.form.controls['password'].setValue('123456');

    expect(component.form.valid).toBeTruthy();
  });
});
