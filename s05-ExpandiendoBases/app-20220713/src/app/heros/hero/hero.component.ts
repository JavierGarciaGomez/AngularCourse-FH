import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
})
export class HeroComponent {
  name: string = 'Ironman';
  age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getName() {
    return `Retorno el nombre con un getName() = ${this.name}`;
  }

  changeName() {
    this.name = 'Hero name changed';
  }
  changeAge() {
    this.age = 25;
  }
}
