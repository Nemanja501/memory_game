const grid = document.querySelector('.grid');
const score = document.querySelector('#score');
const cards = [];
let chosenCards = [];
let points = 0;
const imgSources = ['images/pixelart_1543145550507.png', 'images/pixelart_1543145569196.png', 'images/pixelart_1543145582966.png', 'images/pixelart_1543145606763.png', 'images/pixelart_1543145620562.png', 'images/pixelart_1543145673530.png', 'images/pixelart_1543145686904.png', 'images/pixelart_1543145702760.png', 'images/pixelart_1543145715155.png'];

class Card{
  constructor(imgSrc){
    this.imgSrc = imgSrc;
    this.init();
  }

  init(){
    this.el = document.createElement('img');
    this.el.style.height = '200px';
    this.el.style.width = '200px';
    this.el.style.position = 'relative';
    cards.push(this);
  }
}

function addCards(){
  imgSources.forEach(image => {
    const card = new Card(image);
    card.el.setAttribute('src', 'images/c28fd55fd5dde7e576b53e1eabc585cf.jpg');
  });
  imgSources.forEach(image => {
    const card = new Card(image);
    card.el.setAttribute('src', 'images/c28fd55fd5dde7e576b53e1eabc585cf.jpg');
  });
  const shuffleCards = cards.sort(()=>Math.random() - 0.5);
  shuffleCards.forEach(card => {
    grid.appendChild(card.el);
  });
}


function playGame(){
  let chosenCards = [];
  let points = 0;
  cards.forEach(card => {
    card.el.addEventListener('click', function func(){
      flipCard(card);
      chosenCards.push(card);
      if(chosenCards.length == 2){
        let temp1 = chosenCards[0];
        let temp2 = chosenCards[1];
        chosenCards = [];
        if(compareCards(temp1, temp2)){
          temp1.el.removeEventListener('click', func);
          temp2.el.removeEventListener('click', func);
          setTimeout(()=>{
            correctPair(temp1, temp2);
            points++;
            score.innerHTML = "Score: " + points;
          }, 700);
        }else{
          setTimeout(()=>{
            hideCard(temp1);
            hideCard(temp2);
          }, 700);
      }
    }
    });
  });
}


function flipCard(selectedCard){
  cards.forEach(card => {
    if(selectedCard == card){
      card.el.setAttribute('src', card.imgSrc);
    }
  });
}

function hideCard(selectedCard){
  cards.forEach(card => {
    if(selectedCard == card){
      card.el.setAttribute('src', 'images/c28fd55fd5dde7e576b53e1eabc585cf.jpg');
    }
  });
}

function compareCards(card1, card2){
  if(card1.imgSrc == card2.imgSrc){
    return true;
  }
  return false;
}

function correctPair(card1, card2){
  cards.forEach(card => {
    if(card1 == card || card2 == card){
      card.el.setAttribute('src', 'images/Solid_white.png');
    }
  });
}

addCards();
playGame();