// одиночный клик
let block = document.getElementById('one');
block.onclick = function () {
  this.style.background = 'orange';
};
// двойной клик
block.ondblclick = function () {
  this.style.background = 'blue';
}
// правая кнопка
block.oncontextmenu = function () {
  this.style.background = 'red';
  return false;
}
// наведение на объект
block.onmouseenter = function () {
  console.log('in');
}
// ушли с объекта
block.onmouseleave = function () {
  this.style.background = '#3c763d';
}
// движение над объектом
let a = 0;
block.onmousemove = function () {
  a++;
  this.style.width = 100 + a +'px';
}
// нажимаем и держим кнопку мыши любую
block.onmousedown = function (event) {
  console.log(event.button);//что за кнопка нажата
}
//отжимаем кнопке над объектом
block.onmouseup = function () {
  console.log('up');
}
