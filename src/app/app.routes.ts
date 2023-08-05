
import { RouterModule, Routes } from "@angular/router";

import { CertificadosComponent} from "./components/certificados/certificados.component";

import {ContactoComponent} from "./components/contacto/contacto.component";
import {PrincipalComponent } from './components/principal/principal.component';
import { ProyectosComponent } from "./components/proyectos/proyectos.component";
import { LenguajesComponent } from "./components/lenguajes/lenguajes.component";

const APP_ROUTES: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'certificado', component: CertificadosComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'lenguajes', component: LenguajesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);