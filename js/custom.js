// Variables
let input = document.getElementById("task-input");
let taskList = document.getElementById("task-list");
let tasks = taskList.children;
let k = tasks.length;

// Task Object
var Task = {
    addTick: function(task){
        let span = document.createElement("span");
        task.insertBefore(span, task.childNodes[0]);
    },
    addClose: function(task){
        let span = document.createElement("span");
        let txt = document.createTextNode("\u00D7"); 
        span.appendChild(txt);

        span.classList.add("close");
        task.appendChild(span);
    },
    remove: function(task){
        task.lastChild.addEventListener("click", function(){
            this.parentElement.remove();
        });
    },
    checked: function(task){
        task.addEventListener('click', function(){
            this.classList.toggle('checked');
            this.firstChild.classList.toggle('done');
            new Audio("./assets/audio/Speech On.wav").play();
        });
    },
    addAll: function(task){
        this.addTick(task);
        this.addClose(task);
        this.remove(task);
        this.checked(task);
    }
};

// Sets Default style to Task
for(let i=0; i<k; i++){
    let task = tasks[i];
    Task.addAll(task);
}

// Task Add function
function AddTask(){
    let tasks = taskList.children;
    let task = document.createElement("li");
    let txt = document.createTextNode(input.value);

    task.appendChild(txt);

    if(input.value === ''){
        alert("You must write something!");
    }else{
        taskList.appendChild(task);
        Task.addAll(task);
    new Audio("./assets/audio/tada.wav").play();
    }
    
    input.value = "";
}

// Adds Task on Enter
input.addEventListener("keypress", function(event){
    if(event.keyCode === 13) AddTask();
});