import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QuoteEntry } from '../quote-entry';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote: QuoteEntry;

  @Output()
  voteCountDown = new EventEmitter()

  @Output()
  voteCountUp = new EventEmitter()

  voteUp() {
    let up
    this.voteCountUp.emit(up)
  }

  voteDown() {
    let down;
    this.voteCountDown.emit(down)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
