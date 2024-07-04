import { runFecth } from "./helpers.js";

async function getAll()
{
    try {        
        const response = await runFecth("todos");

        const data = await response.json();
        return data;
    } catch (error) {
        return 'Houve um erro, tente novamente mais tarde.';
    }
}

async function updateStatus(id, status){
    try {        
        const response = await runFecth(`todos/${id}/status`,
            {
                method: "PATCH",
                body: JSON.stringify({
                    status
                }),
            });

        const data = await response.json();
        return data;
    } catch (error) {
        return 'Houve um erro, tente novamente mais tarde.';
    }


}

async function createNewCard(title, description){
  try {
    const response =  await runFecth("todos", {
        method: "POST",
        body: JSON.stringify({
            title,
            description,
        })
    });
     return await response.json();

  } catch (error) {
    return 'Houve um erro, tente novamente mais tarde.';
  }
}

async function deleteByIdCard(id){
    try {
        const response = await runFecth(`todos/${id}`, {
            method: "DELETE",            
        });        
        return 'Item deletado com sucesso!';
    } catch (error) {
        return 'Houve um erro, tente novamente mais tarde.';
    }
}

export { getAll, updateStatus, createNewCard, deleteByIdCard}