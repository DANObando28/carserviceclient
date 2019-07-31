import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarownerlistComponent } from './carownerlist.component';

describe('CarownerlistComponent', () => {
  let component: CarownerlistComponent;
  let fixture: ComponentFixture<CarownerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarownerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarownerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
