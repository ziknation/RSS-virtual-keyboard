createTextarea();
createRussianKeys();

function createRussianKeys(){
  let keys = [
    'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'up',
    'Ctrl', 'Win', 'Alt', 'Space', 'alt', 'left', 'down', 'right'
  ];

  let table = document.createElement('table');
  table.classList.add('table');
  const breaks = ['Backspace','Del','Enter','up','right'];

  let tr = document.createElement('tr');
  tr.classList.add('tr');
  keys.forEach(function(k, j) {
    console.log(k);
    let td = document.createElement('td');
    td.classList.add('td');
    td.append(k);
    if (k.length > 1){
      td.classList.add('wide');
    }
    if (k == 'Space'){
      td.classList.remove('wide');
      td.classList.add('space');
    }
    tr.append(td);
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