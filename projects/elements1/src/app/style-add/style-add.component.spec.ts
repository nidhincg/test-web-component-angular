import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAddComponent } from './style-add.component';

describe('StyleAddComponent', () => {
  let component: StyleAddComponent;
  let fixture: ComponentFixture<StyleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
