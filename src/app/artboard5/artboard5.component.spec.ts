import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Artboard5Component } from './artboard5.component';

describe('Artboard5Component', () => {
  let component: Artboard5Component;
  let fixture: ComponentFixture<Artboard5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Artboard5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Artboard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
