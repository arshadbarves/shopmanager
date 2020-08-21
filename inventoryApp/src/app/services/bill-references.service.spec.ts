import { TestBed } from '@angular/core/testing';

import { BillReferencesService } from './bill-references.service';

describe('BillReferencesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillReferencesService = TestBed.get(BillReferencesService);
    expect(service).toBeTruthy();
  });
});
