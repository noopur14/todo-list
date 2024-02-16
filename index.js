// let containerEl = document.getElementById("container")

// let websiteEl = document.createElement("div")
// websiteEl.style.display="flex"
// websiteEl.style.height="100vh"
// websiteEl.style.width="100vw"
// websiteEl.style.background="white"
// containerEl.appendChild(websiteEl)

// let navbarEl = document.createElement("div")
// navbarEl.style.display="flex"
// navbarEl.style.height="100px"
// navbarEl.style.width="100vw"
// navbarEl.style.background="grey"
// navbarEl.style.position="flex-start"
// websiteEl.appendChild(navbarEl)

// let sidebarEl = document.createElement("div")
// sidebarEl.style.display="flex"
// sidebarEl.style.position="sticky"

// array=[{
//     title: "shirt1",
//     price: "724/-",
//     image:"https://www.freepik.com/free-photo/graphic-shirt-trendy-design-mockup_26238439.htm#query=shirt&position=0&from_view=search&track=sph&uuid=e288c777-fe40-4aab-b046-769797e8c2e1",
//     discountedprice: "399/-",
// },];

// for(let item of array){
// let headingEl = document.createElement("div");
// headingEl.textContent= item.title;
// headingEl.textContent= item.price;
// headingEl.src= item.image;
// headingEl.textContent= item.discountedprice;
// websiteEl.appendChild(headingEl);

// }
let todoListContainerEl = document.getElementById("todoListContainer");
let userInputEl = document.getElementById("userInput");

let localStorageItem = "My Local Storage Element";
localStorage.setItem("myItem",localStorageItem);
let getLocallyStoredItem = localStorage.getItem("myItem");
console.log(getLocallyStoredItem);
localStorage.removeItem("myItem");



function onTodoAdd(){
    let userInputVal = userInputEl.value;
    let lengthOfTodo = todoList.length;
if(userInputVal===""){
    alert("please enter a valid input")
}

else{
    let newTodo = {
        title: userInputVal,
        uniqueld: lengthOfTodo+1
    }
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    console.log(newTodo);
}
}



let todoList = [
    {
        title:"HTML",
        uniqueld:1
    },
    {
        title:"CSS",
        uniqueld:2
    },
    {
        title:"BOOTSTRAP",
        uniqueld:3
    },

];


function onTodoStatusChange(labelId,checkboxId){
    let myCheckBoxEl = document.getElementById(checkboxId);
    let myLabelEl = document.getElementById(labelId);

    if(myCheckBoxEl.checked===true){
        myLabelEl.classList.add("checked");
    }else{
        myLabelEl.classList.remove("checked");
    }
}
function onDeleteTodo(todoId){
    let DeletedTodo = document.getElementById(todoId);
    todoListContainerEl.removeChild(DeletedTodo);
}
    function createAndAppendTodo(todo) {
        let todoId = "todo" + todo.uniqueld;
        let checkboxId = "mycheckbox" + todo.uniqueld;
        let labelId = "mylabel" + todo.uniqueld;

        let todoCardEl = document.createElement("div");
        todoCardEl.classList.add("todo-card");
        todoCardEl.id = todoId;
        todoListContainerEl.appendChild(todoCardEl);

        let checkboxEl = document.createElement("input");
        checkboxEl.type = "checkbox";
        checkboxEl.id = checkboxId;
        todoCardEl.appendChild(checkboxEl);
        checkboxEl.onclick = function(){
            onTodoStatusChange(labelId,checkboxId);
        }
        let labelContainerEl = document.createElement("label");
        labelContainerEl.classList.add("label-cont")
        labelContainerEl.htmlFor = checkboxId;
        todoCardEl.appendChild(labelContainerEl);

        let titleTodoEl = document.createElement("p");
        titleTodoEl.textContent = todo.title;
        titleTodoEl.id = labelId;
        labelContainerEl.appendChild(titleTodoEl);
        
        let deleteIconEl = document.createElement("i");
        deleteIconEl.classList.add("fa-solid","fa-trash");
        labelContainerEl.appendChild(deleteIconEl);
        deleteIconEl.onclick= function(){
            onDeleteTodo(todoId);
        }
    }

    for (let todo of todoList){
    createAndAppendTodo(todo);
    }