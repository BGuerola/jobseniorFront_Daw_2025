import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inscritos',
  templateUrl: './inscritos.component.html',
  styleUrl: './inscritos.component.css'
})
export class InscritosComponent {
  @Output() cambiarCand = new EventEmitter<string>();

  ofertasFiltradas: any[] = [];

  irAmpList(oferta: any) {
    console.log('Ampliando oferta Cand:', oferta);
    this.cambiarCand.emit('ampl-ofert-cand');
  }


}
