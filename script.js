const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const MAX_TASKS = 15;
let taskCount = 0;
function addTask(){
  if(taskCount >= MAX_TASKS){
    alert("You've reached the maximum limit of tasks");
    localStorage.removeItem("data");
  }
  else if(inputBox.value === ''){
    alert("You must write something!");
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}
inputBox.addEventListener("keypress",function(e){
  if(e.key === 'Enter'){
    addTask();
  }
})
listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    taskCount--;
    saveData();
  }
},false)

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
function deleteAll(){
  listContainer.innerHTML = '';
  taskCount = 0;
  localStorage.removeItem("data");
}
