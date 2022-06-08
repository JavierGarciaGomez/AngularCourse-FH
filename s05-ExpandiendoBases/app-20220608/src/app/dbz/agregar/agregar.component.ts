import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',  
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService: DbzService) { }

  ngOnInit(): void {
  }


  @Input() newCharacter: Personaje = {nombre: '', poder: 0};
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();

  agregar(e: any) {
    console.log(this.newCharacter);
    if (this.newCharacter.nombre.trim().length === 0) {
      
      return;
    }
    // this.onNewCharacter.emit(this.newCharacter);
    // this.personajes.push(this.newCharacter)
      // this.newCharacter={nombre: '', poder: 0}
      // console.log(this.personajes)
    // e.preventDefault();
    this.dbzService.agregarPersonaje(this.newCharacter)

    
  }

}
