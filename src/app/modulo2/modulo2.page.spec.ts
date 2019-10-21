import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2Page } from './modulo2.page';

describe('Modulo2Page', () => {
  let component: Modulo2Page;
  let fixture: ComponentFixture<Modulo2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
