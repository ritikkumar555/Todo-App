
// // let todos = [
    
// //     {
// //         id: Date.now()+1,
// //         text: "Go to Gym",
// //         isCompleted: false
// //     },
// //     {
// //         id: Date.now()+2,
// //         text: "Revision of Web Dev",
// //         isCompleted: false
// //     },
// //     {
// //         id: Date.now()+3,
// //         text: "Take class",
// //         isCompleted: false
// //     }
// // ];

// let todos = JSON.parse(localStorage.getItem("todos")) || [];

// const todoForm = document.querySelector("#todo-form");
// const todoInput = document.querySelector("#todo-input");
// const todoList = document.querySelector("#todo-list");
// const formBtn = document.querySelector("#form-btn");

// let editTodoId = null;//flag
// todoForm.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const todoValue = todoInput.value.trim();
//     // console.log(todoInput.value);
//     // todos.push(todoValue);
//     if(!todoValue){
//         return;
//     } 
//     console.log({editTodoId, todoValue});
    
//     if(editTodoId) {
//         //edit wala part
//         todos = todos.map((todo) => { 
//             if(todo.id === Number(editTodoId)){
//                 return {
//                     ...todo,
//                     text : todoValue,
//                 }
//             }
//             return todo;
//         })
//     }
//     else{
//         //add wala part
//         let newTodo = {
//         id: Date.now(),
//         text: todoValue,
//         isCompleted: false
//         }
//         todos.push(newTodo);
//         addTodo(newTodo);

//         localStorage.setItem("todos", JSON.stringify(todos));
//     }
//     //  addTodo(newTodo);
//     // renderTodo();    
// })

// function renderTodo()
// {
//     todos.forEach(function (todo){
//     addTodo(todo);
// });
// }

// renderTodo();

// function addTodo(todo)
// {
//     const li = document.createElement("li");
//     // li.textContent = todo.text;
//     li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`;
//     li.innerHTML = `<input data-id=${todo.id} ${ todo.isCompleted === true ? "checked" : ""} type="checkbox">
//                     <p class="flex-1 ${ todo.isCompleted ? "line-through text-red-400" : ""} ">${todo.text}</p>
//                     <div class="flex gap-2">
//                         <button data-action="edit" data-id=${todo.id}>Edit</button>
//                         <button data-action="delete" data-id=${todo.id}>Delete</button>
//                     </div>
//                     </li>`;
//     todoList.append(li);
// }


// //event delegation
// todoList.addEventListener('click', (e) => {
    
//     let li = e.target.closest('li');
//     let btn = e.target.closest('button');
//     let action = btn?.dataset.action; 
//     let id = btn?.dataset?.id;
//     let checkbox = e.target.closest('input[typr="checkbox"]');//css selector
//     if(action === "edit")
//     {
//         //edit wala part
//        startEdit(id);
//     }

//     if(action === "delete")
//     {
//         //delete wala part
//         console.log("Deleting...");
//         deleteTodo(e, id);
//     }

//     if(checkbox){
//         todos = todos.map((todo) => {
//             if(todo.id === Number(id))
//             {
//                 return {
//                     ...todo,
//                     isCompleted : !todo.isCompleted,
//                 }
//             }
//             return todo;
//         });
//     }

// })

// function deleteTodo(e, id){
//     e.target.closest('li').remove();
//     todos = todos.filter((todo)=>{
//     if(todo.id !== Number(id))
//     {
//         return todo;
//     }
//     });
// }

// function startEdit(id){
//     editTodoId = id;
//     let currentTodo = todos.find((todo) => {
//     if(todo.id === Number(id)){
//         return todo;
//         }
//     })
        
//     todoInput.value = currentTodo.text;

//     formBtn.textContent = "Update";
// }


let todos = [
    {
        id: Date.now() + 1,
        text: "Go to Gym",
        isCompleted: false,
    },
     
    {
        id: Date.now() + 2,
        text: "Web Dev Revision",
        isCompleted: false,
    },
     
    {
        id: Date.now() + 3,
        text: "Sutti Babu",
        isCompleted: false,
    },
    ];

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

todoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    const todoValue = todoInput.value;

    todos.push(todoValue);
    // console.log(todoInput.value);
    let newTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false,
    }
    addTodo(newTodo);
})


function renderTodo(){

    todos.forEach(function (todo){
        addTodo(todo);
})
}

renderTodo();

function addTodo(todo){
    
    const li = document.createElement("li");
    // li.textContent = todo.text;
    li.dataset.id = todo.id;
    li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`;
   
    li.innerHTML = `<input data-id=${todo.id} ${todo.isCompleted === true ? 'checked' : ""} type="checkbox">
                    <p class="flex-1">${todo.text}</p>
                            
                    <div class="flex gap-2">
                        <button data-action="edit" data-id=${todo.id}>Edit</button>
                        <button data-action="delete" data-id=${todo.id}>Delete</button>
                    </div>`;
    
    todoList.append(li);
}

//Event Delegation
todoList.addEventListener("click", (e)=>{
    
    let li = e.target.closest('li');
    let btn = e.target.closest('button');
    let action = btn?.dataset.action;
    let id = li?.dataset?.id; 
    let checkbox = e.target.closest('input[type="checkbox"]');

    if(action === "edit")
    {
        //edit wala part
        console.log("Editing....");
    }

    if(action === "delete")
    {
        //delete wla part
        // console.log("Deleting.....");
       deleteTodo(e, id); 
       
    }

    if(checkbox)
    {
        todos = todos.map((todo) =>{
            if(todo.id === Number(id))
            {
                return {
                    ...todo, 
                    isCompleted : !todo.isCompleted
                }
            }

            return todo;
        })
    }

})

function deleteTodo(e, id)
{
       e.target.closest('li').remove();

        todos = todos.filter((todo) =>{
            if(todo.id!== Number(id))
            {
                return todo;
            }
        })

        // console.log(todos);
}