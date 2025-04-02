import { Component } from '@angular/core';
import { FiltroOfertasService } from '../servicios/filtro-ofertas.service';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
  host: { 'ngSkipHydration': '' } // Para deshabilitar la hidratación si sigue fallando
})

export class PrincipalComponent {

  ofertas: any[] = [];
  componenteActual: string = 'filtro';
  vista: string = 'filtre-ofertes';
  ofertaSeleccionada: Oferta | null = null;

cambiarVista(event: { componente: string; oferta: Oferta }) {
  this.vista = event.componente;  // Cambia la vista
  this.ofertaSeleccionada = event.oferta;  // Guarda la oferta seleccionada
}

  cambiarComponente(nuevoComponente: string) {
    this.componenteActual = nuevoComponente;
  }

  constructor(private filtroOfertasService: FiltroOfertasService) {}

  cargarOfertas(filtros: any) {
    this.filtroOfertasService.getOfertas(filtros).subscribe(ofertas => {
      this.ofertas = ofertas;
    });
  }
}




