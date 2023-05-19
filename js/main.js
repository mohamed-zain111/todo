let input = document.getElementById("input");
let add = document.getElementById("add");

let lengthItems = document.querySelector(".lengthItems");
let clear = document.querySelector(".clear");

let arrTask;

if (localStorage.tasks != null) {
  arrTask = JSON.parse(localStorage.tasks);
} else {
  arrTask = [];
}

add.onclick = function () {
  let dataTask = {
    task: input.value.toLowerCase(),
  };

  if (input.value != "") {
    arrTask.push(dataTask);
    localStorage.setItem("tasks", JSON.stringify(arrTask));
  }

  input.value = "";

  showData();
  lengthItem();
};

// Show Data

function showData() {
  let read = "";

  for (let i = 0; i < arrTask.length; i++) {
    read += `
        <div class="task">
        <h2>${arrTask[i].task}</h2>
        <img onclick = "deleteItem(${i})" src="img/icon-cross.svg" alt="" />
        </div>
        `;
  }
  document.querySelector(".boxTask").innerHTML = read;

  if (arrTask.length == 0) {
    document.querySelector(".action").style.display = "none";
  } else {
    document.querySelector(".action").style.display = "flex";
  }
}

showData();

// delete

function deleteItem(i) {
  arrTask.splice(i, 1);
  localStorage.tasks = JSON.stringify(arrTask);
  showData();
  lengthItem();
}

// length Item

function lengthItem() {
  document.querySelector(".lengthItems").innerHTML = arrTask.length;
  showData();
}

lengthItem();

// delete All

function deleteAll() {
  arrTask.splice(0);
  localStorage.clear();
  showData();
}
