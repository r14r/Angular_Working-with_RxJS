import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleValuesComponent } from './multiple-values.component';

describe('MultipleValuesComponent', () => {
  let component: MultipleValuesComponent;
  let fixture: ComponentFixture<MultipleValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
