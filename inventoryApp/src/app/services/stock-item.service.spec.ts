import { TestBed } from '@angular/core/testing';

import { StockItemService } from './stock-item.service';

describe('StockItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StockItemService = TestBed.get(StockItemService);
    expect(service).toBeTruthy();
  });
});
