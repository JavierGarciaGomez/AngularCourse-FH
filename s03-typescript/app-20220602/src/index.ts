console.log("Hola Mundo!");

/*
    ===== Código de TypeScript =====
*/

console.log(
  "**************************Lección 14. Tipos básicos y conceptos generales**************************"
);

let nombre: string = "Strider";
let hp: number | string = 95;
let estaVivo: boolean = true;

hp = "FULL";

console.log(nombre, hp);

console.log(
  "**************************Lección 15. Arrays and objects**************************"
);

let habilidades: string[] = ["Bash", "Counter", "Healing"];

interface Personaje {
  nombre: string;
  hp: number;
  habilidades: string[];
  puebloNatal?: string;
}

const personaje: Personaje = {
  nombre: "Strider",
  hp: 100,
  habilidades: ["Bash", "Counter", "Healing"],
};
("");

personaje.puebloNatal = "Pueblo Paleta";

console.table(personaje);

console.log(
  "**************************Lección 16. Funciones**************************"
);

function sumar(a: number, b: number): number {
  return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
  return a + b;
};

function multiplicar(
  numero: number,
  otroNumero?: number,
  base: number = 2
): number {
  return numero * base;
}

console.log(
  "**************************Lección 17. Funciones con objetos**************************"
);

interface PersonajeLOR {
  nombre: string;
  pv: number;
  mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
  personaje.pv += curarX;
  console.log({ ...personaje }, "curado");
}

const nuevoPersonaje: PersonajeLOR = {
  nombre: "Strider2",
  pv: 50,
  mostrarHp() {
    console.log("Puntos de vida:", this.pv);
  },
};
nuevoPersonaje.mostrarHp();

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();

console.log(
  "**************************Lección 18. Tarea **************************"
);

interface SuperHero {
  nombre: string;
  edad: number;
  direccion: Address;
  mostrarDireccion: () => string;
}

interface Address {
  calle: string;
  pais: string;
  ciudad: string;
}
const superHeroe: SuperHero = {
  nombre: "Spiderman",
  edad: 30,
  direccion: {
    calle: "Main St",
    pais: "USA",
    ciudad: "NY",
  },
  mostrarDireccion() {
    return (
      this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais
    );
  },
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

console.log(
  "**************************Lección 19. Desestructuración **************************"
);

interface Reproductor {
  volumen: number;
  segundo: number;
  cancion: string;
  detalles: Detalles;
}

interface Detalles {
  autor: string;
  anio: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    autor: "Ed Sheeran",
    anio: 2015,
  },
};

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log('El volumen actual de: ', volumen );
// console.log('El segundo actual de: ', segundo );
// console.log('La canción actual de: ', cancion );
// console.log('El autor es: ', autor );

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = dbz;

// console.log('Personaje 1:', p1 );
// console.log('Personaje 2:', p2 );
console.log("Personaje 3:", p3);

console.log(
  "**************************Lección 21. Desestructuración de argumentos **************************"
);
export interface Producto {
  desc: string;
  precio: number;
}

const telefono: Producto = {
  desc: "Nokia A1",
  precio: 150,
};

const tableta: Producto = {
  desc: "iPad Air",
  precio: 350,
};

export function calculaISV(productos: Producto[]): [number, number] {
  let total = 0;

  productos.forEach(({ precio }) => {
    total += precio;
  });

  return [total, total * 0.15];
}

const articulos = [telefono, tableta];

const [total, isv] = calculaISV(articulos);

console.log("Total:", total);
console.log("ISV:", isv);

console.log(
  "**************************Lección 23. Clases **************************"
);

class PersonaNormal {
  constructor(public nombre: string, public direccion: string) {}
}

class Heroe extends PersonaNormal {
  constructor(
    public alterEgo: string,
    private edad: number,
    public nombreReal: string
  ) {
    super(nombreReal, "New York, USA");
  }
}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman);

console.log(
  "**************************Lección 24. Genéricos **************************"
);
function queTipoSoy<T>(argumento: T): T {
  return argumento;
}

let soyString = queTipoSoy("Hola Mundo");
let soyNumbero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let soyExplicito = queTipoSoy<number>(100);

console.log(
  "**************************Lección 25. Decoradores **************************"
);
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MiSuperClase {
  public miPropiedad: string = "ABC123";

  imprimir() {
    console.log("Hola Mundo");
  }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase);

console.log(
  "**************************Lección 26. Encadenamiento opcional **************************"
);

interface Pasajero {
  nombre: string;
  hijos?: string[];
}

const pasajero1: Pasajero = {
  nombre: "Fernando",
};

const pasajero2: Pasajero = {
  nombre: "Melissa",
  hijos: ["Natalia", "Gabriel"],
};

function imprimeHijos(pasajero: Pasajero): void {
  const cuantosHijos = pasajero.hijos?.length || 0;

  console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
