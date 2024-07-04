import { addNewCard } from "./NewCard.js";
import { closeModal, openModal } from "./modalEvents.js";

const form = document.forms["addNewCard"];

function createCardEvents(){
    const newCardTrigger = document.getElementById('new-card-trigger');
    const createNewModal = document.querySelector('#new-card-modal');
    openModal(newCardTrigger,createNewModal);
  
    const closeNewCardModel = document.querySelector('.close-new-card-modal');
    closeModal(closeNewCardModel,createNewModal)

    form.addEventListener('submit', addNewCard)

}

export {createCardEvents}