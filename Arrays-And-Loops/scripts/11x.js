  

let todoList = JSON.parse(localStorage.getItem('todoList')) || [] ;
//get todoList from local storage or initialize as empty array if not present
renderTodoList();

function renderTodoList(){
    let todoListHTML ='';
    // todoList = JSON.parse(localStorage.getItem('todoList'));
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const html = `<p>${todo}</p>`;//create HTML string for each todo item
        // const name = todoObject.name;
       // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;//object destructuring to extract name and dueDate
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
            saveLocalStorage();
            " class="delete-todo-button">Delete</button>
       `
       /*
       create HTML string for each todo item with delete button
       todoList.splice(${i},1) from i we can get the index number next number is how many
       values we want to delete here only we want to delete corresponding
       row ie;  1 then call the renderTodoList() function to list rest of the datas
       */
       
        todoListHTML += html;//append HTML string to todoListHTML
    }
    // console.log(todoListHTML);//log the final HTML string

    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;//insert the HTML string into the DOM

}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value;//get value from input field

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;//get due date value from input field
   
    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
        /*short hand property names  it means when 
        the property name and variable name are 
        same we can use this short hand */

    });//add value to todoList array
    // console.log(todoList);//log the updated todoList array

    
    //store the updated todoList array in local storage

    inputElement.value = '';//clear the input field
    dateInputElement.value = '';//clear the due date input field

    renderTodoList();//re-render the todo list

    //whenever update the todo list, save in localstorage
    saveLocalStorage();



   

}

function saveLocalStorage(){
   localStorage.setItem('todoList',JSON.stringify(todoList));//update local storage
}