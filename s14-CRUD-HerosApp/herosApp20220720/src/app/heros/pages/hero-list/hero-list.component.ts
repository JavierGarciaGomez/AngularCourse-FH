import { Component, OnInit } from '@angular/core';
import { HerosService } from '../../services/heros.service';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styles: [],
})
export class HeroListComponent implements OnInit {
  constructor(private herosService: HerosService) {}
  heros: Hero[] = [];

  ngOnInit(): void {
    this.herosService.getHeros().subscribe((heros) => {
      console.log('HEROLISTCOMP', heros);
      this.heros = heros;
    });
  }
}
