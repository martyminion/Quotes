import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { QuoteEntry } from './quote-entry'

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() quotes:QuoteEntry[];
  
  constructor(private elem:ElementRef) { }

    // private textDeco(action:string){
    //   this.elem.nativeElement.style.background = action;
    // }

    
      public check(){
      let quoteUpvotes = []
      for(let j = 0; j<this.quotes.length; j++)
      {
        quoteUpvotes.push(this.quotes[j].upvotes)
      }

      alert(quoteUpvotes)
  
      quoteUpvotes.sort(function(a,b){return b-a})

      alert(quoteUpvotes)
  
      for(let j = 0; j<this.quotes.length; j++)
      {
        if (quoteUpvotes[0]=== this.quotes[j].upvotes){
         this.elem.nativeElement.style.background = 'yellow'
        }
      }
    }
   
  
 
}
