


let inputElement = document.querySelector("#inputfield")
let btn  = document.querySelector(".btn")
let todoData = document.querySelector("#todoData");
let tododList = document.querySelector(".todoList")

const addTodo=()=>{
    const inputValue = inputElement.value;
    let pElement = document.createElement("p");
    pElement.textContent = inputValue
    tododList.appendChild(pElement)
    inputElement.value =""
}

btn.addEventListener("click",()=>{
    addTodo();
})

tododList.addEventListener("click", (e)=>{
    let currentElement = e.target
    console.log(currentElement);
    currentElement.remove();
})

