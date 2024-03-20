//encontrar o botao adicionar tarefa


const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');

btnAdicionarTarefa.addEventListener('click', () => {           
    formAdicionarTarefa.classList.toggle('hidden');         //faz com que o css exiba ou não alguma classe
}); 

