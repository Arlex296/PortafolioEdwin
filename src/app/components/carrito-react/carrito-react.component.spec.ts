import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoReactComponent } from './carrito-react.component';

describe('CarritoReactComponent', () => {
  let component: CarritoReactComponent;
  let fixture: ComponentFixture<CarritoReactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoReactComponent]
    });
    fixture = TestBed.createComponent(CarritoReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
