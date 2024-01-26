import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { UsuarioComponent } from './Pages/usuario/usuario.component';
import { AsignacionProyectosComponent } from './Pages/asignacion-proyectos/asignacion-proyectos.component';
import { ProyectosAsignadosComponent } from './Pages/proyectos-asignados/proyectos-asignados.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {path:'asignacion_proyectos',component:AsignacionProyectosComponent},
    {path:'usuarios',component:UsuarioComponent},
    {path:'proyectos_asignados',component:ProyectosAsignadosComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
