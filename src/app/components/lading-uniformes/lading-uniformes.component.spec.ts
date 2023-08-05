import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingUniformesComponent } from './lading-uniformes.component';

describe('LadingUniformesComponent', () => {
  let component: LadingUniformesComponent;
  let fixture: ComponentFixture<LadingUniformesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LadingUniformesComponent]
    });
    fixture = TestBed.createComponent(LadingUniformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
