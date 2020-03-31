import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {QuoteEntry} from '../quote-entry'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  
  newQuote = new QuoteEntry(0,"","","")  

  @Output() addQuote = new EventEmitter<QuoteEntry>();

  submitQuote(){
    this.addQuote.emit(this.newQuote)
    this.newQuote = new QuoteEntry(0,"","","")

  }

  constructor() { }

  ngOnInit(): void {
  }

}
