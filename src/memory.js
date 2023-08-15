class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    
  }

  shuffleCards() {
    // ... write your code here
    let copyCards = [...this.cards]
    let shuffledCardsArr = []
    for (let i = 0; this.cards.length; i+=1) {
      let randomIndex = Math.floor(Math.random() * copyCards.length)
      shuffledCardsArr.push(copyCards[randomIndex])
      copyCards.splice(randomIndex, 1)
    }
    this.cards = shuffledCardsArr 
  }

  checkIfPair(card1, card2) {
    // ... write your code here
   this.pairsClicked++
   if (card1 === card2) {
      this.pairsGuessed++
      return true
   } else {
      return false
   }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed >= 12) {
      return true
    } else {
      return false
    }
  }
}
