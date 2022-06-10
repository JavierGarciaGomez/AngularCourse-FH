import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'pipesApp-20220609';
  name: string = 'Javi garcía';
  value: number = 1000;
  obj = {
    name: this.name,
    value: this.value,
  };

  showName() {
    console.log('this is the name', this.name);
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
