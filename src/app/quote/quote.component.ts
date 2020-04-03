import { Component, OnInit, Input } from '@angular/core';
import { QuoteEntry } from '../quote-entry'
//import { check } from '../highlight.directive'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: QuoteEntry[] = [
    new QuoteEntry(1, "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.",
      "Stephen Hawking", "Martin"),
    new QuoteEntry(2, "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
      "Hellen Keller", "Martin"),
    new QuoteEntry(3, "The greatest glory in living, lies not in never falling, but in rising every time we fall", "Nelson Mandela", "James"),
    new QuoteEntry(4, "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.", "Steve Jobs", "Hailey")
  ]


  addNewQuote(quote) {
    let quoteId = this.quotes.length
    quote.id = quoteId + 1
    this.quotes.unshift(quote)


  }
  deleteQuote(index){
    this.quotes.splice(index,1)
  }


  toggleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails
  }

  counterUp(index) {
    this.quotes[index].upvotes = this.quotes[index].upvotes + 1
  }
  counterDown(index) {
    this.quotes[index].downvotes = this.quotes[index].downvotes + 1

  }

  check() {
    let quoteUpvotes = []
    let highestVotes: number
    for (let j = 0; j < this.quotes.length; j++) {
      quoteUpvotes.push(this.quotes[j].upvotes)
    }
    quoteUpvotes.sort(function (a, b) { return b - a })
    highestVotes = quoteUpvotes[0]

    return highestVotes


  }
  constructor() { }
  trigger: number = 0;
  ngOnInit(): void {

    this.quotes[3].currentDate = new Date(2020, 0, 15)
    this.quotes[2].currentDate = new Date(2020, 1, 7)
    this.quotes[1].currentDate = new Date(2020, 2, 22)
    this.quotes[0].currentDate = new Date(2020, 3, 1)


    setInterval(() => this.trigger = 5, 1000)
  }

}

