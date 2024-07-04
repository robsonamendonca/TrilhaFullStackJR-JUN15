function runFecth(path, options = {}){
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  const mergedOption = {
    ...options,
    headers: {
        ...defaultHeaders,
        ...options.headers,
    },
  };

  let url=`https://alunos.treinaweb.com.br/twtodos/api/v1/${path}`;

  return fetch(url,mergedOption);

}

function clearCards(){
  const cardsContainer = document.querySelectorAll('.cards-container');
  cardsContainer.forEach(cardContainer => {
      cardContainer.innerHTML = "";
  })

}

function clearForms(){
  const form = document.forms["addNewCard"];
  const formInputs = form.querySelectorAll('input');
  const formTextarea = form.querySelectorAll('textarea');

  formInputs.forEach(input => {
    input.value = "";
  })

  formTextarea.forEach(textarea => {
    textarea.value = "";
  })

}

export {runFecth, clearCards, clearForms}