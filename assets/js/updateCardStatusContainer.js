import { updateStatus } from "./cardServices.js";

function updateCardStatus(card, statusArea){
   const cardStatus = statusArea.parentNode;
   if(cardStatus.classList.contains("NEW")) {
       updateStatus(card.id, "NEW");
   }
   if(cardStatus.classList.contains("DOING")) {
    updateStatus(card.id, "DOING");
   }
   if(cardStatus.classList.contains("FINISHED")) {
        updateStatus(card.id, "FINISHED");
   }

}

export { updateCardStatus}
