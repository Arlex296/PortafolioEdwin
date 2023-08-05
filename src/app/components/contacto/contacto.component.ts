import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  isCelularCollapsed: boolean = false;
  isGmailCollapsed: boolean = false;

  toggleCollapse(type: string): void {
    if (type === 'celular') {
      this.isCelularCollapsed = !this.isCelularCollapsed;
      this.isGmailCollapsed = false; 
    } else if (type === 'gmail') {
      this.isGmailCollapsed = !this.isGmailCollapsed;
      this.isCelularCollapsed = false; 
    }
  }
  
}
