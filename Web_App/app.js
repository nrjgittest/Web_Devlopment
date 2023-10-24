const taskInput = document.getElementById('taskInput');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

// Add a new task
function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== '') {
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="complete-button">Complete</button>
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
      <span class="timestamp"></span>
    `;
    const timestamp = li.querySelector('.timestamp');
    const date = new Date();
    timestamp.innerText = `Added: ${date.toLocaleString()}`;

    pendingTasksList.appendChild(li);
    taskInput.value = '';

    // Attach the complete button functionality
    const completeButton = li.querySelector('.complete-button');
    completeButton.addEventListener('click', completeTask);

    // Attach the edit button functionality
    const editButton = li.querySelector('.edit-button');
    editButton.addEventListener('click', editTask);

    // Attach the delete button functionality
    const deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', deleteTask);
  }
}

// Mark a task as complete and move it to the completed tasks list
function completeTask() {
  const taskItem = this.parentNode;
  taskItem.classList.add('completed-task');
  taskItem.querySelector('.complete-button').remove();
  completedTasksList.appendChild(taskItem);

  const timestamp = taskItem.querySelector('.timestamp');
  const date = new Date();
  timestamp.innerText = `Completed: ${date.toLocaleString()}`;
}

// Edit a task
function editTask() {
  const taskItem = this.parentNode;
  const taskText = taskItem.querySelector('span').textContent;
  const updatedTaskText = prompt('Edit Task', taskText);

  if (updatedTaskText !== null && updatedTaskText.trim() !== '') {
    taskItem.querySelector('span').textContent = updatedTaskText;
  }
}

// Delete a task
function deleteTask() {
  const taskItem = this.parentNode;
  taskItem.remove();
}

// Add a new task when Enter key is pressed
taskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});