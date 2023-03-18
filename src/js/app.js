import WidgetCollapse from './WidgetCollapse';
import WidgetCallbackChat from './WidgetCallbackChat';
import WidgetLiker from './WidgetLiker';

import clearPlace from './clearPlace';

import background from '../img/cell.jpg';

const container = document.querySelector('.app-container');

container.style.backgroundImage = `url(${background})`;

const btnContainer = document.createElement('DIV');

btnContainer.classList.add('btn-container');

const btnCollapse = document.createElement('BUTTON');
const btnCallbackChat = document.createElement('BUTTON');
const btnLiker = document.createElement('BUTTON');

btnCollapse.classList.add('btn');
btnCollapse.classList.add('red');
btnCallbackChat.classList.add('btn');
btnCallbackChat.classList.add('yellow');
btnLiker.classList.add('btn');
btnLiker.classList.add('green');

btnCollapse.textContent = 'Collapse';
btnCallbackChat.textContent = 'CallbackChat';
btnLiker.textContent = 'Liker';

const animationContainer = document.createElement('DIV');

animationContainer.classList.add('animation-container');

container.appendChild(btnContainer);
btnContainer.append(btnCollapse);
btnContainer.append(btnCallbackChat);
btnContainer.append(btnLiker);
container.appendChild(animationContainer);

const collapse = new WidgetCollapse(animationContainer);
const callbackChat = new WidgetCallbackChat(animationContainer);
const liker = new WidgetLiker(animationContainer);

btnCollapse.addEventListener('click', () => {
  clearPlace(animationContainer);
  collapse.openAnimationPage();
});

btnCallbackChat.addEventListener('click', () => {
  clearPlace(animationContainer);
  callbackChat.openAnimationPage();
});

btnLiker.addEventListener('click', () => {
  clearPlace(animationContainer);
  liker.openAnimationPage();
});
