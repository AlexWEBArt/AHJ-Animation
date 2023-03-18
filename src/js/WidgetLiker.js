import heartImg from '../img/heart.png';

export default class WidgetCollapse {
  constructor(container) {
    this.container = container;
  }

  openAnimationPage() {
    const likerContainer = document.createElement('DIV');
    const btnLiker = document.createElement('BUTTON');

    likerContainer.classList.add('liker-container');
    btnLiker.classList.add('btn-liker');

    btnLiker.textContent = 'Liker';

    this.container.appendChild(likerContainer);
    likerContainer.append(btnLiker);

    btnLiker.addEventListener('click', () => {
      const heart = document.createElement('IMG');
      heart.classList.add('heart');

      const randomWay = Math.floor(Math.random() * 4) + 1;

      heart.classList.add(`like-${randomWay}`);
      heart.src = heartImg;

      likerContainer.appendChild(heart);

      heart.addEventListener('animationend', () => {
        heart.remove();
      });
    });
  }
}
