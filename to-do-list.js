function addTask() {
    var taskInput = document.getElementById("task");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Masukkan tugas!");
        return;
    }

    createTask(taskText);
    taskInput.value = "";
}

function createTask(taskText) {
    var taskList = document.getElementById("task-list");
    var li = document.createElement("li");
    li.textContent = taskText;

    // Menambahkan tombol close
    var closeButton = document.createElement("button");
    closeButton.textContent = "x";
    closeButton.className = "close-btn";
    
    closeButton.addEventListener("click", function() {
        if (li.classList.contains("completed")) {
            removeTask(li);
        } else {
            alert("Tugas harus di-strikethrough terlebih dahulu sebelum dapat dihapus.");
        }
    });

    li.appendChild(closeButton);

    // Menambahkan event listener untuk menoggle strikethrough saat di-klik
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    taskList.appendChild(li);
}

function updateCloseButton(task, closeButton) {
    if (task.classList.contains("completed")) {
        closeButton.removeAttribute("disabled");
    } else {
        closeButton.setAttribute("disabled", "disabled");
    }
}

var taskInput = document.getElementById("task");
taskInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function removeTask(task) {
    var taskList = document.getElementById("task-list");
    taskList.removeChild(task);
}

document.addEventListener("keyup", function(event) {
    if (event.key === "Delete") {
        var activeTask = document.querySelector(".completed");
        if (activeTask) {
            removeTask(activeTask);
        } else {
            alert("Pilih tugas yang telah di-strikethrough untuk dihapus.");
        }
    }
});