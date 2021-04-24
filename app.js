// // // // // // // let val;

// // // // // // // val=document;
// // // // // // // val=document.all;
// // // // // // // val=document.all[0];
// // // // // // // val=document.all.length;
// // // // // // // val=document.head;
// // // // // // // val=document.body;
// // // // // // // val=document.doctype;
// // // // // // // val=document.domain;
// // // // // // // val=document.URL;
// // // // // // // val=document.characterSet;
// // // // // // // val=document.contentType;


// // // // // // // val=document.forms;
// // // // // // // val=document.forms[0];
// // // // // // // val=document.forms[0].id;
// // // // // // // val=document.forms[0].method;


// // // // // // // val=document.links;
// // // // // // // val=document.links[0];
// // // // // // // val=document.links[0].id;
// // // // // // // val=document.links[0].className;
// // // // // // // val=document.links[0].classList[0];


// // // // // // // val=document.images;

// // // // // // // val = document.scripts;
// // // // // // // val=document.scripts[2].getAttribute('src');


// // // // // // // let scripts = document.scripts;
// // // // // // // let scriptsArray = Array.from(scripts);
// // // // // // // scriptsArray.forEach(function (script){
// // // // // // //   console.log(script);
// // // // // // // });

// // // // // // // //Output
// // // // // // // console.log(val);


// // // // // // //Never use jQuery unless needed for dom manipulation 
// // // // // // //Vanilla Js single element or multiple elements

// // // // // // //get element by id
// // // // // // // console.log(document.getElementById('task-title'));

// // // // // // // //Get things from elements
// // // // // // // console.log(document.getElementById('task-title').id);
// // // // // // // console.log(document.getElementById('task-title').className);

// // // // // // // const taskTitle = document.getElementById('task-title');
// // // // // // // //Do things to styling --change styles

// // // // // // // taskTitle.style.background = '#333';

// // // // // // // taskTitle.style.color = '#fff';
// // // // // // // taskTitle.style.padding = '5px';

// // // // // // // // taskTitlestyle.display = 'none';

// // // // // // // //Change Content 
// // // // // // // taskTitle.textContent = 'Task List';

// // // // // // // taskTitle.innerText = 'Task List New';

// // // // // // // taskTitle.innerHTML = '<span style="color:red">Task List </span>';


// // // // // // //Query Selector -- New and much more powerful

// // // // // // // console.log(document.querySelector('#task-title'));
// // // // // // // console.log(document.querySelector('.card-title'));
// // // // // // // console.log(document.querySelector('h5'))
// // // // // // //   ;

// // // // // // // document.querySelector('li').style.color = 'red';
// // // // // // // document.querySelector('ul li').style.color = 'blue';
// // // // // // // document.querySelector('li:last-child').style.color = 'red';
// // // // // // // document.querySelector('li:nth-child(3)').style.color = 'orange';
// // // // // // // document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// // // // // // // document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// // // // // // // document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


// // // // // // //Get Elements by class Name
// // // // // // // const items = document.getElementsByClassName('collection-item');
// // // // // // // console.log(items);
// // // // // // // console.log(items[0]);

// // // // // // // items[0].style.color='red';
// // // // // // // items[3].textContent='Hello';

// // // // // // // const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// // // // // // // console.log(listItems);


// // // // // // //document get elemeny by tag name 
// // // // // // // let lis = document.getElementsByTagName('li');
// // // // // // // console.log(lis);
// // // // // // // console.log(lis[1]);
// // // // // // // lis[0].style.color='red';
// // // // // // // lis[1].textContent='Hello';

// // // // // // // //Convert HTML Collection into array

// // // // // // // lis = Array.from(lis);
// // // // // // // lis.reverse();
// // // // // // // lis.forEach(function (li,index){
// // // // // // //   console.log(li.className);
// // // // // // //   li.textContent=`${index} : Hello`;
// // // // // // // });


// // // // // // //document.querySelectorAll -- Node List not html collection

// // // // // // const items = document.querySelectorAll('ul.collection li.collection-item');

// // // // // // items.forEach(function (item, index) {
// // // // // //   item.textContent = `${index} : Hello`;
// // // // // // });

