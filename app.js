console.log('connected...');

// Define UI Variables
const form = document.querySelector('#task-form');
const tasks = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filterInput = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load All Event Listeners
loadEventListeners();


/******************************************
    FUNCTIONS
******************************************/

function loadEventListeners() {
    // DOM Load Event Listener
    document.addEventListener('DOMContentLoaded', getTasks);

    // Add Task Form Even Listener
    form.addEventListener('submit', addTask);

    // Use evend deligation to drip down
    tasks.addEventListener('click', removeTask);

    // Add Remove All Task Event Listener
    clearBtn.addEventListener('click', removeAllTasks);

    // Filter Tasks Event Listener 
    filterInput.addEventListener('keyup', filterTasks);
}

/******************************************
    Add Task
******************************************/
function addTask(e) {
    e.preventDefault();

    if ( taskInput.value === '') {
        alert('Please Add a Task!');
    } else {
        // Create li Element
        const task = document.createElement('li');
        task.className = 'collection-item';

        // Create Dom Element
        creatElementTask(taskInput.value);
        
        // Add to local
        storeTaskInLocalStorage(taskInput.value);

        // Reset Input
        taskInput.value = '';

        
    }

    

    console.log( 'Task Add Clicked');
}

/******************************************
    Remove Task
******************************************/

function removeTask(e) {
    const selected = e.target.parentElement;

    if (selected.classList.contains('delete-item')) {

        const message =`Are You Sure you want to remove ${selected.parentElement.textContent}.`;
        if ( confirm(message) ) {
            // Remove li from the ul
            selected.parentElement.remove();

            // Remove Item From Local Storage
            removeTaskFromLocalStorage(selected.parentElement);
        }     

    }

}


/******************************************
    Remove All Tasks
******************************************/
function removeAllTasks () {

    /*
    if ( tasks.children.length > 0 ) {            
        if ( confirm('You will destroy everything.') ) {

        
            // Convert HTML collection to array
            const newArray = Array.from(tasks.children);

            newArray.forEach( (item) => {
                item.remove();
            });
            

        }    
    } 
    */

    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
    }

    clearAllTasks();

}

/******************************************
    Filter Tasks
******************************************/
function filterTasks(e) {
    
    const text = e.target.value.toLowerCase();
    
    // No need to convert to array when use querySelectorAll because returns node list not HTML collection
    const allItems = document.querySelectorAll('.collection-item');
    allItems.forEach( (item) => {

        const currentItemText = item.firstChild.textContent;

        
        // Display Filtered Data
        if (currentItemText.toLowerCase().indexOf(text) != -1 ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
        
        
    
    })   
    // 

}

/******************************************
    Store in Local storage
******************************************/
function storeTaskInLocalStorage(task) {


    let items = '';

    if (localStorage.getItem('tasks') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('tasks'));
    }

    items.push(task);

    // Saves data to local storage
    localStorage.setItem('tasks', JSON.stringify(items));

    console.log(task, 'Will be stored.');

}
/******************************************
    Get Tasks
******************************************/
function getTasks() {

    let items = '';

    if (localStorage.getItem('tasks') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('tasks'));
    }

    items.forEach( (item) => {
        creatElementTask(item);
        console.log(item)
    });

    console.log('Task Retrieved', items);

}

function creatElementTask(taskItem) {
    // Create li Element
    const task = document.createElement('li');
    task.className = 'collection-item';

    // Create Text Node 
    const text = document.createTextNode(taskItem);


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
}

/******************************************
    Remove Task From Local Storage
******************************************/

function removeTaskFromLocalStorage(taskToRemove) {
    console.log(taskToRemove);

    let items = '';

    if (localStorage.getItem('tasks') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('tasks'));
    }

    let filteredArray = items.filter( (item) => {
        return item !== taskToRemove.textContent;
    })

    localStorage.setItem('tasks', JSON.stringify(filteredArray));
}

/******************************************
    Clear All Tasks Local Storage
******************************************/
function clearAllTasks() {
    localStorage.clear();
}

