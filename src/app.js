import LANG from './languages/language.js';

document.addEventListener('DOMContentLoaded', () => {
  const BODY = document.querySelector('body');
  const WRAPPER = document.createElement('div');
  const TITLE = document.createElement('h1');
  const TEXT_AREA = document.createElement('textarea');
  const KEYBOARD = document.createElement('div');
  const KEYBOARD_KEYS = document.createElement('div');
  const EN_LETTERS = Object.keys(LANG);
  const RU_LETTERS = Object.values(LANG);
  const DOM_ELEMENTS = [TITLE, TEXT_AREA, KEYBOARD];
  BODY.className = 'body';
  WRAPPER.className = 'wrapper';
  KEYBOARD.className = 'keyboard';
  KEYBOARD_KEYS.className = 'keyboard__keys';
  TITLE.className = 'title';
  TITLE.textContent = 'Virtual Keyboard';
  TEXT_AREA.className = 'text-area';
  TEXT_AREA.style.resize = 'none';
  BODY.append(WRAPPER);
  DOM_ELEMENTS.forEach((item) => WRAPPER.append(item));
  KEYBOARD.append(KEYBOARD_KEYS);

  function createKeys() {
    EN_LETTERS.forEach((key) => {
      const KEY_ELEMENT = document.createElement('button');
      const LINE_BREAK = ['Backspace', '|', 'Enter', 'Shift-right', '?'];
      KEY_ELEMENT.setAttribute('type', 'button');
      KEY_ELEMENT.classList.add('keyboard__key');
      KEY_ELEMENT.textContent = key;
      KEYBOARD_KEYS.append(KEY_ELEMENT);

      if (LINE_BREAK.includes(key)) {
        const BR = document.createElement('br');
        KEY_ELEMENT.after(BR);
      }
      switch (key) {
        case 'Backspace':
          KEY_ELEMENT.classList.add('keyboard__key-backspace');
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'Tab':
          KEY_ELEMENT.classList.add('keyboard__key-tab');
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'arrowLeft':
          KEY_ELEMENT.classList.add('keyboard__key-arrleft');
          KEY_ELEMENT.textContent = String.fromCharCode(9664);
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'arrowRight':
          KEY_ELEMENT.classList.add('keyboard__key-arright');
          KEY_ELEMENT.textContent = String.fromCharCode(9654);
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'arrowUp':
          KEY_ELEMENT.classList.add('keyboard__key-arrup');
          KEY_ELEMENT.textContent = String.fromCharCode(9650);
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'arrowDown':
          KEY_ELEMENT.classList.add('keyboard__key-arrdown');
          KEY_ELEMENT.textContent = String.fromCharCode(9660);
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'Shift-right':
          KEY_ELEMENT.classList.add('keyboard__key-shift-right');
          KEY_ELEMENT.textContent = 'Shift';
          break;

        case 'Shift-left':
          KEY_ELEMENT.classList.add('keyboard__key-shift-left');
          KEY_ELEMENT.textContent = 'Shift';
          break;

        case '|':
          KEY_ELEMENT.classList.add('keyboard__key-elem');
          KEY_ELEMENT.textContent = '|';
          break;

        case 'Alt-right':
          KEY_ELEMENT.classList.add('keyboard__key-alt');
          KEY_ELEMENT.textContent = 'Alt';
          break;

        case 'Alt-left':
          KEY_ELEMENT.classList.add('keyboard__key-alt');
          KEY_ELEMENT.textContent = 'Alt';
          break;

        case 'Ctrl-left':
          KEY_ELEMENT.classList.add('keyboard__key-alt');
          KEY_ELEMENT.textContent = 'Ctrl';
          break;

        case 'FN':
          KEY_ELEMENT.classList.add('keyboard__key-fn');
          KEY_ELEMENT.textContent = 'Fn';
          break;

        case 'Win':
          KEY_ELEMENT.classList.add('keyboard__key-win');
          KEY_ELEMENT.textContent = 'Win';
          break;

        case 'Ctrl-right':
          KEY_ELEMENT.classList.add('keyboard__key-ctrl-right');
          KEY_ELEMENT.textContent = 'Ctrl';
          KEY_ELEMENT.addEventListener('click', () => {
            const TEXT_BUTTONS = document.querySelectorAll('button');
            TEXT_BUTTONS.forEach((item) => {
              const HIDDEN_ELEMENTS = [
                'Shift',
                'Ctrl',
                'Fn',
                'Win',
                'Alt',
                String.fromCharCode(9660),
                String.fromCharCode(9650),
                String.fromCharCode(9654),
                String.fromCharCode(9664),
              ];
              const text = item.textContent;
              if (!HIDDEN_ELEMENTS.includes(text)) {
                item.textContent = LANG[text];
              }
            });
          });
          break;

        case 'Caps Lock':
          KEY_ELEMENT.classList.add('keyboard__key-caps', 'keyboard__key-activatable');
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'Enter':
          KEY_ELEMENT.classList.add('keyboard__key-enter');
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        case 'Space':
          KEY_ELEMENT.classList.add('keyboard__key-space');
          KEY_ELEMENT.addEventListener('click', () => {});
          break;

        default:
          KEY_ELEMENT.textContent = key.toLowerCase();
          KEY_ELEMENT.addEventListener('click', () => {});
          break;
      }
    });
  }

  createKeys();
  console.log(RU_LETTERS);
  console.log(EN_LETTERS);
});
