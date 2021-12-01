import { TestBed } from '@angular/core/testing';

import { FormBuilderService } from './formBuilder.service';

describe('FormBuilderService', () => {
  let service: FormBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormBuilderService);
  });

});
