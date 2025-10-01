let Count = 0;
document.querySelector("#inputField").value = `Total Count : ${Count}`;

function Counter() {
  Count++;
  document.querySelector("#inputField").value = `Total Count : ${Count}`;
}

function reset() {
  Count = 0;
  document.querySelector("#inputField").value = `Total Count : ${Count}`;
}