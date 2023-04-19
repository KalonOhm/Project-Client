import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMiniComponent } from './edit-mini.component';

describe('EditMiniComponent', () => {
  let component: EditMiniComponent;
  let fixture: ComponentFixture<EditMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
