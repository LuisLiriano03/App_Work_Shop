import { Component, Inject, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proyecto } from 'src/app/Interfaces/proyecto';
import { Usuario } from 'src/app/Interfaces/usuario';
import { ProyectoService } from 'src/app/Services/proyecto.service';
import { UtilidadesService } from 'src/app/Reutilizable/utilidades.service';
import { UsuarioService } from 'src/app/Services/usuario.service';

@Component({
  selector: 'app-modal-asignacion-proyecto',
  templateUrl: './modal-asignacion-proyecto.component.html',
  styleUrls: ['./modal-asignacion-proyecto.component.css']
})
export class ModalAsignacionProyectoComponent implements OnInit {

  formularioAsignacionProyectos: FormGroup;
  tituloAccion: string = "Agregar";
  botonAccion: string = "Guardar";
  listaUsuario: Usuario[] = [];

  constructor(
    private modalActual: MatDialogRef<ModalAsignacionProyectoComponent>,
    @Inject(MAT_DIALOG_DATA) public datosProyecto: Proyecto,
    private fb: FormBuilder,
    private _proyectoServicio: ProyectoService,
    private _usuarioServicio: UsuarioService,
    private _utilidadesServicio: UtilidadesService
  ) { 

    this.formularioAsignacionProyectos = this.fb.group({
      descripcion : ['', Validators.required],
      idUsuario : ['', Validators.required]
    });

    if(this.datosProyecto != null){
      this.tituloAccion = "Editar";
      this.botonAccion = "Actualizar";
    }

    this._usuarioServicio.lista().subscribe({
      next : (response) => {
        if(response.status) this.listaUsuario = response.value
      },
      error : (e) => {}
    })

  }

  ngOnInit(): void {
    if(this.datosProyecto != null){
      this.formularioAsignacionProyectos.patchValue({
        descripcion : this.datosProyecto.descripcion,
        idUsuario : this.datosProyecto.idUsuario
      })

    }
  }

  guardarEditar_Proyecto(){

    const _proyecto : Proyecto = {
      idProyecto : this.datosProyecto == null ? 0 : this.datosProyecto.idProyecto,
      descripcion : this.formularioAsignacionProyectos.value.descripcion,
      idUsuario : this.formularioAsignacionProyectos.value.idUsuario,
      descripcionUsuario: ""
    }

    if(this.datosProyecto == null){

      this._proyectoServicio.guardar(_proyecto).subscribe({
        next : (response) => {
          if(response.status){
            this._utilidadesServicio.mostrarAlerta("El proyecto fue registrado","Exicto");
            this.modalActual.close("true");
          }else
            this._utilidadesServicio.mostrarAlerta("No se pudo registrar el proyecto","Error");
        },
        error : (e) => {}
      })

    }else{

      this._proyectoServicio.editar(_proyecto).subscribe({
        next : (response) => {
          if(response.status){
            this._utilidadesServicio.mostrarAlerta("El proyecto fue editado","Exicto");
            this.modalActual.close("true");
          }else
            this._utilidadesServicio.mostrarAlerta("No se pudo editadar el proyecto","Error");
        },
        error : (e) => {}
      })

    }

  }

}
