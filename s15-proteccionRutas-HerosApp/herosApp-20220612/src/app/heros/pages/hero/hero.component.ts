import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private herosService: HerosService) { }
  hero!: Hero;

  ngOnInit(): void {
    this.activatedRoute.params.pipe(switchMap(({id}) => this.herosService.getHeroById(id))).subscribe(hero => this.hero=hero);
  
  }

  return(){}

}
