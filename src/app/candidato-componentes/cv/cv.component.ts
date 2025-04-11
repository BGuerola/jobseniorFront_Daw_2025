import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from '../../servicios/candidato.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent {
  idcandidato = '';
  nombre = '';
  correo = '';
  url = '';
  descripcion = '';

  constructor(private router: Router, public candidatoService: CandidatoService) {}


}

