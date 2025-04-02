import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Oferta } from '../models/oferta.model';

@Component({
  selector: 'app-ampl-llist-ofert',
  templateUrl: './ampl-llist-ofert.component.html',
  styleUrl: './ampl-llist-ofert.component.css'
})
export class AmplLlistOfertComponent {
  //@Input() oferta!: Oferta;
  @Input() oferta: Oferta | null = null;
  @Output() cambiarComponente = new EventEmitter<string>();

  irAFiltre() {
    //anar a pag candidat

    this.cambiarComponente.emit('filtro');
  }

  inscribirse(oferta: any) { {
    console.log("inscribirse: ", oferta);
    this.cambiarComponente.emit('cand');
  }
}
}

