import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockItemPage } from './stock-item.page';

describe('StockItemPage', () => {
  let component: StockItemPage;
  let fixture: ComponentFixture<StockItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
