import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpresaService } from '../../servicios/empresa.service';

@Component({
  selector: 'app-descri-emp',
  templateUrl: './descri-emp.component.html',
  styleUrl: './descri-emp.component.css'
})
export class DescriEmpComponent {
  idempresa = '';
  nombre = '';
  correo = '';
  url = '';
  descripcion = '';

  constructor(private router: Router, public empresaService: EmpresaService) {}


}
