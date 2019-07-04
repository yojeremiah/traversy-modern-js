// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();
function loadEventListeners() {
  // DOM Load Event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear all tasks event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local storage
function getTasks() {
  let tasks;
  // Check if array of tasks is stored in LS
  // If none are stored, create an empty array
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  // If it exists, grab the array
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create new li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(task));
    // Create new link element (for del button on task)
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    // Append the new task li to the task list
    taskList.appendChild(li);
  });
}

// Add a Task
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }
  // Create new li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element (for del button on task)
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  // Append the new task li to the task list
  taskList.appendChild(li);

  // Store task in local storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear input field
  taskInput.value = '';
  // Prevent default form submission functionality
  e.preventDefault();
}

// Store task to local storage
function storeTaskInLocalStorage(task) {
  let tasks;
  // Check if array of tasks is stored in LS
  // If none are stored, create an empty array
  if (localStorage.getItem(tasks) === null) {
    tasks = [];
  }
  // If it exists, grab the array
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // Add the task to the array
  tasks.push(task);
  // Put the modified task array back into LS
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove a task
function removeTask(e) {
  // Check if the 'x' is clicked (based on anchor tag's class)
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Delete task?')) {
      // Remove the li element (parent of the anchor tag)
      e.target.parentElement.parentElement.remove();
      // Remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  // Check if array of tasks is stored in LS
  // If none are stored, create an empty array
  if (localStorage.getItem(tasks) === null) {
    tasks = [];
  }
  // If it exists, grab the array
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  // Loop thru task array and search for task we want to delete
  tasks.forEach(function (task, index) {
    // If the task we are deleting matches the task in the arr
    if (taskItem.textContent === task) {
      // Remove that item at the given index
      tasks.splice(index, 1);
    }
  });
  // Put the modified array back into LS
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all tasks
function clearTasks() {
  if (confirm('Clear all tasks in the list?')) {
    // InnerHTML method
    // taskList.innerHTML = '';

    // While-loop method
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
  }

  // Clear tasks from LS
  clearTasksFromLocalStorage();
}

// Clear all tasks from local storage
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// Filter the task list
function filterTasks(e) {
  // Grab text from input as it's typed
  let text = e.target.value.toLowerCase();
  // Loops through the collection of tasks
  document.querySelectorAll('.collection-item').forEach(function (task) {
    // Grab the text stored in the li element
    let item = task.firstChild.textContent;
    // Check if the current filter string exists in a task
    // If yes, display the li element
    if (item.toLowerCase().indexOf(text) !== -1) {
      task.style.display = 'block';
    }
    // If not, do not display the li element
    else {
      task.style.display = 'none';
    }
  });
}
