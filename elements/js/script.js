'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';


box.style.cssText = `background-color: blue; width: 500px;`;

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'black';
// }
// hearts[0].replaceWith(circles[0]);
// hearts[1].remove();
// document.querySelector('.wrapper').appendChild(div);

hearts.forEach( item => item.style.backgroundColor = 'black');

const div = document.createElement('div');
div.classList.add('black');

wrapper.append(div);

div.innerHTML = "<h3>TEXT</h3>";

// div.textContent = "Hello world";

div.insertAdjacentHTML("afterbegin",'<h2>Hello</h2>');