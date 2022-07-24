import { Directive, OnInit, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
    console.log('DIRECTIVE ERRORMSG Constructor ', {
      element: this.htmlElement,
    });
    // this.htmlElement.nativeElement.style.color = this._color;
  }

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor: string) {
    console.log('DIRECTIVE ERRORMSG Set COLOR', valor);
    this._color = valor;
    this.setColor();
  }

  @Input() set message(valor: string) {
    this._mensaje = valor;
    this.setMessage();
  }

  @Input() set isValid(valor: boolean) {
    if (valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  private _color: string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  ngOnInit(): void {
    console.log('DIRECTIVE ERRORMSG Directive');
    this.setColor();
    this.setStyle();
    this.setMessage();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMessage(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

  setStyle(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
