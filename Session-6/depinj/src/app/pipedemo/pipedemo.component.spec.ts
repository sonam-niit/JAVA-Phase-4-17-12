import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedemoComponent } from './pipedemo.component';

describe('PipedemoComponent', () => {
  let component: PipedemoComponent;
  let fixture: ComponentFixture<PipedemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipedemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
