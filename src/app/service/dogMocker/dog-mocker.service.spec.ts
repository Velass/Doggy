import { TestBed } from '@angular/core/testing';

import { DogMockerService } from './dog-mocker.service';

describe('DogMockerService', () => {
  let service: DogMockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DogMockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
