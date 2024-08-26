import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { moveOutGuard } from './move-out.guard';

describe('moveOutGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => moveOutGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
