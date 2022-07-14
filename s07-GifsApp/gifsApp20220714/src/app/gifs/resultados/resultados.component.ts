import { Component, OnInit } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  constructor(private gifsService: GifService) {}
  get resultados() {
    return this.gifsService.resultados;
  }

  ngOnInit(): void {}
}
