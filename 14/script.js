let sdvig = 0;
let test = document.getElementById('test');

// setInterval(function_name, time)
// function move () {
//   test.style.marginLeft = sdvig + 'px';
//   sdvig = sdvig + 3;
// }
// let tr = setInterval(move, 50);
// document.getElementById('stop').onclick = function () {
//   clearInterval(tr);
// }

// setTimeout используется для анимирования не переполняется стек
// let timer;
// move();
// function move () {
//   test.style.marginLeft = sdvig + 'px';
//   sdvig = sdvig + 10;
//   timer = setTimeout(move, 50);
// }
// document.getElementById('stop').onclick = function () {
//    clearTimeout(timer);
//  }

// обратный отчет перед началом действия
let timer;
let a = 10;
obr();
function obr () {
  document.getElementById('out').innerHTML = a;
  a--;
  if (a < 0) {
    clearTimeout(timer);
    alert('vikl')
  }
  else {
    timer - setTimeout(obr, 1000);
  }
}
