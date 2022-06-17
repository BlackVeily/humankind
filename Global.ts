class Efecto {
  condicion: string;
  coste: string;
  descripcion: string;
}

class Carta {
  id: string;
  nombre: string;
  efecto: Efecto[];
  descripcion: string;
  restriccion: number;
}

class Santuario extends Carta {
  p_estructura: number;
  p_voluntad: number;
  n_aditamentos: number;

  constructor() {
    this.restriccion = 1;
  }
}

class Personaje extends Carta {
  c_voluntad: number;
  fuerza: number;
  don: string;
}

class Ficha extends Personaje {
  constructor() {
    this.c_voluntad = 0;
  }
}
