import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutportComponent } from './outport.component';

describe('OutportComponent', () => {
  let component: OutportComponent;
  let fixture: ComponentFixture<OutportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
