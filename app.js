// ****** SELECT ITEMS **********
// select alert, form , grocery, submitbtn container, list and clear-btn

// 1.first select the ElementInternals, think about how they connect

// let submitBtn = document.querySelector(".submit-btn");
// let input = document.querySelector(".grocery");
// let form = document.querySelector(".grocery-form");
// let alert = document.querySelector(".alert");
// let list = document.querySelector(".grocery-list");
// let groceryContainer = document.querySelector(".grocery-container");
// let clearBtn = document.querySelector(".clear-btn");

// // edit option
// //  create editElement, editFlag and editID
// //  if user submit a form run edit functionv

// // ****** EVENT LISTENERS **********
// form.addEventListener("submit", addItem);

// clearBtn.addEventListener("click", clearItems);

// window.addEventListener("DOMContentLoaded", setupItems());

// function clearItems() {
//   displayAlert("all items removed", "danger");
//   list.innerHTML = "";
//   localStorage.removeItem("list");
// }

// let editFlag = false;
// let editID;
// let paragraph;

// function addItem(e) {
//   e.preventDefault();
//   let value = input.value;

//   let id = new Date().getTime().toString();

//   if (value && !editFlag) {
//     createListItem(id, value);
//     console.log("user is updating");

//     groceryContainer.classList.add("show-container");
//     displayAlert("item added", "success");
//     setBackToDefault();
//     addToLocalStorage(id, value);
//   } else if (value && editFlag === true) {
//     console.log("user is editing");
//     paragraph.innerHTML = input.value;
//     displayAlert("value modified", "success");
//     submitBtn.innerHTML = "Submit";
//     editFlag = false;
//     editLocalStorage(editID, value);

//     setBackToDefault();
//   } else {
//     displayAlert("Empty Value", "danger");
//   }
// }

// // ****** FUNCTIONS **********
// function displayAlert(text, action) {
//   alert.innerHTML = text;
//   alert.classList.add(`alert-${action}`);
//   setTimeout(() => {
//     alert.innerHTML = "";
//     alert.classList.remove(`alert-${action}`);
//   }, 1000);
// }

// function deleteItem(e) {
//   let item = e.currentTarget.parentElement.parentElement;
//   if (list.length < 1) {
//     groceryContainer.classList.remove("show-container");
//   }
//   list.removeChild(item);
//   displayAlert("item deleted", "danger");
// }

// function editItem(e) {
//   console.log("editing");
//   let element = e.currentTarget.parentElement.parentElement;
//   paragraph = element.querySelector(".title");
//   input.value = paragraph.innerHTML;
//   editFlag = true;
//   editID = element.dataset.id;
//   console.log(editID);
//   submitBtn.textContent = "Edit";
// }

// // ****** LOCAL STORAGE **********

// // ****** SETUP ITEMS **********
// function setBackToDefault() {
//   input.value = "";
// }

// function addToLocalStorage(id, value) {
//   console.log("add to local storage");
//   const grocery = { id, value };
//   let items = getLocalStorage();
//   items.push(grocery);
//   localStorage.setItem("list", JSON.stringify(items));
// }

// function getLocalStorage() {
//   return localStorage.getItem("list")
//     ? JSON.parse(localStorage.getItem("list"))
//     : [];
// }

// function removeFromLocalStorage(id) {
//   console.log("remove lcal storage");
//   let items = getLocalStorage();
//   items = items.filter((item) => item.id !== id);
//   localStorage.setItem("list", JSON.stringify(items));
// }

// function editLocalStorage(id, value) {
//   console.log("editing local storage");
//   items = items.map(function (item) {
//     if (item.id === id) {
//       item.value = value;
//     }
//     return item;
//   });
//   localStorage.setItem("list", JSON.stringify(items));
// }

// function setupItems() {
//   let items = getLocalStorage();
//   if (items.length > 0) {
//     items.forEach((item) => {
//       createListItem(item.id, item.value);
//     });
//   }
//   groceryContainer.classList.add("show-container");
// }

