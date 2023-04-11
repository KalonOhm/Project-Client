import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinisComponent } from './minis.component';

describe('MinisComponent', () => {
  let component: MinisComponent;
  let fixture: ComponentFixture<MinisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
