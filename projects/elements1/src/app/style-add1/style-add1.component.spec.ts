import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAdd1Component } from './style-add1.component';

describe('StyleAdd1Component', () => {
  let component: StyleAdd1Component;
  let fixture: ComponentFixture<StyleAdd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleAdd1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleAdd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
