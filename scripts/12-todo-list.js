// const todoList = [];//empty array to hold todo items

const todoList = [
    {
        name:'make dinner',
        dueDate:'2025-11-05'
    },
    {
        name:'wash car',
        dueDate:'2025-12-01'
    }
];

renderTodoList();

function renderTodoList(){
    let todoListHTML ='';

    /*todoList.forEach(function(todoObject, index){
        
     const {name, dueDate} = todoObject;//object destructuring to extract name and dueDate
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
            todoList.splice(${index}, 1); 
            renderTodoList();
            " class="delete-todo-button">Delete</button>
       `
       
        todoListHTML += html;//append HTML string to todoListHTML
    });*/

    todoList.forEach((todoObject, index) => {
        
        const {name, dueDate} = todoObject;//object destructuring to extract name and dueDate
           const html = `
           <div>${name}</div>
           <div>${dueDate}</div>
           <button class="delete-todo-button js-delete-todo-button">Delete</button>
          `
          
           todoListHTML += html;//append HTML string to todoListHTML
       });


   




    document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;//insert the HTML string into the DOM


    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
            todoList.splice(index, 1);
            renderTodoList();
        });
    });

    //querySelectorAll returns a NodeList of all elements matching the selector
}

document.querySelector('.js-add-todo-button')
.addEventListener('click', ()=>addTodo() );

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

    inputElement.value = '';//clear the input field
    dateInputElement.value = '';//clear the due date input field

    renderTodoList();//re-render the todo list



   

}