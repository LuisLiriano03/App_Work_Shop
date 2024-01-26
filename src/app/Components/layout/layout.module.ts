import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { AsignacionProyectosComponent } from './Pages/asignacion-proyectos/asignacion-proyectos.component';
import { ProyectosAsignadosComponent } from './Pages/proyectos-asignados/proyectos-asignados.component';
import { SharedModule } from 'src/app/Reutilizable/shared/shared.module';
import { ModalUsuarioComponent } from './Modales/modal-usuario/modal-usuario.component';
import { ModalAsignacionProyectoComponent } from './Modales/modal-asignacion-proyecto/modal-asignacion-proyecto.component';


@NgModule({
  declarations: [
    UsuarioComponent,
    AsignacionProyectosComponent,
    ProyectosAsignadosComponent,
    ModalUsuarioComponent,
    ModalAsignacionProyectoComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
