const taskname = document.querySelector("#inputtext");
const idea = document.querySelector(".idea");
const placement = document.querySelector(".placement");
const addItemButton = document.getElementById("addItem");

addItemButton.addEventListener("click", function(e) {
    e.preventDefault();    
    
    let text = taskname.value;
    let ideatext = idea.value;
    
    if(text === "" || ideatext === "") {
        alert('Not a valid task to do ');
        return;
    }
    
    const newTask = document.createElement("div");
    newTask.classList.add("taskbox", "mb-3", "p-3", "border", "border-secondary");
    
    const taskP = document.createElement("h5");
    taskP.textContent = text;
    
    const taskIdea = document.createElement("div");
    taskIdea.textContent = ideatext;
    
    const timestampSpan = document.createElement("span");
    timestampSpan.textContent = new Date().toLocaleString(); 
    timestampSpan.classList.add("timestamp"); 
    
    const removeButton = document.createElement("button");
    removeButton.classList.add("btn", "btn-danger", "btn-sm", "remove-task");                
    removeButton.textContent = "X";
    
    removeButton.addEventListener("click", function(e) {
        const toRemove = e.target.parentNode;
        toRemove.remove();
    });
    
    newTask.appendChild(taskP);
    newTask.appendChild(taskIdea);
    newTask.appendChild(removeButton);
    newTask.appendChild(timestampSpan);
    
    placement.appendChild(newTask);

    taskname.value = "";
    idea.value = "";
});
