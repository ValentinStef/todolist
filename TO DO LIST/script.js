const toDoInput = document.getElementById('input-text');
const addBtn = document.getElementById('input-submit');
const form = document.getElementById('new-task-form')


const divTask = document.getElementById('tasks')


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = toDoInput.value

    if (!task) {
        alert("Please enter what you shoud do!");
        return;
    }

    const divTaskEl = document.createElement('div');
    divTaskEl.classList.add('task');
    
    const divTaskContent = document.createElement('div');
    divTaskContent.classList.add('content');

    divTaskEl.appendChild(divTaskContent);

    const newInput = document.createElement('input');
    newInput.classList.add('list-input-text')
    newInput.type = "text";
    newInput.value = task;
    newInput.setAttribute('readonly', 'readonly');

    divTaskContent.appendChild(newInput);

    const divActions = document.createElement('div');
    divActions.classList.add('action-buttons');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML= "Edit";

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = 'Delete';

    divActions.appendChild(editBtn);
    divActions.appendChild(deleteBtn);

    divTaskEl.appendChild(divActions);
    
    divTask.appendChild(divTaskEl);

    editBtn.addEventListener('click', () => {
        if (editBtn.innerText.toLowerCase() == "edit") {
            newInput.removeAttribute('readonly');
            newInput.focus();
            editBtn.innerText = "Save";
        } else {
            newInput.setAttribute('readonly', 'readonly')
            editBtn.innerText = "Edit"
        }
    })

    deleteBtn.addEventListener('click', () => {
        divTask.removeChild(divTaskEl);
    })
    
})