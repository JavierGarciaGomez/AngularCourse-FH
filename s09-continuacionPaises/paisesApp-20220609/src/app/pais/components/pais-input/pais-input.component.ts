import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [],
})
export class PaisInputComponent implements OnInit {
  constructor(private paisService: PaisService) {}
  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  hayError: boolean = false;
  paises: Country[] = [];

  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
  buscar() {
    this.onEnter.emit(this.termino);
    this.debouncer.subscribe();
    // this.hayError = false;
    // this.paisService.buscarPais(this.termino).subscribe(
    //   (countries) => {
    //     console.log('resp', countries);
    //     this.paises = countries;
    //   },
    //   (err) => {
    //     this.hayError = true;
    //     console.log('error', err.message);
    //   }
    // );
    // console.log('these are the results', result);
  }
}
