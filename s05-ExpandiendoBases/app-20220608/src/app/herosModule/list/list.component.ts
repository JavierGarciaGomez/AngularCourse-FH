import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list2',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  constructor() {
    console.log('ListComponent constructor');
  }

  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  deletedHero: string = '';

  ngOnInit(): void {
    console.log('ListComponent ngOnInit');
  }

  deleteHero() {
    this.deletedHero = this.heros.pop() || '';
  }
}
