const numberOfClicks = 0;


class Card {

  constructor(color, number) {
    this.color = color;
    this.number = number;
    this.#init();
  }

  #init() {
    this.el = document.createElement("div");
    this.el.style.background = this.color;
    this.el.style.height = "200px";
    this.el.style.width = "100px";
    document.body.appendChild(this.el);

    this.el.addEventListener('click', () => {
        this.el.innerHTML = this.number;
        numberOfClicks++;
    })
  }
}

const cardAmount = 12;
const uniqueNumbers = cardAmount / 2;
const numbers = [];
for (let i = 0; i < uniqueNumbers; i++) {
  let randomNumber = Math.floor(Math.random() * 99);
  while (numbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 99);
  } 
  numbers.push(randomNumber);
}

let cards = [];
for (let i = 0; i < uniqueNumbers; i++) {

    const card = new Card("green", numbers[i]);
    cards.push(card);
}
for (let i = 0; i < uniqueNumbers; i++) {

    const card = new Card("green", numbers[i]);
    cards.push(card);
}

