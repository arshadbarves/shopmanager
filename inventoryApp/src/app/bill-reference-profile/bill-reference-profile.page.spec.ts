import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillReferenceProfilePage } from './bill-reference-profile.page';

describe('BillReferenceProfilePage', () => {
  let component: BillReferenceProfilePage;
  let fixture: ComponentFixture<BillReferenceProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillReferenceProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillReferenceProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
