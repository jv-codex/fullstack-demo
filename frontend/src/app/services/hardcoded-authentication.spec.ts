import { TestBed } from '@angular/core/testing';

import { HardcodedAuthentication } from './hardcoded-authentication';

describe('HarcodedAuthentication', () => {
  let service: HardcodedAuthentication;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedAuthentication);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
