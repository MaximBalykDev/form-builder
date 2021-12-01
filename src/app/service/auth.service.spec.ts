import {inject, TestBed} from '@angular/core/testing';

import { AuthService } from './auth.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";

describe('AuthService', () => {
  let routerMock = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [
        AuthService, { provide: Router, useValue: routerMock },
      ],
    });

  });

  it('should be initialized', inject([AuthService], (authService: AuthService) => {
    expect(authService).toBeTruthy();
  }));

  it('should show token after call getToken', inject([AuthService], (authService: AuthService) => {
    const result = authService.getToken();
    expect(result).toBeNull();
  }));

});
