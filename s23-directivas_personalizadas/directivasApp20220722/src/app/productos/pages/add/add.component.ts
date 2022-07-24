import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  color: string = 'purple';
  message: string = 'Mensaje pasado del componente a la directiva';

  myForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
  });

  ngOnInit(): void {}

  itHasErrors(field: string): boolean {
    return this.myForm.get(field)?.valid || false;
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }

  changeColor() {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.color = color;
  }
}
