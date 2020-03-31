import { Directive, ElementRef, Input } from '@angular/core';
import { QuoteEntry } from './quote-entry'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quotes:QuoteEntry[];
  
  constructor(private elem:ElementRef) { }

    check(){
      let quoteUpvotes = []
      for(let j = 0; j<this.quotes.length; j++)
      {
        quoteUpvotes.push(this.quotes[j].upvotes)
      }
  
      quoteUpvotes.sort(function(a,b){return b-a})
  
      for(let j = 0; j<this.quotes.length; j++)
      {
        if (quoteUpvotes[0]=== this.quotes[j].upvotes){
          this.elem.nativeElement.style.background ='yellow'
        }
      }
    }
   
  
 
}
