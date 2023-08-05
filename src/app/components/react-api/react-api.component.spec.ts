import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactApiComponent } from './react-api.component';

describe('ReactApiComponent', () => {
  let component: ReactApiComponent;
  let fixture: ComponentFixture<ReactApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactApiComponent]
    });
    fixture = TestBed.createComponent(ReactApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
