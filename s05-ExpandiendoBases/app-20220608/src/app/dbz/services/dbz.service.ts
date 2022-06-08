import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService{

    constructor(){
        console.log('Servicio inicializado');        
    }

    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 10 },
        { nombre: 'Vegeta', poder: 100 },
      ];

      get personajes(): Personaje[] {
        return [...this._personajes];
    }

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }
    

}