createTextarea();
createRussianKeys();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
runOnKeys(langChange, 'Shift', 'Control');
let russian = true;
let caps = false;
let focus = false;

function createRussianKeys(){
  let keys = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\u2191',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2190', '\u2193', '\u2192'
  ];

  let table = document.createElement('table');
  table.classList.add('table');
  const breaks = ['Backspace','Delete','Enter','\u2191','\u2192'];

  let tr = document.createElement('tr');
  tr.classList.add('tr');
  keys.forEach(function(k, j){
    let td = document.createElement('td');
    td.addEventListener('click', clickOnKeyboard);
    td.append(k);
    td.classList.add('td');
    tr.append(td);
    if (k.length > 1){
      td.classList.add('wide');
      td.classList.add(k);
    }
    if (k == 'Space'){
      td.classList.remove('wide');
      td.classList.add('space');
    }
    for (let i = 0; i < breaks.length; i++){
      if (k == breaks[i]){
        table.append(tr);
        tr = document.createElement('tr');
        tr.classList.add('tr');
      }
    }
  });
  document.body.append(table);
}

function createEnglishKeys(){
  let keys = [
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2191',
    'Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2190', '\u2193', '\u2192'
  ];

  let table = document.createElement('table');
  table.classList.add('table');
  const breaks = ['Backspace','Delete','Enter','\u2191','\u2192'];

  let tr = document.createElement('tr');
  tr.classList.add('tr');
  keys.forEach(function(k, j){
    let td = document.createElement('td');
    td.addEventListener('click', clickOnKeyboard);
    td.append(k);
    td.classList.add('td');
    tr.append(td);
    if (k.length > 1){
      td.classList.add('wide');
      td.classList.add(k);
    }
    if (k == 'Space'){
      td.classList.remove('wide');
      td.classList.add('space');
    }
    for (let i = 0; i < breaks.length; i++){
      if (k == breaks[i]){
        table.append(tr);
        tr = document.createElement('tr');
        tr.classList.add('tr');
      }
    }
  });
  document.body.append(table);
}

function createTextarea(){
  let textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.addEventListener('focus',focusCheck); 
  textarea.addEventListener('focusout',focusCheck);
  document.body.append(textarea);
}

function keyDown(event){
  if (event.key == 'CapsLock'){
    capsChanges();
  }
  else{
    keyBacklight(event);
    writing(event);
  }
}

function keyUp(event){
  if (event.key != 'CapsLock'){
    removeActiveClass(event);
  }
}

function keyBacklight(event){
  let key = event.key;
  let which = event.which;
  let tds = document.querySelectorAll('td');
  if (key == 'Control'){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == 'Ctrl'){
        tds[i].classList.add('active');
      }
    }
  }
  else if (key == 'Meta'){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == 'Win'){
        tds[i].classList.add('active');
      }
    }
  }
  else if (which == 32){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == 'Space'){
        tds[i].classList.add('active');
      }
    }
  }
  else if (which == 38){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2191'){
        tds[i].classList.add('active');
      }
    }
  }
  else if (which == 37){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2190'){
        tds[i].classList.add('active');
      }
    }
  }
  else if (which == 40){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2193'){
        tds[i].classList.add('active');
      }
    }
  }
  else if (which == 39){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2192'){
        tds[i].classList.add('active');
      }
    }
  }
  else{
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == key){
        tds[i].classList.add('active');
      }
    }
  }
}

function removeActiveClass(event){
  let key = event.key;
  let which = event.which;
  let tds = document.querySelectorAll('td');
  if (key == 'Control'){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == 'Ctrl'){
        tds[i].classList.remove('active');
      }
    }
  }
  else if (key == 'Meta'){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == 'Win'){
        tds[i].classList.remove('active');
      }
    }
  }
  else if (which == 32){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == 'Space'){
        tds[i].classList.remove('active');
      }
    }
  }
  else if (which == 38){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2191'){
        tds[i].classList.remove('active');
      }
    }
  }
  else if (which == 37){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2190'){
        tds[i].classList.remove('active');
      }
    }
  }
  else if (which == 40){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2193'){
        tds[i].classList.remove('active');
      }
    }
  }
  else if (which == 39){
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == '\u2192'){
        tds[i].classList.remove('active');
      }
    }
  }
  else{
    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == key){
        tds[i].classList.remove('active');
      }
    }
  }
}

function runOnKeys(func, ...keys) {
  let pressed = new Set();

  document.addEventListener('keydown', function(event) {
    pressed.add(event.key);

    for (let key of keys) {
      if (!pressed.has(key)) {
        return;
      }
    }

    pressed.clear();

    func();
  });

  document.addEventListener('keyup', function(event) {
    pressed.delete(event.key);
  });

}

function removeTable(){
  document.querySelector('table').outerHTML = '';

}

function langChange(){
  removeTable();
  if (russian){
    russian = false;
    createEnglishKeys();
  }
  else{
    russian = true;
    createRussianKeys();
  }
  capsCheck();
}

function writing(event){
  if (!focus){
    let textarea = document.querySelector('textarea');
    let tds = document.querySelectorAll('td');

    for (let i = 0; i < tds.length; i++){
      if (tds[i].innerHTML == event.key){
        if (event.key.length == 1){
          textarea.value += event.key;
        }
        else if (event.key == 'Tab'){
          textarea.value += '    ';
        }
        else if (tds[i].innerHTML == 'Backspace'){
          textarea.value = textarea.value.slice(0,textarea.value.length - 1);
        }
        else if (event.key == 'Enter'){
          textarea.value += '\n';
        }
      }
      if (tds[i].innerHTML == event.code && tds[i].innerHTML == 'Space'){
        textarea.value += ' ';
      }
    }
  }
}

function capsChanges(){
  if (caps){
    caps = false;
    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++){
      if(tds[i].innerHTML.length == 1){
        tds[i].innerHTML = tds[i].innerHTML.toLowerCase();
      }
    }
    document.querySelector('.CapsLock').classList.remove('active');
  }
  else{
    caps = true;
    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++){
      if(tds[i].innerHTML.length == 1){
        tds[i].innerHTML = tds[i].innerHTML.toUpperCase();
      }
    }
    document.querySelector('.CapsLock').classList.add('active');
  }
}

function capsCheck(){
  if (caps){
    let tds = document.querySelectorAll('td');
    for (let i = 0; i < tds.length; i++){
      if(tds[i].innerHTML.length == 1){
        tds[i].innerHTML = tds[i].innerHTML.toUpperCase();
      }
    }
  }
}

function focusCheck(){
  if (focus){
    focus = false;
  }
  else{
    focus = true;
  }
}

function clickOnKeyboard(event){
  let textarea = document.querySelector('textarea');
  if (event.target.innerHTML.length == 1){
    textarea.value += event.target.innerHTML;
  }
  else if (event.target.innerHTML == 'Tab'){
    textarea.value += '    ';
  }
  else if (event.target.innerHTML == 'Backspace'){
    textarea.value = textarea.value.slice(0,textarea.value.length - 1);
  }
  else if (event.target.innerHTML == 'Enter'){
    textarea.value += '\n';
  }
  else if (event.target.innerHTML == 'CapsLock'){
    capsChanges();
  }
}