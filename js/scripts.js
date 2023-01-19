/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#sideNav',
          offset: 74,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});


//Problem: user interaction doesn't provide desired results
//Solution: add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); // new-task
// var options = $('#select').find('option').map(function() {
//     return $(this).val();
// }).get() // new-task

var label2 = document.createElement("label2");

var ops = (target) => {
  const text =  target.options[target.selectedIndex].text;
  // return text;
  // var options = document.getElementById("select");
  // console.log(options);
  // return options;
  
  console.log(target.value);

  // option의 text 값
  //console.log(target.options[target.selectedIndex].text);
  label2.innerText = text;
}
var addButton = document.querySelector(".button");//first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks

//New Task List item

var createNewTaskElement = function(taskString) {
// create List Item
var listItem = document.createElement("li");
// input checkbox
var checkBox = document.createElement("input");
// label
var label = document.createElement("label");
// input (text)
var editInput = document.createElement("input");
// button.edit
var editButton = document.createElement("button");
// button.delete
var deleteButton = document.createElement("button");
var product = document.createElement("product");


//Each element needs modified 

checkBox.type = "checkBox";
editInput.type = "text";
editButton.innerText = "Edit";
editButton.className = "edit";
deleteButton.innerText = "Delete";
deleteButton.className = "delete";

label.innerText = taskString;

// Each element needs appending
listItem.appendChild(checkBox);
listItem.appendChild(label2);
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);
listItem.appendChild(product);

return listItem;
}


//Add a new task
var addTask = function() {
console.log("Add Task...");
//Create a new list item with the text from the #new-task:
var listItem = createNewTaskElement(taskInput.value);
//Append listItem to incompleteTaskHolder
incompleteTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
taskInput.value = "";
}


var addOptions = function() {
  console.log("Add Options...");
  //Create a new list item with the text from the #new-task:
  var listItem = createNewTaskElement(ops(this));
  //Append listItem to incompleteTaskHolder
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  options = "";
}


//Edit an existing task
var editTask = function() {
  console.log("Edit Task...");

var listItem = this.parentNode;

var editInput = listItem.querySelector("input[type=text]");
var label2 = listItem.querySelector("label2");
var label = listItem.querySelector("label");

var containsClass = listItem.classList.contains("editMode");


// if class of the parent is .editMode
if (containsClass) {
    //Switch from .editMode
    //label text become the input's value
    label.innerText = editInput.value;
} else {
    //Switch to .editMode
    //input value becomes the labels text
     editInput.value = label.innerText;
}
//Toggle .editMode on the parent 
listItem.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask = function () {
  console.log("Delete Task...");
  //Remove the parent list item from the ul
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
 console.log("Task Complete...");
//When the Checkbox is checked 
//Append the task list item to the #completed-tasks ul
 var listItem = this.parentNode;
 completedTasksHolder.appendChild(listItem);
 bindTaskEvents(listItem, taskIncomplete);
}


//Mark a task as incomplete
var taskIncomplete = function() {
console.log("Task Incomplete...");
 //When the checkbox is unchecked appendTo #incomplete-tasks
var listItem = this.parentNode;
incompleteTasksHolder.appendChild(listItem);
bindTaskEvents(listItem, taskCompleted);
}


//Set the click handler to the addTask function
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", addOptions); 


var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind List item events");
  // select listitems chidlren
  var checkBox = taskListItem.querySelector('input[type="checkbox"]');
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to edit button
  editButton.onclick = editTask;
  //bind deleteTask to delete button
   deleteButton.onclick = deleteTask;
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;

}

//cycle over incompleteTaskHolder ul list items
for (var i = 0; i < incompleteTasksHolder.children.length; i ++) {
//bind events to list item's children (taskCompleted)	
bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}

//cycle over completedTaskHolder ul list items
for (var i = 0; i < completedTasksHolder.children.length; i ++) {
//bind events to list item's children (taskCompleted)	
bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

var target = document.querySelectorAll('.btn_open');
var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
var targetID;

// 팝업 열기
for(var i = 0; i < target.length; i++){
target[i].addEventListener('click', function(){
  targetID = this.getAttribute('href');
  console.log(targetID);
  document.querySelector(targetID).style.display = 'block';
  
});
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
btnPopClose[j].addEventListener('click', function(){
  this.parentNode.parentNode.style.display = 'none';
});
}

function resize(obj) {
obj.style.height = '1px';
obj.style.height = (12 + obj.scrollHeight) + 'px';
}