// function createListItem(id, value) {
//   let article = document.createElement("article");
//   article.classList.add("grocery-item");
//   let arr = document.createAttribute("data-id");
//   arr.value = id;
//   article.setAttributeNode(arr);
//   article.innerHTML = ` <p class="title">${value}<p>
//       <div class="btn-container">
//               <button class="edit-btn">
//                 <i class="fas fa-edit"></i>
//               </button>
//               <button class="delete-btn">
//                 <i class="fas fa-trash"></i>
//               </button>
//             </div>`;
//   let deleteBtn = article.querySelector(".delete-btn");
//   let editBtn = article.querySelector(".edit-btn");
//   deleteBtn.addEventListener("click", deleteItem);
//   editBtn.addEventListener("click", editItem);
//   list.appendChild(article);
// }

// ** when user submits the form, store the input value
// ** create an id by using Date function (in string value)
// ** create editFlag(if user is not editing)
// if(value is not empty string and user is editing), if(value is not empty string and user is editing  )
//  if value is empty display alert-text in function pattern use stetimeout function to remove the display text after 1 second

//  ** if there is a value and user is not editing, create new Element, add "grocery-item" class
//  ** create data-id by using document.createAttribute
//  ** set value to id (attr.value = id);
//  ** element.setAttributeNode(attr)
//  ** element.innerHTML
//  **list.appendChild(element)
//  ** displayAlert
//  ** add show-container class
//  ** addToLocalStorage
//  ** setBackToDefault

// Session 2
// local storage function takes two parameters

// default function makes sure that the values of input whether the user is editing button text are default (4)

// make clear button useful
// make submit and clear button have their own functions
// select all grocery-items
// if items are greater than 0, remove the specific item.

// select edit-btn and delete-btn

// if user clicks a delete button, select article and remove it from the list
// if list has less than 1 child, remove "show-container" class
// display alert
// set back to default

// make two functions, addToLocalStorage and deletefromlocalstorage

// insert the comments

// when user edits a text, modify the text.
// displayAlert
// editLocalStorage(editID, modityValue)
// setBackToDefault()

// for local storage API
// setItem
// getItem
// removeItem

// for addingItem, if there are items in local storage, get the items in Array.
// else,  return empty array
// push the new grocery items into the items array.

const groceryListContainer = document.querySelector(".grocery-list");
const inputText = document.querySelector(".input-text");
const alertText = document.querySelector(".alert");
let groceryList = [];

render();

// clear all items
document.querySelector(".clear-all").addEventListener("click", (e) => {
  e.preventDefault();
  groceryListContainer.innerHTML = "";
  showAlert("Deleted All items", "warning");
  localStorage.removeItem("lists");
});

// rendering function
function render() {
  addToLocalStorage(groceryList);
  document.querySelector(".form-container").addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputText.value) {
      console.log(inputText.value);
      addItem();
    } else {
      showAlert("Please fill out the form!", "warning");
    }
  });
}

function addItem() {
  console.log(groceryList);
  groceryList.push(inputText.value);
  localStorage.setItem("lists", JSON.stringify(groceryList));
  groceryListContainer.innerHTML = "";
  addToGroceryContainer();
  inputText.value = "";

  showAlert("Completely added!", "success");
}

function showAlert(message, action) {
  alertText.classList.add(action);
  alertText.textContent = message;
  setTimeout(() => {
    alertText.classList.remove(action);
    alertText.textContent = "";
  }, 2000);
}

// This is the function to display the items from the array on the screen. It is intened so that items from the local storage can be displayed after loading.
function addToGroceryContainer() {
  let id = new Date().getTime().toString();
  groceryList.forEach((item) => {
    groceryListContainer.innerHTML += `
        <div data-id=${id}>
          <span>${item}</span>
          <i class="fas fa-trash delete-item"></i>
          <i class="fas fa-edit"></i>
        </div>
  `;
  });
}

function addToLocalStorage(list) {
  list = JSON.parse(localStorage.getItem("lists"));
  if (list) {
    groceryList = [...list];
    addToGroceryContainer();
  }
}

// item is added
// item is added to the array
// item is added to the local storage
