export default class WidgetCollapse {
  constructor(container) {
    this.container = container;
  }

  openAnimationPage() {
    const collapseContainer = document.createElement('DIV');
    const btnCollapse = document.createElement('BUTTON');
    const collapse = document.createElement('DIV');
    const text = document.createElement('P');

    collapseContainer.classList.add('collapse-container');
    btnCollapse.classList.add('btn-collapse');
    collapse.classList.add('collapse');
    text.classList.add('text');

    btnCollapse.textContent = 'Run';
    text.textContent = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.';

    this.container.appendChild(collapseContainer);
    collapseContainer.append(btnCollapse);
    collapseContainer.append(collapse);
    collapse.append(text);

    btnCollapse.addEventListener('click', () => {
      if (!collapse.classList.contains('collapse-active')) {
        collapse.classList.add('collapse-active');
        collapse.classList.remove('collapse-close');
      } else {
        collapse.classList.add('collapse-close');
        collapse.classList.remove('collapse-active');
      }
    });
  }
}
