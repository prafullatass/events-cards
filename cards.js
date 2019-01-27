/*Create an HTML page that contains a text area and a button labeled Create.
When the user enters in text into the text area and then clicks the create button, 
use a factory function that creates a new DOM component that has a border, and includes it's own delete button.
Insert that new component into the DOM.
When the user clicks the Delete button, the containing card, and no other cards, 
should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
*/

const createBtnEl = document.querySelector("#create-button")
let numberOfCard = 1
//element of article of cards holder
cardHolderEl = document.querySelector(".cards-holder")

const createCard = (evt) => {
    //element of input field
    cardText = document.querySelector("#create_cards_text")
    cardHolderEl.innerHTML += `
    <article class="card" id="card--${numberOfCard}">
    <div>${cardText.value}</div>
    <div>
        <button id="delete--${numberOfCard}">Delete This Card</button>
    </div>
    </article>`
    cardText.value = ""
    numberOfCard++
}

const deleteCard = (event) => {
    const article_id = event.target.id.split("--")
    //select and remove an article from the list
    const selectedArticle = document.querySelector(`#card--${article_id[1]}`)
    cardHolderEl.removeChild(selectedArticle)
}

cardHolderEl.addEventListener("click", deleteCard)
/*deleteButtonEl.forEach(btn => {
    btn.addEventListener("click", deleteCard)
});*/

createBtnEl.addEventListener("click", createCard)

