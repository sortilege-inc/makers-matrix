import { TestBed } from '@angular/core/testing';

import { MainService } from './main-service.service';

describe('MainServiceService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
