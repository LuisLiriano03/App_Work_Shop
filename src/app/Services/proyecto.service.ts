import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseApi } from '../Interfaces/response-api';
import { Proyecto } from '../Interfaces/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private urlApi = environment.endpoint + "Proyecto/";

  constructor(private http:HttpClient) { }

  lista():Observable<ResponseApi>{
    return this.http.get<ResponseApi>(`${this.urlApi}Lista`)
  }

  obtenerProyectosAsignados(idUsuario: number): Observable<ResponseApi> {
    return this.http.get<ResponseApi>(`${this.urlApi}PorUsuario/${idUsuario}`);
  }

  guardar(request:Proyecto):Observable<ResponseApi>{
    return this.http.post<ResponseApi>(`${this.urlApi}Guardar`,request)
  }

  editar(request:Proyecto):Observable<ResponseApi>{
    return this.http.put<ResponseApi>(`${this.urlApi}Editar`,request)
  }

  eliminar(id:number):Observable<ResponseApi>{
    return this.http.delete<ResponseApi>(`${this.urlApi}Eliminar/${id}`)
  }

}
