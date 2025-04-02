import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ampl-ofert-cand',
  templateUrl: './ampl-ofert-cand.component.html',
  styleUrl: './ampl-ofert-cand.component.css'
})
export class AmplOfertCandComponent {
  @Input() oferta: any;
  @Output() cambiarCand = new EventEmitter<string>();

  AInscritos(oferta: any) { {
    console.log("inscribirse: ", oferta);
    this.cambiarCand.emit('insc');
  }
}
}
