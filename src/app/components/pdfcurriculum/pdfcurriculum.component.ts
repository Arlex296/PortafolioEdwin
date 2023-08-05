import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-pdfcurriculum',
  templateUrl: './pdfcurriculum.component.html',
  styleUrls: ['./pdfcurriculum.component.css']
})
export class PdfcurriculumComponent {
 
    constructor(private http: HttpClient) {}
  
    downloadFile() {
      // Reemplaza por la URL del archivo PDF que deseas descargar
      const url = '../../../assets/pdf/Hoja de Vida Edwin.pdf';


      this.http.get(url, { responseType: 'blob' }).subscribe(response => {
        const blob = new Blob([response], { type: 'application/pdf' });
        FileSaver.saveAs(blob, 'Edwin.pdf'); // Puedes cambiar el nombre del archivo si lo deseas
      });
    }
}
