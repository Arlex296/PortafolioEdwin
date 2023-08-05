import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfcurriculumComponent } from './pdfcurriculum.component';

describe('PdfcurriculumComponent', () => {
  let component: PdfcurriculumComponent;
  let fixture: ComponentFixture<PdfcurriculumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfcurriculumComponent]
    });
    fixture = TestBed.createComponent(PdfcurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
