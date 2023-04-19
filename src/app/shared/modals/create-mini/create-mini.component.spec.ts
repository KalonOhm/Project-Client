import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMiniComponent } from './create-mini.component';

describe('CreateMiniComponent', () => {
  let component: CreateMiniComponent;
  let fixture: ComponentFixture<CreateMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
