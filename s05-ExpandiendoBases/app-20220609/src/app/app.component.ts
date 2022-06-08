import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'App-20220608';
  number = 12;
  // 40
  taskBase = 5;

  add() {
    this.number++;
  }
  substract() {
    this.number--;
  }
  acumular(value: number) {
    this.number = this.number + value;
  }

  taskadd(isAdd: boolean) {
    this.number = isAdd
      ? this.number + this.taskBase
      : this.number - this.taskBase;
  }
}

// {
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// }
