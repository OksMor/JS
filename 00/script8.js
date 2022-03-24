
// вывод содержимого ячейки
alert(document.body.firstElementChild); // div
alert(document.body.children[1]);// ul

// получаем <ul>, и его последнего ребёнка
alert(document.body.lastElementChild.lastElementChild); //li Пит

// код, который выделит красным цветом все ячейки в таблице по диагонали
let table = document.body.lastElementChild;

    for (let i = 0; i < table.rows.length; i++) { // длинна колекции строк
      let row = table.rows[i];
      row.cells[i].style.backgroundColor = 'red'; // cells колво ячеек
    }
