import { Directive, ElementRef } from '@angular/core';
import { QuoteComponent } from './quote/quote.component'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {

    this.elem.nativeElement.style.background = "green"
  }
}

