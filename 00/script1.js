// 1 мигающая надпись ----------------------------------------------------------
 setInterval(() => elem.hidden = !elem.hidden, 1000);



// 2 заменим цвет фона на красный,
  document.body.style.background = "red";
  // а через 3 сек вернём как было
  setTimeout(() => document.body.style.background = "", 3000);




// 3 функция вывода окна
  function sayHi() {
    alert("Hello"); // выводит окошко с надписью
  }
  // глобальные функции доступны как методы глобального объекта:
  window.sayHi(); // запускаем функцию с выводом окошка


alert(window.innerHeight); // внутренняя высота окна браузера
