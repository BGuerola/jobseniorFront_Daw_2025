import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  editEmpresa(user: { idempresa: number; nombre: string;
                        correo: string;url: string;contrasena: string;
                        descripcion: string; }): Observable<Empresa> {
    return this.http.post<Empresa>("http://localhost:8080/api/empresas/guardar", user);
  }



}
