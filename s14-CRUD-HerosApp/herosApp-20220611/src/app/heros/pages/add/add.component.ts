import { Component, OnInit } from '@angular/core';
import { Hero, Publisher } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { switchMap } from 'rxjs/operators';
import { ConfirmarComponent } from '../../components/hero-card/confirmar/confirmar.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  constructor(
    private herosService: HerosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

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
    id: '',
    superhero: '',
    publisher: Publisher.DCComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
  };

  ngOnInit(): void {
    this.router.url.includes('editar') &&
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.herosService.getHeroById(id)))
        .subscribe((heroe) => (this.hero = heroe));
  }

  guardar() {
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {
      // Actualizar
      this.herosService
        .updateHero(this.hero)
        .subscribe((heroe) => this.mostrarSnakbar('Registro actualizado'));
    } else {
      // Crear
      this.herosService.addHero(this.hero).subscribe((hero) => {
        this.router.navigate(['/heroes/editar', hero.id]);
        this.mostrarSnakbar('Registro creado');
      });
    }
  }

  borrarHeroe() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.hero,
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.herosService.deleteHero(this.hero.id!).subscribe((resp) => {
          this.router.navigate(['/heroes']);
        });
      }
    });
  }
  mostrarSnakbar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
}
