
export class QuoteEntry {
  upvotes: number;
  downvotes: number;
  showDetails: boolean
  currentDate:Date

  constructor(
    public id: number,
    public content: string,
    public author: string,
    public contributor: string) {
    this.showDetails = false;
    this.upvotes = 0;
    this.downvotes = 0;
    this.currentDate = new Date();
  }
}
