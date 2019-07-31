import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnereditComponent } from './owner-edit.component';

describe('OwnereditComponent', () => {
  let component: OwnereditComponent;
  let fixture: ComponentFixture<OwnereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
