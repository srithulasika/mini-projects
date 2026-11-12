const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function render() {
  list.innerHTML = "";
  tasks.forEach(function (task, index) {
    const li = document.createElement("li");
    li.textContent = task.text;
    li.dataset.index = index;
    if (task.done) li.classList.add("done");
    const del = document.createElement("button");
    del.textContent = "Delete";
    del.className = "delete-btn";
    li.append(del);
    list.append(li);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = input.value.trim();
  if (text === "") return;
  tasks.push({text: text, done: false});
  save();
  render();
  form.reset();
});

list.addEventListener("click", function (e) {
  const li = e.target.closest("li");
  if (!li) return;
  const index = Number(li.dataset.index);

  if (e.target.matches(".delete-btn")) {
    tasks.splice(index, 1);
  } 
  else {
    tasks[index].done = !tasks[index].done;
  }
  save();
  render();
});

render();
