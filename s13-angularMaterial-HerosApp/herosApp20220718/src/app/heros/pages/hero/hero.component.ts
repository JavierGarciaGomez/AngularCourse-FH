import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from '../../services/heros.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private herosService: HerosService,
    private router: Router
  ) {}
  hero!: Hero;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap((hero) => this.herosService.getHeroById(hero.id)))
      .subscribe((hero) => (this.hero = hero));
  }
  return() {
    this.router.navigate(['/heros/list']);
  }
}
