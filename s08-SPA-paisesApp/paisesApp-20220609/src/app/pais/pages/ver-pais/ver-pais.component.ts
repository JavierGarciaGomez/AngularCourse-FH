import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  countries!: Country[];
  country!: Country;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getCountryById(id)),
        tap(console.log)
      )
      .subscribe((countries) => (this.country = countries[0]));

    // this.activatedRoute.params.subscribe(({ id }) => {
    //   this.paisService.getCountryById(id).subscribe((country) => {
    //     console.log('country found', country);
    //     // this.country = country;
    //   });
    // });
  }
}
