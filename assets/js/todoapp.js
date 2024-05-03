//Manipulacion del DOM
// La manipulación del DOM (Document Object Model), se refiere a la capacidad 
// de modificar estructura, contenido y estilo de un documento HTML.

//Formas de acceder a un elemento DOM

//document.getElementById()
//document.getElementsByClassName()
//document.getElementsByTagName()
//document.querySelector()
//document.querySelectorAll()

let tasks = [];

function addTask(){
    const taskInput = document.getElementById('taskInput');
    console.log(taskInput)
    const taskInputValue = taskInput.value.trim();

    if(taskInputValue !== ''){
        
        tasks.push({
            id: Date.now(),
            text: taskInputValue,
            completed:false
        })
        renderTask();
        taskInput.value = "";
        //alert("debes ingresar una tarea");
    }
}

function renderTask(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    tasks.forEach(data =>{
        //Crear el elemento de la lista
        const li = document.createElement("li");
        li.textContent = data.text;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    })
    dataSaved ()
}

taskList.addEventListener("click", function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checkeado");
        dataSaved ()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        dataSaved ()
    }
}, false

)

function dataSaved (){
    localStorage.setItem("data", taskList.innerHTML);
}

function showtask(){
    taskList.innerHTML = localStorage.getItem("data");
}

showtask()