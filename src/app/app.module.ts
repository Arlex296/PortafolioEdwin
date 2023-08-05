import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {APP_ROUTING} from './app.routes'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { PdfcurriculumComponent } from './components/pdfcurriculum/pdfcurriculum.component';

import { CertificadosComponent } from './components/certificados/certificados.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';
import { FootersComponent } from './components/footers/footers.component';
import { FinalSenaComponent } from './components/final-sena/final-sena.component';
import { CarritoReactComponent } from './components/carrito-react/carrito-react.component';
import { ReactApiComponent } from './components/react-api/react-api.component';
import { LadingUniformesComponent } from './components/lading-uniformes/lading-uniformes.component';
import { LibrosDjangoComponent } from './components/libros-django/libros-django.component';




@NgModule({
  declarations: [
    AppComponent,
    
   

        NavbarComponent,
             PrincipalComponent,
             PdfcurriculumComponent,
             CertificadosComponent,
             ContactoComponent,
             ProyectosComponent,
             LenguajesComponent,
             FootersComponent,
             FinalSenaComponent,
             CarritoReactComponent,
             ReactApiComponent,
             LadingUniformesComponent,
             LibrosDjangoComponent,
            
            
      
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    APP_ROUTING

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
