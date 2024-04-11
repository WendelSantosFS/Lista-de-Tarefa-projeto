
let inputForm = document.getElementById('taskLista')

//Funções

const saveTask = (text) => {
    
    const divTasks = document.getElementById('tasks')
    const divMainTasks = document.createElement('div')
    divMainTasks.classList.add("divMainTask")
    const pTasks = document.createElement('p')
    pTasks.innerText = text

    const btnComplete = document.createElement('button')
    btnComplete.textContent = "completeTask"
    btnComplete.classList.add("completeTask")

    const btnRemove = document.createElement('button')
    btnRemove.textContent = "removeTask"
    btnRemove.classList.add("removeTask")

    const btnEdit = document.createElement('button')
    btnEdit.textContent = "editTask"
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





document.addEventListener('click', (ev)=> {

    const targetEl = ev.target
    const parentEl = targetEl.closest('div') //Pega o elemento mais proximo do "targetEl"

    console.log(parentEl)
})
