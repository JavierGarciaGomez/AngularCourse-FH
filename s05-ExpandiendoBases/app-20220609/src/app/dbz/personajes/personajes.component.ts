import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  // @Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }
}
