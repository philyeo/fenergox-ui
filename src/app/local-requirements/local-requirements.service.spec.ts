import { TestBed } from '@angular/core/testing';

import { LocalRequirementsService } from './local-requirements.service';

describe('LocalRequirementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalRequirementsService = TestBed.get(LocalRequirementsService);
    expect(service).toBeTruthy();
  });
});
