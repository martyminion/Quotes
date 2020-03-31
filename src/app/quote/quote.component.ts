import { Component, OnInit,Input } from '@angular/core';
import { QuoteEntry} from '../quote-entry'
import { HighlightDirective} from '../highlight.directive'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() 
  check:HighlightDirective;

  quotes: QuoteEntry[]=[
    new QuoteEntry(1,"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
      "Stephen Hawking","Martin"),
    new QuoteEntry(2,"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      "Hellen Keller","Martin")
  ]
  

  addNewQuote(quote){
   let quoteId = this.quotes.length
   quote.id = quoteId + 1
   this.quotes.push(quote)

  }

  toggleDetails(index){
    this.quotes[index].showDetails=!this.quotes[index].showDetails
  }

  counterUp(index){
    this.quotes[index].upvotes = this.quotes[index].upvotes +1

  }
  counterDown(index){
    this.quotes[index].downvotes = this.quotes[index].downvotes +1

  }
  constructor() { }

  ngOnInit(): void {
  }

}