// // // // // // const liOdd = document.querySelectorAll('li:nth-child(odd)');
// // // // // // const liEven = document.querySelectorAll('li:nth-child(even)');

// // // // // // liOdd.forEach(function (li, index) {
// // // // // //   li.style.background = '#ccc';
// // // // // // });

// // // // // // for (let i = 0; i < liEven.length; i++) {
// // // // // //   liEven[i].style.background = '#f4f4f4';
// // // // // // }
// // // // // // console.log(items);

// // // // // let val;

// // // // // const list = document.querySelector('ul.collection');

// // // // // const listItem = document.querySelector('li.collection-item:first-child');

// // // // // val = listItem;
// // // // // val=list;

// // // // // //get child nodes node list
// // // // // val = list.childNodes;
// // // // // val=list.childNodes[0];
// // // // // val=list.childNodes[0].nodeName;
// // // // // val=list.childNodes[1].nodeType;

// // // // // //1- Element, 2- Attribute (deprecated), 3 - Text node, 8- Comment, 9-Document itslef, 10-Doctype

// // // // // //get children element nodes html collection mostly we use this
// // // // // val=list.children;
// // // // // val=list.children[0];
// // // // // val=list.children[1].textContent='Hello';
// // // // // //Children of children
// // // // // val=list.children[3].children[0];

// // // // // //First Child
// // // // // val=list.firstChild;
// // // // // val=list.firstElementChild;

// // // // // //Last Child
// // // // // val=list.lastChild;
// // // // // val=list.lastElementChild;

// // // // // //Count Child Elements
// // // // // val=list.childElementCount;

// // // // // // Get Parent Node
// // // // // val=listItem.parentNode;
// // // // // val=listItem.parentElement;

// // // // // val=listItem.parentElement.parentElement;


// // // // // //Get next Siblings 
// // // // // val = listItem.nextSibling;
// // // // // val=listItem.nextElementSibling;

// // // // // //Get Prev Sibling
// // // // // val=listItem.previousSibling;
// // // // // val=listItem.previousElementSibling;

// // // // // console.log(val);


// // // // //Create Element

// // // // // const li = document.createElement('li');

// // // // // //Add class
// // // // // li.className = 'collection-item';

// // // // // // add id
// // // // // li.id = 'new-item';

// // // // // // add attribute
// // // // // li.setAttribute('title', 'New Item');

// // // // // //Create text node and append
// // // // // li.appendChild(document.createTextNode('Hello World'));

// // // // // //create new link element
// // // // // const link = document.createElement('a');
// // // // // //add classes
// // // // // link.className='delete-item secondary-content';
// // // // // //add icon html
// // // // // link.innerHTML='<i class="fa fa-remove"></i>';

// // // // // //append link to li
// // // // // li.appendChild(link);
// // // // // //append li as child to ul
// // // // // document.querySelector('ul.collection').appendChild(li);


// // // // // console.log(li);
// // // // // console.log(link);



// // // // //Replace element

// // // // //Create Element
// // // // const newHeading = document.createElement('h2');

// // // // newHeading.id='task-title';


// // // // //New text node
// // // // newHeading.appendChild(document.createTextNode('Task List New'));

// // // // //Get the Old Heading h5
// // // // const oldHeading = document.getElementById('task-title');

// // // // //Parent
// // // // const cardAction = document.querySelector('.card-action');

// // // // //Replace
// // // // cardAction.replaceChild(newHeading,oldHeading);


// // // // //Remove Element
// // // // const lis=document.querySelectorAll('li');
// // // // const list = document.querySelector('ul');

// // // // //Remove list item
// // // // lis[0].remove();

// // // // //Remove child element
// // // // list.removeChild(lis[2]);

// // // // console.log(newHeading);
// // // // console.log(oldHeading);

// // // // //classes and attributes

// // // // const firsLi = document.querySelector('li:first-child');
// // // // const link = firsLi.children[0];


// // // // let val;


// // // // //classes
// // // // val=link.className;
// // // // val=link.classList;
// // // // val=link.classList[0];

// // // // link.classList.add('test');
// // // // link.classList.remove('test');
// // // // val = link;

