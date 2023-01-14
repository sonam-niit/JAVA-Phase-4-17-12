import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatainteractionComponent } from './datainteraction.component';

describe('DatainteractionComponent', () => {
  let component: DatainteractionComponent;
  let fixture: ComponentFixture<DatainteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatainteractionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatainteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
