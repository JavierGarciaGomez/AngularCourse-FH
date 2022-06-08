import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

// export interface Personaje {
//   nombre: string;
//   poder: number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent implements OnInit {
  // personajes: Personaje[]=[];
  constructor(private dbzService: DbzService) {
    // this.personajes = this.dbzService.personajes
    console.log('MainPagecomponent constructor called')
  }

  ngOnInit(): void {}



  // personajes: Personaje[] = [
  //   { nombre: 'Goku', poder: 10 },
  //   { nombre: 'Vegeta', poder: 100 },
  // ];

  newCharacter: Personaje = {
    nombre: 'ra',
    poder: 0,
  };
  // agregar(e: any) {
  //   console.log(this.newCharacter);
  //   if (this.newCharacter.nombre.trim().length === 0) {
      
  //     return;
  //   }
  //   this.personajes.push(this.newCharacter)
  //     this.newCharacter={nombre: '', poder: 0}
  //     console.log(this.personajes)
  //   // e.preventDefault();

    
  // }
  cambiarNombre(e: any) {
    console.log('changing name');
    
  }

  // addNewCharacter(personaje: Personaje){
  //   // debugger;
  //   this.personajes.push(personaje)

  // }
}
