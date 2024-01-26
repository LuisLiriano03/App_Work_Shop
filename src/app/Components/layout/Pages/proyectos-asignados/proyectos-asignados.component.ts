import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/Services/proyecto.service';
import { ResponseApi } from 'src/app/Interfaces/response-api';
import { ActivatedRoute } from '@angular/router';
import { UtilidadesService } from 'src/app/Reutilizable/utilidades.service';
import { Proyecto } from 'src/app/Interfaces/proyecto';

@Component({
  selector: 'app-proyectos-asignados',
  templateUrl: './proyectos-asignados.component.html',
  styleUrls: ['./proyectos-asignados.component.css']
})
export class ProyectosAsignadosComponent implements OnInit {

  proyectosAsignados: Proyecto[] = [];

  constructor(
    private proyectoService: ProyectoService,
    private utilidadesServices: UtilidadesService
    ) { }

  ngOnInit(): void {
    const usuario = this.utilidadesServices.obtenerSesionUsuario();
    
    if (usuario) {
      const idUsuario = usuario.idUsuario;

      this.proyectoService.obtenerProyectosAsignados(idUsuario).subscribe(
        (response) => {
          if (response.status) {
            this.proyectosAsignados = response.value;
          } else {
            this.utilidadesServices.mostrarAlerta('Error al obtener proyectos asignados', 'error')
          }
        },
        (error) => {
          this.utilidadesServices.mostrarAlerta('Error de conexión', 'error');
        }
      );
    } else {
      this.utilidadesServices.mostrarAlerta('Usuario no autenticado', 'warning');
    }
  }

}
