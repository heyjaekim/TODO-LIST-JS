const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector(".text"),
  toDoDate = toDoForm.querySelector(".date"),
  toDoTime = toDoForm.querySelector(".time"),
  // toDoLocation = toDoForm.querySelector(".location"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
    // return toDo.id !== li.id;
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  toDos = toDos.sort((a, b) => a.dateSplitted - b.dateSplitted);
  // console.log(toDos);
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text, date, time, location) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  let dateSplitted = date.split("-");
  dateSplitted = dateSplitted[0] + dateSplitted[1] + dateSplitted[2];

  delBtn.innerText = "❌";
  delBtn.setAttribute("class", "delBtn_class");
  delBtn.append.classList = "delBtn";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = `Due date: ${date} until ${time} ⚡ ${text} `;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    date: date,
    dateSplitted: dateSplitted,
    time: time,
    text: text,
    location: location,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentInput = toDoInput.value;
  const currentDate = toDoDate.value;
  const currentTime = toDoTime.value;
  paintToDo(currentInput, currentDate, currentTime);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text, toDo.date, toDo.time);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
