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

}

/******************************************
    Filter Tasks
******************************************/
function filterTasks(e) {
    
    console.log('filter');
    const text = e.target.value.toLowerCase();
    
    // No need to convert to array when use querySelectorAll because returns node list not HTML collection
    const allItems = document.querySelectorAll('.collection-item');
    allItems.forEach( (item) => {

        const currentItemText = item.firstChild.textContent;

        if (currentItemText.toLowerCase().indexOf(text) != -1 ) {
            tasks.style.display = "block";
        } else {
            tasks.style.display = "none";

        }
    })   
    // 

}