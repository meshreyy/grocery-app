function addItem() {
  // console.log("hello")
  const inputEl = document.getElementsByClassName("new-item-input")[0];
  const value = inputEl.value;
  console.log("Addin:", value);
  // const table = document.getElementById("table");
  var table = document.getElementsByClassName("my-table")[0];
  
  console.log(table.innerHTML)
  // console.log(length(table))
  const rid = `todo-${Math.floor(Math.random() * 99999999)}`;

  

  table.innerHTML += `<tr class="${rid}"><td>${value}</td><td><button onclick="deleteTodo('${rid}')">-</button></td><td><button onclick="quantity(this)">1</button></td></tr>`;
  // table.append(
  //   <tr>hello</tr>
  // )
  inputEl.value="";//clear the placeholder

}

function quantity(button)
{
  //access to the initial value -> if clicked -> add a no.
  // const initial = document.getElementsByClassName(id)[0]; //get input element
  let currentValue= parseInt(button.innerText); //string to number
   if (isNaN(currentValue)) currentValue = 0;
  currentValue += 1;
  button.innerText = currentValue;

  console.log("New quantity:", currentValue);

  // const addon = currentValue++;
  // initial.value=addon;
  // console.log("Adding Quantity:", addon);
  // initial.parentNode.appendChild(initial);
  
}


//fetch table -> get element -> add it to the table

function deleteTodo(id) {
  const element = document.getElementsByClassName(id)[0];
  element.parentNode.removeChild(element);
}