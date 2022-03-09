let iconClassNames = [
  "fas fa-atom",
  "fas fa-frog",
  "fas fa-feather-alt",
  "fas fa-cogs",
  "fas fa-anchor",
  "fas fa-fan",
  "fas fa-bolt",
  "fas fa-hat-wizard",
  "fas fa-apple-alt",
  "fas fa-bell",
  "fas fa-bomb",
  "fas fa-brain",
];

let shuffledClassNames = [
  "fas fa-atom",
  "fas fa-frog",
  "fas fa-feather-alt",
  "fas fa-cogs",
  "fas fa-anchor",
  "fas fa-fan",
  "fas fa-bolt",
  "fas fa-hat-wizard",
  "fas fa-apple-alt",
  "fas fa-bell",
  "fas fa-bomb",
  "fas fa-brain",
];

let nextIcon;
let showingCard;
let clickNumber;
let nextCard = document.getElementById("next-card");
let clicks = document.getElementById("clicks");
let gameCards = document.querySelectorAll(".card");

document.querySelector('body').addEventListener('click', revealCard);
document.querySelector('.restart').addEventListener('click', initializeGame);

let shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function toggleShow(event){
  if (showingCard == false) {
    showingCard = true;
  } else {
    showingCard = false;
  }
  event.target.classList.toggle('show');
}

function toggleMatch(event){
  event.target.classList.toggle('matched');    
  nextIcon++;
  nextCard.firstChild.className = iconClassNames[nextIcon];
  if (allBoxesMatched()){
    alert (`You won the game! And it only took you: ${clickNumber} clicks!`)
  }
}

function revealCard(event) {
  if (event.target.className === "card" && !showingCard) {
    toggleShow(event);   
    setTimeout(toggleShow, 600, event)

   if (event.target.firstElementChild.className === nextCard.firstChild.className) {
    setTimeout(toggleMatch, 600, event)
   }  
   clickNumber++;
  }
  clicks.textContent = clickNumber;
}

function allBoxesMatched() { 
  let allBoxesMatched = true;
  for (let index = 0; index < gameCards.length; index++) {
    if (gameCards[index].className == "card")
      allBoxesMatched = false;
  }
  return allBoxesMatched;
}

initializeGame();

function initializeGame() {
  shuffle(shuffledClassNames);
  shuffle(iconClassNames);
  clickNumber = 0;
  nextIcon = 0;
  showingCard = false;
  nextCard.firstChild.className = iconClassNames[nextIcon];
  for (let i = 0; i < shuffledClassNames.length; i++){
    gameCards[i].firstElementChild.className = shuffledClassNames[i];
  }
  let allMatched = document.querySelectorAll(".matched")
  for (let i = 0; i < allMatched.length; i++){
    allMatched[i].className = "card";
  }
}

