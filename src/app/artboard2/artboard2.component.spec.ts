import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Artboard2Component } from './artboard2.component';

describe('Artboard2Component', () => {
  let component: Artboard2Component;
  let fixture: ComponentFixture<Artboard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Artboard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Artboard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
