import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InportComponent } from './inport.component';

describe('InportComponent', () => {
  let component: InportComponent;
  let fixture: ComponentFixture<InportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
