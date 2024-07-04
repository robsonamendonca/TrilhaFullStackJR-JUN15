import { deleteCard } from "./deleteCard.js";
import { getDeleteModal, showDeleteModalEvent } from "./modalEvents.js";

export async function deleteCardEvents(){
    const buttonDeleteCard = document.querySelectorAll('.delete-item');

    buttonDeleteCard.forEach( button => {
        button.addEventListener('click', async ()=> {
            
            showDeleteModalEvent();
            
            const confirmDeleteButton = 
            document.querySelector('#confirm-delete');

            let onDeleteCard = confirmDeleteButtonEvent(
                button,
                confirmDeleteButton
            );

            cancelDeleteButtonEvent(confirmDeleteButton, onDeleteCard);
        })
    })
}

function confirmDeleteButtonEvent(button, confirmDeleteButton){
    let deleteCardFn = async () => {
        const itemId = button.getAttribute('id');

        let cardToDelete = document.getElementById(itemId);

        deleteCard(itemId,cardToDelete);
        getDeleteModal().close();
        

        confirmDeleteButton.removeEventListener('click',deleteCardFn);

    }
    confirmDeleteButton.addEventListener('click', deleteCardFn);

    return deleteCardFn;
}

function cancelDeleteButtonEvent(confimDeleteButton, deleteCardFn){
    const cancelButton =document.querySelector('#cancel-delete');

    cancelButton.addEventListener('click', () => {
        getDeleteModal().close();
        confimDeleteButton.removeEventListener('click',deleteCardFn);
    })
}