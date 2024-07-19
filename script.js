const frontCard = document.querySelector('#cardSelection .front-face');
const backCard = document.querySelector('#cardSelection .back-face');
const h1Text = document.querySelector("header h1")
const h2Text = document.querySelector("header h2")

let toggle = true

// Function to show back of card when clicked on
const flipCard = (card) => {
    if (toggle) {
         backCard.style.display = "none";
         frontCard.style.display = "block";
        //  backCard.src = frontCard.src
         console.log("click on flipCard, flip to front", frontCard.src)
                   
    } else {
        frontCard.style.display = "none";
        backCard.style.display = "block";
        //  frontCard.src = backCard.src    
         console.log("click on flipCard, flip to back", backCard.src)
    }
     toggle = !toggle;
   
}


frontCard.addEventListener("click", flipCard);
backCard.addEventListener("click", flipCard);