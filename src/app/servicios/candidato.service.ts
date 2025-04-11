import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../models/candidato.model';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  constructor(private http: HttpClient) { }

  editCandidato(user: { idcandidato: number; nombre: string;
                        correo: string;url: string;contrasena: string;
                        descripcion: string; }): Observable<Candidato> {
    return this.http.post<Candidato>("http://localhost:8080/api/candidatos/guardar", user);
  }


}


