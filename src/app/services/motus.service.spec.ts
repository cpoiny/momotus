import { TestBed } from '@angular/core/testing';

import { MotusService } from './motus.service';

describe('MotusService', () => {
  let service: MotusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
