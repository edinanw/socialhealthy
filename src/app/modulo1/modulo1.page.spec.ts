import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo1Page } from './modulo1.page';

describe('Modulo1Page', () => {
  let component: Modulo1Page;
  let fixture: ComponentFixture<Modulo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Modulo1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Modulo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
