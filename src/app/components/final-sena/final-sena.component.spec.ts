import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSenaComponent } from './final-sena.component';

describe('FinalSenaComponent', () => {
  let component: FinalSenaComponent;
  let fixture: ComponentFixture<FinalSenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalSenaComponent]
    });
    fixture = TestBed.createComponent(FinalSenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
