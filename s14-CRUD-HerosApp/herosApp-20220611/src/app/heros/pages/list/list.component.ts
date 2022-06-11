import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  constructor(private herosService: HerosService) {}
  heros: Hero[] = [];

  ngOnInit(): void {
    this.herosService
      .getHeros()
      .subscribe((response) => (this.heros = response));
  }
}
