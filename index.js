const grid = document.querySelector('.grid');
const score = document.querySelector('#score');
const cards = [];
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
  let func;
  cards.forEach(card => {
    card.el.addEventListener('click', func = ()=>{
      card.el.setAttribute('src', card.imgSrc);
      chosenCards.push(card);

      if(chosenCards.length == 2){
        if(compareCards(chosenCards[0], chosenCards[1])){
          setTimeout(()=>{
            chosenCards[0].el.style.display = 'none';
            chosenCards[1].el.style.display = 'none';
            chosenCards[0].el.removeEventListener('click', func);
            chosenCards[0].el.removeEventListener('click', func);
            points++;
            score.innerHTML = "Score: " + points;
            chosenCards.pop();
            chosenCards.pop();
          }, 700);
        }else{
          setTimeout(()=>{
            chosenCards[0].el.setAttribute('src', 'images/c28fd55fd5dde7e576b53e1eabc585cf.jpg');
            chosenCards[1].el.setAttribute('src', 'images/c28fd55fd5dde7e576b53e1eabc585cf.jpg');
            chosenCards.pop();
            chosenCards.pop();
          }, 700);
      }
    }
    });
  });
}

function compareCards(card1, card2){
  if(card1.imgSrc == card2.imgSrc){
    return true
  }
  return false;
}

addCards();
playGame();