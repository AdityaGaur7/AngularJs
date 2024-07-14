import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]',
  standalone: true
})
export class RedDirective {

  constructor(public el: ElementRef) {
    this.el.nativeElement.style.color = 'red';
  }
}
