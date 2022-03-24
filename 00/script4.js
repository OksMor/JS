
// 4 ---------------------------------------------------------------------------
  ol.before('before'); // вставить строку "before" перед <ol>
    ol.after('after'); // вставить строку "after" после <ol>

    let liFirst = document.createElement('li');
    liFirst.innerHTML = 'prepend';
    ol.prepend(liFirst); // вставить liFirst в начало <ol>

    let liLast = document.createElement('li');
    liLast.innerHTML = 'append';
    ol.append(liLast); // вставить liLast в конец <ol>



// вывод содержимого ячейки
alert(table.rows[0].cells[1].innerHTML); //2
