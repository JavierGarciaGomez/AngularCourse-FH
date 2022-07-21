import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { FormControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[customMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;

  constructor() {
    console.log('DIRECTIVA', this.minimo);
  }
  validate(control: FormControl): ValidationErrors | null {
    const inputValue = control.value;
    console.log('DIRECTIVA', inputValue);
    return inputValue < this.minimo ? { customMin: true } : null;
  }
}
