import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveLineComponent } from './active-line.component';

describe('ActiveLineComponent', () => {
  let component: ActiveLineComponent;
  let fixture: ComponentFixture<ActiveLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
