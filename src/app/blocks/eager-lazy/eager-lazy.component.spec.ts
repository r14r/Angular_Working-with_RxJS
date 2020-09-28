import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagerLazyComponent } from './eager-lazy.component';

describe('EagerLazyComponent', () => {
  let component: EagerLazyComponent;
  let fixture: ComponentFixture<EagerLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagerLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagerLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
