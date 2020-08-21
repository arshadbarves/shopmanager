import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillProfileListPage } from './bill-profile-list.page';

describe('BillProfileListPage', () => {
  let component: BillProfileListPage;
  let fixture: ComponentFixture<BillProfileListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillProfileListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillProfileListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
