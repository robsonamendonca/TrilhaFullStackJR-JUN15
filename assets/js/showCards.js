import { getAll } from "./cardServices.js";
import { dragCardEvents } from "./dragCardEvents.js";
import { render } from "./createCardElement.js";
import { clearCards } from "./helpers.js";
import { deleteCardEvents } from "./deleteCardEvents.js";

async function listAllCards(){
    try {
        clearCards();
        
        const cards = await getAll();

        cards.forEach(cardItem => {
            render(cardItem);
        });

        dragCardEvents();

        deleteCardEvents();

    } catch (error) {
        
    }
    
}

export { listAllCards }