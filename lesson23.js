// /**
//  * A single card object
//  */
//  class Card {
//     constructor(rank, suit, color, name) {
//       this.rank = rank;
//       this.suit = suit;
//       this.color = color;
//       this.name = name;
//     }
//   }
  
//   /**
//    * A pack of cards - 52 unique cards, fresh out of the packaging
//    */
//   class PackOfCards {
//     deck = this.createDeck();
  
//     createCard(suit, rank) {
//       let color = ["Hearts", "Diamonds"].includes(suit) ? "red" : "black";
  
//       let name = rank;
//       if (rank === 11) {
//         name = "Jack";
//       } else if (rank === 12) {
//         name = "Queen";
//       } else if (rank === 13) {
//         name = "King";
//       } else if (rank === 14) {
//         name = "Ace";
//       }
  
//       return new Card(rank, suit, color, name);
//     }
//     createDeck() {
//       let deck = [];
//       for (let index = 2; index <= 14; index++) {
//         deck.push(this.createCard("Hearts", index));
//         deck.push(this.createCard("Spades", index));
//         deck.push(this.createCard("Diamonds", index));
//         deck.push(this.createCard("Clubs", index));
//       }
//       return deck;
//     }
//   }
  
//   /**
//    * Dealer is in charge of holding the deck, shuffling (randomizing) and passing out cards to the players
//    */
//   class Dealer {
//     constructor() {
//       this.newDeck();
//     }
//     newDeck() {
//       this.deck = new PackOfCards().deck;
//     }
//     getCard() {
//       return this.deck.splice(Math.floor(Math.random() * this.deck.length), 1)[0];
//     }
//     getHand(size = 5) {
//       let hand = [];
//       for (let count = 0; count < size; count++) {
//         hand.push(this.getCard());
//       }
//       return hand;
//     }
//   }
  
//   /**
//    * Something that collects points and tracks a score
//    */
//   class PointCollector {
//     numberOfWins = 0;
  
//     addPoint() {
//       this.numberOfWins++;
//     }
//     getPoints() {
//       return this.numberOfWins;
//     }
//   }
  
//   /**
//    * Players hold their hand and decide how they play their game.
//    * They also keep score by extending the PointCollector class.
//    */
//   class Player extends PointCollector {
//     setHand(hand) {
//       this.hand = hand;
//     }
//     getHighestCard() {
//       return this.hand.reduce((card, highest) => (card.rank > highest?.rank ? card : highest), this.hand[0]);
//     }
//     getScore() {
//       return this.getHighestCard().rank;
//     }
//   }
  
//   /**
//    * The mechanics of running our card game is done with the Game class
//    */
//   class Game {
//     dealer = new Dealer();
  
//     play(iterations = 1) {
//       let player1 = new Player();
//       let player2 = new Player();
//       let ties = new PointCollector(); // just to keep track of ties
  
//       for (let index = 0; index < iterations; index++) {
//         // New deck for each round
//         this.dealer.newDeck();
  
//         // pass out the cards
//         player1.setHand(this.dealer.getHand(5));
//         player2.setHand(this.dealer.getHand(5));
  
//         if (player1.getScore() > player2.getScore()) {
//           player1.addPoint();
//         } else if (player2.getScore() > player1.getScore()) {
//           player2.addPoint();
//         } else {
//           ties.addPoint();
//         }
//       }
  
//       console.log("Player 1 wins:", player1.getPoints(), "times");
//       console.log("Player 2 wins:", player2.getPoints(), "times");
//       console.log("Tied:", ties.getPoints(), "times");
//     }
//   }
  
//   // To play the game from the command line, uncomment these 2 lines:
//   // let game = new Game();
//   // game.play(100);
  
//   //
//   //
//   // To integrate it somewhere else, you need something like this:
//   //
//   //
//   /**
//    *
//    * // Get a card dealer:
//    * let dealer = new Dealer();
//    *
//    * // Get some cards:
//    * dealer.getCard();
//    * // or...
//    * dealer.getHand();
//    *
//    * // If you want to determine a highest card or anything, you have to give the hand to a player:
//    * let player = new Player();
//    * player.setHand(dealer.getHand())
//    * let highestCard = player.getHighestCard();
//    *
//    */ 

//    class VisualCard {
//     constructor(card) {
//     this.card = card;
//     }
    
//     x = 20;
//     y = 20;
//     isDragging = false

//     dragging() {
//       if (
//       mouseX > this.x &&
//       mouseX < this.x + 150 &&
//       mouseY > this.y &&
//       mouseY > this.y + 200 
//       ) {
//         this.isDragging = true;
//       } else {
//       return false;
//       }
//     }
  
//     drag() {
//       if (this.isDragging) {
//         this.x = mouseX;
//         this.y = mouseY;
//       }
//     }

//     getIcon() {
//         if(this.card.suit === "Diamonds") {
//             return "♦";
//         } else if (this.card.suit === "Hearts") {
//             return "♥";
//         } else if (this.card.suit === "Spades") {
//             return "♠";
//         } else if (this.card.suit === "Clubs") {
//             return "♣";
//         }
//     }

