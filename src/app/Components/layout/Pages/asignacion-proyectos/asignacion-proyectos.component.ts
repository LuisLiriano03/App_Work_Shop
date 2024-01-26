import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ModalAsignacionProyectoComponent } from '../../Modales/modal-asignacion-proyecto/modal-asignacion-proyecto.component';
import { Proyecto } from 'src/app/Interfaces/proyecto';
import { ProyectoService } from 'src/app/Services/proyecto.service';
import { UtilidadesService } from 'src/app/Reutilizable/utilidades.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignacion-proyectos',
  templateUrl: './asignacion-proyectos.component.html',
  styleUrls: ['./asignacion-proyectos.component.css']
})
export class AsignacionProyectosComponent implements OnInit,AfterViewInit {

  columnasTabla: string[] = ['descripcion','usuario','acciones'];
  dataInicio: Proyecto[] = [];
  dataListaProyecto = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla! : MatPaginator;

  constructor(
    private dialog : MatDialog,
    private _proyectoService : ProyectoService,
    private _utilidadesService : UtilidadesService
  ) { }

  obtenerProyectos(){
    this._proyectoService.lista().subscribe({
      next : (response) => {
        if(response.status)
          this.dataListaProyecto.data = response.value;
        else
          this._utilidadesService.mostrarAlerta("No se encontraron datos","Oops!")
      },
      error : (e) => {}
    })
  }

  ngOnInit(): void {
    this.obtenerProyectos();
  }

  ngAfterViewInit(): void {
    this.dataListaProyecto.paginator = this.paginacionTabla;
  }

  aplicarFiltroTabla(event : Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaProyecto.filter = filterValue.trim().toLocaleLowerCase();
  }

  nuevoProyecto(){
    this.dialog.open(ModalAsignacionProyectoComponent,{
      disableClose : true
    }).afterClosed().subscribe(resultado => {
      if(resultado == "true") this.obtenerProyectos();
    });
  }

  editarProyecto(proyecto:Proyecto){
    this.dialog.open(ModalAsignacionProyectoComponent,{
      disableClose : true,
      data : proyecto
    }).afterClosed().subscribe(resultado => {
      if(resultado == "true") this.obtenerProyectos();
    });
  }

  eliminarProyecto(proyecto:Proyecto){

    Swal.fire({
      title:'Desea eliminar el proyecto?',
      text:proyecto.descripcion,
      icon:"warning",
      confirmButtonColor:'#3085d6',
      confirmButtonText:"Si eliminar",
      showCancelButton:true,
      cancelButtonColor:'#d33',
      cancelButtonText:'No, volver'
    }).then((resultado)=>{
      if(resultado.isConfirmed){
        this._proyectoService.eliminar(proyecto.idProyecto).subscribe({
          next:(response)=>{
            if(response.status){
              this._utilidadesService.mostrarAlerta("El proyecto fue eliminado","Listo!");
              this.obtenerProyectos();
            }else{
              this._utilidadesService.mostrarAlerta("No se pudo eliminar el proyecto","Error");
            }
          },
          error:(e)=>{}
        })
      }
    })

  }

}