// // // // //attributes
// // // // val=link.getAttribute('href');
// // // // val=link.setAttribute('href','https:google.com/');
// // // // link.setAttribute('title','google');
// // // // val=link.hasAttribute('href');
// // // // link.removeAttribute('title');
// // // // val=link;


// // // // console.log(val);




// // // //Event Listeners
// // // // document.querySelector('.clear-tasks').addEventListener('click',function(e){
// // // //   console.log('Hello World');

// // // //   // e.preventDefault();
// // // // });

// // // document.querySelector('.clear-tasks').addEventListener('click', onClick);

// // // function onClick(e) {
// // //   // console.log('Clicked');

// // //   let val;
// // //   val = e;

// // //   //Event target element

// // //   val = e.target;
// // //   val = e.target.id;
// // //   val = e.target.className;
// // //   val = e.target.classList;
// // //   // e.target.innerText='Hello';


// // //   //Event Type
// // //   val = e.type;

// // //   //Timestamp
// // //   val = e.timeStamp;

// // //   //Coords evnt relative to window
// // //   val = e.clientY;
// // //   val = e.clientX;

// // //   //Coords evnt relative to window
// // //   val=e.offsetY;
// // //   val=e.offsetX;

// // //   console.log(val);
// // // }


// // //Mouse Events

// // const clearBtn = document.querySelector('.clear-tasks');
// // const card = document.querySelector('.card');
// // const heading = document.querySelector('h5');

// // // //click
// // // clearBtn.addEventListener('click',runEvent);
// // // //Double click
// // // clearBtn.addEventListener('dblclick',runEvent);
// // //Mousedown
// // // clearBtn.addEventListener('mousedown',runEvent);
// // //mouse up
// // // clearBtn.addEventListener('mouseup',runEvent);
// // //mouse enter
// // // card.addEventListener('mouseenter',runEvent);
// // //mouseleave
// // // card.addEventListener('mouseleave',runEvent);
// // //mouse over 
// // // card.addEventListener('mouseover',runEvent);
// // //mouse out
// // // card.addEventListener('mouseout',runEvent);

// // //mouse move
// // card.addEventListener('mousemove', runEvent);
// // //Event Handler
// // function runEvent(e) {
// //   console.log(`EVENT TYPE : ${e.type}`);
// //   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

// //   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// // }



// //form events
// const form = document.querySelector('form');
// const taksInput = document.getElementById('task');
// const heading = document.querySelector('h5');


// //clear input
// taksInput.value = '';

// // form.addEventListener('submit', runEvent);

// // taksInput.addEventListener('keydown', runEvent);

// // taksInput.addEventListener('keyup', runEvent);

// // taksInput.addEventListener('keypress', runEvent);

// // taksInput.addEventListener('focus', runEvent);

// // taksInput.addEventListener('blur', runEvent);

// // taksInput.addEventListener('cut', runEvent);
// // taksInput.addEventListener('paste', runEvent);

// taksInput.addEventListener('input', runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   // console.log(e.target.value);

//   // heading.innerText = e.target.value;

//   //get input value
//   // console.log(taksInput.value);

//   // e.preventDefault();
// }

//Bubbling and delegation events 

//Event Bubbling

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });
// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });
// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });


//Event Delegation -- opposite to bubbling

//Without Event Delegation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);
//put listener on parent and then using e.target doing the required functionality
// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) {
//   // if (e.target.parentElement.className === 'delete-item secondary-content') {
//   //   console.log('delete item');
//   // }
//   //best way to target these links
//   if (e.target.parentElement.classList.contains('delete-item')) {
//     console.log('delete item');
//     e.target.parentElement.parentElement.remove();
//   }
// }

//Storage -- Local and Session Storage

//Set local storage item 

// localStorage.setItem('name','Sasanka');
// localStorage.setItem('age','29');

//set session storage

// sessionStorage.setItem('name','Beth')

//remove from storage

// localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //clear local storage

// localStorage.clear();


// console.log(name);
// console.log(age);

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    //parsing string to  array
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('task saved');
  console.log(task);
  e.preventDefault();

})


const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
  console.log(task);
})