// //     draw() {
// //       push()
// //       this.drag();
// //         translate(this.x, this.y)

// //         fill("white")
// //         rect(0, 0, 150, 200, 7);

// //         fill(this.card.color)
// //         textSize(100);
// //         textAlign(CENTER);
// //         text(this.getIcon(), 70, 130);

// //         textSize(30);
// //         textAlign(LEFT);
// //         text(this.card.name, 15, 30);

// //         textSize(20);
// //         textAlign(RIGHT);
// //         text(this.card.name, 140, 190);
// //     pop()
// //       }
// // }

// // let dealer = new Dealer();
// // let hand = dealer.getHand();
// // let visualHand = [];

// // for (let index = 0; index < hand.length; index++) {
// //     const card = hand[index];
// //     let visualCard = new VisualCard(card);
// //     visualCard.x = index * 180 + 20;
// //     visualHand.push(visualCard);
 
// // }

// // var setup = function () {
// //     createCanvas(1000,800);
// // };
// // var draw = function () {
// //     background("forestgreen");
// //     visualHand.forEach((visualCard) => visualCard.draw());
// //     for (let index = 0; index < visualHand.length; index++) {
// //         const visualCard = visualHand[index];
// //         visualCard.draw();
// //     }
// // };

// // window.mousePressed = function () {
// //   //visCard1.isDragging = true;
// //   for (let index = 0; index < visualHand.legth; index++) {
// //     const xyz = visualHand[index];
// //     xyz.dragging();
// //   }
// // };

// // window.mouseReleased = function () {
// //   //visCard1.isDragging = true;
// // for (let index = 0; index < visualHand.length; index++) {
// //   const vc = visualHand[index];
// //   vc.isDragging = false
// // }
// // };




class VisualCard {
  constructor(card) {
    this.card = card;
  }

  x = 20;
  y = 20;
  isDragging = false;
  xOffset = 0;
  yOffset = 0;

  dragging() {
    if (mouseX > this.x && mouseX < this.x + 150 && mouseY > this.y && mouseY < this.y + 200) {
      this.isDragging = true;
      this.xOffset = mouseX - this.x;
      this.yOffset = mouseY - this.y;
      return true;
    } else {
      return false;
    }
  }

  drag() {
    if (this.isDragging) {
      this.x = mouseX - this.xOffset;
      this.y = mouseY - this.yOffset;
    }
  }

  getIcon() {
    return {
      Hearts: "â™¥",
      Diamonds: "â™¦",
      Spades: "â™ ",
      Clubs: "â™£",
    }[this.card.suit];
  }
  getCornerName() {
    return this.card.name == this.card.rank ? this.card.name : this.card.name[0];
  }

  draw() {
    this.drag();
    push();
    {
      // move the x/y to this card's location
      translate(this.x, this.y);

      // The card background
      fill("white");
      strokeWeight(2);
      rect(0, 0, 150, 200, 7);

      // The suit icon in the middle
      textAlign(CENTER);
      fill(this.card.color);

      // But first, something special.
      // A rotated number of translucent icons around the main one, based on the rank
      if (this.card.name === "Ace") {
        // but not for aces
        textSize(150);
        text(this.getIcon(), 75, 140);
      } else {
        push();
        {
          fill(red(this.card.color), green(this.card.color), blue(this.card.color), 20);
          textSize(50);
          translate(75, 100); // center of card
          for (let index = 0; index < this.card.rank; index++) {
            text(this.getIcon(), 0, -40);
            rotate(360 / this.card.rank);
          }
        }
        pop();

        // and the main icon
        textSize(100);
        text(this.getIcon(), 75, 130);
      }

      // The corners
      textSize(20);
      textLeading(20);
      textAlign(CENTER);

      // Top left corner
      text(this.getCornerName() + "\n" + this.getIcon(), 16, 24);

      // Rotation for the bottom-right corner
      // spin it around and have it mirror the top-left corner
      push();
      {
        translate(150, 200);
        rotate(180);
        text(this.getCornerName() + "\n" + this.getIcon(), 16, 24);
      }
      pop();
    }
    pop();
  }
}

// Get a card dealer
let dealer = new Dealer();
// and a hand of cards (just the data)
let hand = dealer.getHand();
// turn that hand of cards into a hand of visual cards
let visualHand = hand.map((c) => new VisualCard(c));
// space them out a bit
visualHand.forEach((vc, i) => (vc.x = i * 170 + 20));

var setup = function () {
  createCanvas(1000, 800);
};
var draw = function () {
  background("forestgreen");
  angleMode(DEGREES);

  // draw all the cards
  visualHand.forEach((vc) => vc.draw());
};

window.mousePressed = function () {
  // mouse is down, let's try dragging everything
  visualHand.forEach((vc) => vc.dragging());
};
window.mouseReleased = function () {
  // mouse is up, stop dragging everything
  visualHand.forEach((vc) => (vc.isDragging = false));
};