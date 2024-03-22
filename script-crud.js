//encontrar o botao adicionar tarefa


const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textArea = document.querySelector('.app__form-textarea');

const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {           
    formAdicionarTarefa.classList.toggle('hidden');         //faz com que o css exiba ou não alguma classe
}); 

formAdicionarTarefa.addEventListener('submit', (evento) =>{
    evento.preventDefault();                             //impede o comportamento padrão
    const tarefa ={
        descricao : textArea.value,
    }

    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    

    
} );

