import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddHeroComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  hero: Hero = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private herosService: HerosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.herosService.getHeroById(id)))
      .subscribe((hero) => (this.hero = hero));
  }

  saveHero = () => {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {
      // Actualizar
      this.herosService.updateHero(this.hero).subscribe((hero) => {
        console.log('UPDATED', { hero });
        this.showSnackbar('Registro actualizado');
      });
    } else {
      // Crear
      this.herosService.addHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heros/edit', hero.id]);
        this.showSnackbar('Registro creado');
      });
      // this.heroesService.agregarHeroe( this.heroe )
      //   .subscribe( heroe => {
      //     this.router.navigate(['/heroes/editar',.hero.id ]);
      //     this.mostrarSnakbar('Registro creado');
      //   })
    }
  };

  deleteHero = () => {
    this.herosService.deleteHero(this.hero.id!).subscribe((resp) => {
      this.router.navigate(['/heros']);
    });
  };

  showSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
}
