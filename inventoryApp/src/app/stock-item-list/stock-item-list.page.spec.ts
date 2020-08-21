import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemListPage } from './stock-item-list.page';

describe('StockItemListPage', () => {
  let component: StockItemListPage;
  let fixture: ComponentFixture<StockItemListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
