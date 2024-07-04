
function openModal(trigger, modal){
    trigger.addEventListener('click', ()=>{
        modal.showModal();
    });
    
}

function closeModal(trigger, modal){    
    trigger.addEventListener('click', ()=> {
        modal.close();
    })        
}

function showDeleteModalEvent(){
    getDeleteModal().showModal();
}

function getDeleteModal(){
    return document.querySelector('#delete-confirm');    
}

export{ openModal, closeModal, showDeleteModalEvent, getDeleteModal}

