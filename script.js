const h1Text = document.querySelector("header h1")
const h2Text = document.querySelector("header h2")
const cardsList= document.querySelectorAll("div.memory-card");



let toggle = true
let flippedCard = false
let firstCard = null
let secondCard = null


const checkForMatch = () => {
    console.log("checking what card it is", firstCard)
    if (firstCard.dataset.choice === secondCard.dataset.choice) {
        console.log("Checking for match,", firstCard.dataset.choice)
        disableCards();
        return
    }

    unflipCards();
}

const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

const unflipCards = () => {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
    
}

// Function to show back of card when clicked on
const flipCard = (el) => {
console.log(el)
        const card = el.currentTarget;
        card.classList.toggle('flipped')
       

        if (!flippedCard) {
            flippedCard = true;
            firstCard = el.currentTarget;
            console.log("check if flipped card is firstcard", firstCard)
            return;
        }

        secondCard = el.currentTarget;
        flippedCard = false;

        checkForMatch();
   }

cardsList.forEach(el => {
     el.addEventListener("click", flipCard);
});



