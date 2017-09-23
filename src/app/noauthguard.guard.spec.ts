import { TestBed, async, inject } from '@angular/core/testing';

import { NoAuthguardGuard } from './noauthguard.guard';

describe('NoauthguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoAuthguardGuard]
    });
  });

  it('should ...', inject([NoAuthguardGuard], (guard: NoAuthguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
