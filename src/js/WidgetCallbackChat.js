export default class WidgetCallbackChat {
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

    this.container.firstChild.appendChild(chatContainer);
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
    const callbackChatContainer = document.createElement('DIV');
    const callbackChat = document.createElement('DIV');

    callbackChatContainer.classList.add('callback-chat-container');
    callbackChat.classList.add('open-callback-chat');

    this.container.appendChild(callbackChatContainer);
    callbackChatContainer.append(callbackChat);

    callbackChat.addEventListener('click', () => {
      if (!document.querySelector('.container-chat')) {
        this.container.classList.remove('disapperance');
        callbackChat.classList.remove('fromPoint');
        callbackChat.classList.add('toPoint');
        this.openChat(this.container);
      }
    });
  }
}
