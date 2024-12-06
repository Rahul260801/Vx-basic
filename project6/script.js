document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        const taskinp = document.querySelector('#bar input'); 
        const tasktext = taskinp.value.trim();

        if (tasktext !== "") {
            const taskitem = document.createElement('div');
            taskitem.classList.add('task');
            taskitem.innerHTML = `
                <span class="tasktext"> ${tasktext}</span>
                <button class="editbtn">Edit</button>
                <button class="dltbtn">Delete</button>
            `;

            document.getElementById("newtask").appendChild(taskitem);
            taskinp.value = "";

            taskitem.querySelector('.dltbtn').addEventListener('click', function() {
                taskitem.remove(); // Remove the task item
            });

            taskitem.querySelector('.editbtn').addEventListener('click', function() {
                const currtext = taskitem.querySelector('.tasktext').innerText;
                const newTask = prompt("Edit your task", currtext);

                if (newTask !== null && newTask.trim() !== "") {
                    taskitem.querySelector('.tasktext').innerText = newTask.trim();
                }
            });
        } else {
            alert("Please enter a task");
        }
    });
});
