import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniDetailsComponent } from './mini-details.component';

describe('MiniDetailsComponent', () => {
  let component: MiniDetailsComponent;
  let fixture: ComponentFixture<MiniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
