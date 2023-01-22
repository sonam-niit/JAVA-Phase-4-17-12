import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstuComponent } from './addstu.component';

describe('AddstuComponent', () => {
  let component: AddstuComponent;
  let fixture: ComponentFixture<AddstuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
