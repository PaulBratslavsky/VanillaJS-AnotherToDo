console.log('connected...');

// Hate Typing Console Log
const log = (item) => {
    console.log(item);
}

// Define UI Variables
const form = document.querySelector('#task-form');
const tasks = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterInput = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();


// FUNCTIONS
function loadEventListeners() {
    // Add Task Form Even Listener
    form.addEventListener('submit', addTask);
}
    
function addTask(e) {
    e.preventDefault();

    if ( taskInput.value === '') {
        alert('Please Add a Task!');
    } else {
        log(taskInput.value);

        // Create li Element
        const task = document.createElement('li');
        task.className = 'collection-item';

        // Create Text Node 
        const text = document.createTextNode(taskInput.value);


        // Add Task Node to li
        task.appendChild(text);

        // Create Delete Task Button Link
        const deleteTask = document.createElement('a')
        deleteTask.className ='delete-item secondary-content';
        deleteTask.style.cursor = 'pointer';

        deleteTask.innerHTML = '<i class="fa fa-remove"></i>';

        // Add Delete Btn to Li
        task.appendChild(deleteTask);


        // Add Task to Collection
        tasks.appendChild(task);
        
        // Reset Input
        taskInput.value = '';
    }

    

    console.log( 'Task Add Clicked');
}