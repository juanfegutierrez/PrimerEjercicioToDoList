# PrimerEjercicioToDoList
Primer ejercicio con HTML, CSS y JS

PRIMER EJERCICIOS MANIPULACION DEL DOM

# DUDAS EJERCICIO:

1. por qué iniciar con un array?

Respuesta:

La línea de código que proporcionaste es una declaración en JavaScript que inicializa una variable llamada **`tasks`** como un array vacío. Esta línea es relevante para el desarrollo de un ToDo list con HTML y CSS porque el propósito de un ToDo list es mantener un registro de tareas pendientes, y el array **`tasks`** se utilizará para almacenar esas tareas.

Aquí hay algunas razones por las que esta línea de código es útil para empezar el desarrollo de un ToDo list:

- **Almacenamiento de tareas:** El array **`tasks`** proporciona una estructura de datos conveniente para almacenar las tareas que el usuario añadirá al ToDo list.
- **Manipulación de tareas:** Con el array **`tasks`**, puedes agregar nuevas tareas, eliminar tareas existentes, marcar tareas como completadas, etc. Esto proporciona la funcionalidad básica necesaria para interactuar con el ToDo list.
- **Integración con otras partes del código:** Una vez que se defina esta variable, puedes usarla en conjunción con HTML para mostrar las tareas en la interfaz de usuario y con CSS para darle estilo al ToDo list según sea necesario.

En resumen, esta línea de código establece una base fundamental para el manejo de tareas en el desarrollo de un ToDo list, lo que facilita la posterior implementación de la lógica y la interfaz de usuario.

1. En el siguente código yo identifico: Variables, funciones y condicionales, si hay algo más, puedes por favor infomarme, y al finalizar, puedes contarme el porqué de estos códigos para el mismo objetivo, crear un ToDO list:

```
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

}espueta:

```

Respuesta:

En el código que proporcionaste, podemos identificar los siguientes elementos:

- **Variables**:
    - **`taskInput`**: Esta variable se utiliza para almacenar una referencia al elemento HTML con el id **`'taskInput'`**.
    - **`taskInputValue`**: Esta variable se utiliza para almacenar el valor del input de tarea después de haber eliminado los espacios en blanco al principio y al final.
- **Funciones**:
    - **`addTask()`**: Esta función se encarga de agregar una nueva tarea al ToDo list.
- **Condicionales**:
    - **`if(taskInputValue !== '')`**: Este condicional verifica si el valor del input de tarea no está vacío antes de agregar la tarea al array **`tasks`**. Si el valor no está vacío, se procede a agregar la tarea al array y a renderizar la lista de tareas.
- **Array y Objeto**:
    - **`tasks.push({ id: Date.now(), text: taskInputValue, completed:false })`**: Aquí se agrega un nuevo objeto al array **`tasks`** que representa una tarea. El objeto tiene tres propiedades: **`id`** (un identificador único generado utilizando **`Date.now()`**), **`text`** (el texto de la tarea obtenido del input), y **`completed`** (un booleano que indica si la tarea está completada o no).

Este código cumple con el objetivo de crear un ToDo list al definir una función **`addTask()`** que se encarga de agregar nuevas tareas al array **`tasks`**. Primero, verifica si el input de la tarea no está vacío. Si no lo está, crea un objeto que representa la tarea y lo añade al array **`tasks`**. Luego, llama a una función **`renderTask()`** (que no está definida en el código proporcionado) para renderizar la lista de tareas en la interfaz de usuario, y finalmente, limpia el valor del input de tarea para prepararlo para la próxima entrada del usuario.

El motivo de que existan diferentes códigos para el mismo objetivo (crear un ToDo list) radica en la diversidad de enfoques y estilos de programación. Cada desarrollador puede tener su propio método preferido para lograr el mismo resultado. Además, diferentes proyectos pueden requerir diferentes funcionalidades o pueden estar diseñados para adaptarse a diferentes necesidades o restricciones específicas del proyecto. Por lo tanto, es común encontrar variaciones en la implementación de un mismo objetivo en distintos proyectos o por diferentes desarrolladores.

```jsx
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
```

1. 

Por último, encuentro dos fuciones de memoria, pero les desconocía, puedes ayudarme a analizar qué funciones hay y para qué sirven:

Respuesta

Claro, aquí tienes el análisis de las dos funciones:

1. **`showtask()`**:
    - Esta función se utiliza para mostrar las tareas guardadas previamente desde el almacenamiento local en la lista de tareas.
    - Utiliza `localStorage.getItem()` para recuperar los datos previamente guardados bajo la clave "data" del almacenamiento local.
    - Luego, establece el contenido HTML de la lista de tareas (`taskList.innerHTML`) con los datos recuperados del almacenamiento local.
    - En última instancia, su función es restaurar las tareas guardadas previamente en la lista de tareas cuando se carga la página.
2. **`showtask()` (Llamada al final)**:
    - La última línea del código es una llamada a la función `showtask()`.
    - Esto asegura que al cargar la página, las tareas previamente guardadas en el almacenamiento local se muestren inmediatamente en la lista de tareas, proporcionando una experiencia continua al usuario.

En resumen, estas dos funciones trabajan juntas para permitir que las tareas de la lista se guarden y se restauren automáticamente desde el almacenamiento local del navegador, lo que proporciona persistencia de datos y una experiencia mejorada al usuario al volver a cargar la página.

# VIDEO DE REFERENCIA:

[![Alt text](https://img.youtube.com/vi/G0jO8kUrg-I/0.jpg)](https://www.youtube.com/watch?v=G0jO8kUrg-I)

Nota: Este texto es creado por IA con supervisión de un humano. (Pendiente por validación del docente)
