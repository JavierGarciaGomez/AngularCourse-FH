import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}
  name: string = 'javi';
  value: number = 1000;
  obj = {
    name: this.name,
    value: this.value,
  };
  showName = (): string => this.name;
  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
