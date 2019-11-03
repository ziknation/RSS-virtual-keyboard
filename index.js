createTextarea();
createRussianKeys();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

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
  document.body.append(textarea);
}

function keyDown(event){
  keyBacklight(event);
}

function keyUp(event){
  removeActiveClass(event);
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