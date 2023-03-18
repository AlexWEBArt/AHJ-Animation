export default class WidgetCollapse {
  constructor(container) {
    this.container = container;
  }

  openChat() {
    const chatContainer = document.createElement('DIV');
    const formChat = document.createElement('FORM');
    const titleChat = document.createElement('P');
    const textareaChat = document.createElement('TEXTAREA');
    const sendChat = document.createElement('BUTTON');
    const closeChat = document.createElement('SPAN');

    chatContainer.classList.add('container-chat');
    formChat.classList.add('form-chat');
    titleChat.classList.add('title-chat');
    textareaChat.classList.add('textarea-chat');
    sendChat.classList.add('send-chat');
    closeChat.classList.add('close-chat');

    titleChat.textContent = 'Напишите нам';
    sendChat.textContent = 'Отправить';
    closeChat.textContent = '\u{2716}';

    textareaChat.spellCheck = 'false';

    this.container.appendChild(chatContainer);
    chatContainer.append(titleChat);
    chatContainer.append(formChat);
    chatContainer.append(closeChat);
    formChat.append(textareaChat);
    formChat.append(sendChat);

    closeChat.addEventListener('click', () => {
      chatContainer.classList.add('disapperance');
      document.querySelector('.open-callback-chat').classList.remove('toPoint');
      document.querySelector('.open-callback-chat').classList.add('fromPoint');

      chatContainer.addEventListener('animationend', () => {
        chatContainer.remove();
      });
    });
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
