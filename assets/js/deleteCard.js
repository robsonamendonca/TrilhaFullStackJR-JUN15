import { deleteByIdCard } from "./cardServices.js"
import { statusMessage } from "./snackbar.js";

async function deleteCard(itemId, cardToDelete){
    try {

        await deleteByIdCard(itemId);

        statusMessage('success','Item removido com sucesso!')
        cardToDelete.remove();
        
    } catch (error) {
        console.log(error)
    }
}

export {deleteCard}