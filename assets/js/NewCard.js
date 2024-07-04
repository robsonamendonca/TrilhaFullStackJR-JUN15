import { createNewCard } from "./cardServices.js";
import { clearForms } from "./helpers.js";
import { listAllCards } from "./showCards.js";
import { statusMessage } from "./snackbar.js";

async function addNewCard(event){
    event.preventDefault();

    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;

    if( title && description){

        try {
            await createNewCard(title,description);

            statusMessage('success',`Tarefa ${title}, criado com sucesso!`);

            await listAllCards();
        
        } catch (error) {
            statusMessage('error',error);
        }
        const createNewModal = document.getElementById('new-card-modal');
        createNewModal.close();

        clearForms();

    }else{
        statusMessage('error','Todos os campos são obrigatórios.');
    }
}

export { addNewCard}
