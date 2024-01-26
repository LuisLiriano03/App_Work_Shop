import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Menu } from 'src/app/Interfaces/menu';
import { MenuService } from 'src/app/Services/menu.service';
import { UtilidadesService } from 'src/app/Reutilizable/utilidades.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  listaMenus: Menu[] = []
  nombreUsuario: string = '';
  rolUsuario: string = '';


  constructor(
    private router:Router,
    private _menuService:MenuService,
    private _utilidadesService:UtilidadesService
  ) { }

  ngOnInit(): void {
    const usurio = this._utilidadesService.obtenerSesionUsuario();

    if(usurio != null){
      this.nombreUsuario = usurio.nombreCompleto;
      this.rolUsuario = usurio.rolDescripcion;

      this._menuService.lista(usurio.idUsuario).subscribe({
        next: (response) =>{
          if(response.status) this.listaMenus = response.value;
        },
        error: (e) => {}
      })

    }

  }

  cerrarSesion(){
    this._utilidadesService.eliminarSesionUsuario();
    this.router.navigate(['login']);
  }


}
