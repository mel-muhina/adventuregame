const h1Text = document.querySelector("header h1")
const h2Text = document.querySelector("header h2")
const cardsList= document.querySelectorAll("div.memory-card");

console.log(cardsList)


let toggle = true

// Function to show back of card when clicked on
const flipCard = (el) => {
console.log(el)
        const card = el.currentTarget;
        card.classList.toggle('flipped')
        console.log(card)
   }

cardsList.forEach(el => {
     el.addEventListener("click", flipCard);
});

