import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncAsyncComponent } from './sync-async.component';

describe('SyncAsyncComponent', () => {
  let component: SyncAsyncComponent;
  let fixture: ComponentFixture<SyncAsyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncAsyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
