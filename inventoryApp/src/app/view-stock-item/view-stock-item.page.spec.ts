import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStockItemPage } from './view-stock-item.page';

describe('ViewStockItemPage', () => {
  let component: ViewStockItemPage;
  let fixture: ComponentFixture<ViewStockItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStockItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStockItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
