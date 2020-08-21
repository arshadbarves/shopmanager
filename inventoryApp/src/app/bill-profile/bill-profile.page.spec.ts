import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillProfilePage } from './bill-profile.page';

describe('BillProfilePage', () => {
  let component: BillProfilePage;
  let fixture: ComponentFixture<BillProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
