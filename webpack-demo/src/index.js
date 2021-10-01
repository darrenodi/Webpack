// eslint-disable-file no-use-before-define 

import _ from 'lodash';
import './style.css';
import printMe from './print.js';

 function component(item) {
   const divUL = document.querySelector("#todolist");

   const listElement = document.createElement('li');

   listElement.innerHTML = "<div class='listcheck'><div><input type='checkbox' name='checkbox'>" + "<div>"+item.description+"</div></div><i class='fas fa-ellipsis-h'></i></div><hr>";

  divUL.appendChild(listElement);

   return divUL;
 }

const arrayTask = [
  {
    description : "Learn Webpack",
    complete : true,
    index : 0
  },

  {
    description : "Make Dinner",
    complete : false,
    index : 1
  },

  {
      description : "Do Laundry",
      complete : true,
      index : 2
  }
];

arrayTask.forEach(component);