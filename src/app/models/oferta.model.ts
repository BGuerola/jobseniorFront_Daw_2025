export interface Empresa {
  idEmpresa: number;
  nombre: string;
}

export interface Profesion {
  idProfesion: number;
  nombreProfesion: string;
}

export interface Provincia {
  idProvincia: number;
  nombreProvincia: string;
}

export interface Oferta {
  idOferta: number;
  fecha: string;
  empresa: Empresa;
  profesion: Profesion;
  provincia: Provincia;
  descripcion: string;
}


