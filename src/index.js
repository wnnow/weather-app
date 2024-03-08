// import _ from 'lodash';
import './style.css';
import img from './images/img.jpg';
import getWeather from './modules/fetchWeather.js';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');
  // Lodash, now imported by this script
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  element.textContent = 'Hello webpack';

  const myImg = new Image();
  myImg.src = img;
  btn.textContent = 'Click me and check the console!';
  // btn.onclick = printMe;

  element.appendChild(btn);

  element.appendChild(myImg);

  return element;
}

// document.body.appendChild(component());
