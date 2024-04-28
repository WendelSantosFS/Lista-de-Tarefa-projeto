
let inputForm = document.getElementById('taskLista')
let inputEdit = document.querySelector('#edit-input')
const divWhatTask = document.getElementById('what-task')
const formFirst = document.getElementById('formLista')
const formSecond = document.getElementById('edit-form')

let oldInputValue;

//Funções

const saveTask = (text) => {
    
    const divTasks = document.getElementById('tasks')
    const divMainTasks = document.createElement('div')
    divMainTasks.classList.add("divMainTask")
    const pTasks = document.createElement('p')
    pTasks.innerText = text

    const btnComplete = document.createElement('button')
    btnComplete.textContent = "complete"
    btnComplete.classList.add("completeTask")

    const btnRemove = document.createElement('button')
    btnRemove.textContent = "remove"
    btnRemove.classList.add("removeTask")

    const btnEdit = document.createElement('button')
    btnEdit.textContent = "edit"
    btnEdit.classList = "editTask"

    divMainTasks.append(pTasks, btnComplete, btnRemove, btnEdit)
    divTasks.appendChild(divMainTasks)

    inputForm.value = ''
    inputForm.focus()
}


document.getElementById('addTask').addEventListener("click", (ev) => {
    ev.preventDefault()

    const testeValueInput = ()=> {    // Esta função não deixa adicionar tarefas vazias, também não aceita ser for digitado apenas "UM" espaço.
         if (inputForm.value == "" || inputForm.value == " ") {
            testeValueInput()
        } else if (inputForm) { 
            saveTask(inputForm.value)
        }
    }

    testeValueInput()
   
})

const toggleForms = () => {
    formFirst.classList.toggle('noneDisplay')
    formSecond.classList.toggle('noneDisplay')
}

const updateTodo = (text)=> {

    const todos = document.querySelectorAll('.divMainTask')

    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("p");

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;
        }
    })

}


document.addEventListener('click', (ev)=> {
    ev.preventDefault()

    const targetEl = ev.target
    const parentEl = targetEl.closest('div') //Pega o elemento mais proximo do "targetEl"
    let todoTitle;

    if (parentEl && parentEl.querySelector('p')) {
        todoTitle = parentEl.querySelector('p').innerText;
    }

    if (targetEl.classList.contains("completeTask")) {
        parentEl.classList.toggle('completed');
    } else if (targetEl.classList.contains("removeTask")) {
        parentEl.remove();
    } else if (targetEl.classList.contains("editTask")) {
        toggleForms();

        inputEdit.value = todoTitle
        oldInputValue = todoTitle
    }
})


document.getElementById('cancel-edit-btn').addEventListener('click', (ev) => {
    ev.preventDefault()

    toggleForms()
})


document.querySelector('#btnEdited').addEventListener('click', (ev) => {
    
    ev.preventDefault()

    const editInputValue = inputEdit.value

    if (editInputValue) {
        updateTodo(editInputValue)
    }

    toggleForms()

})