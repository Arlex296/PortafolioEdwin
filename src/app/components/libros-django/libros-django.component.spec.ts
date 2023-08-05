import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosDjangoComponent } from './libros-django.component';

describe('LibrosDjangoComponent', () => {
  let component: LibrosDjangoComponent;
  let fixture: ComponentFixture<LibrosDjangoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibrosDjangoComponent]
    });
    fixture = TestBed.createComponent(LibrosDjangoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
