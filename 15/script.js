// document.onkeypress = function (event) {
//   console.log(event);
//   if (event.shiftKey) {
//     console.log('shift');
//   }
// }

// запрет ввода не цифр
// document.getElementById('test').onkeypress = function (event) {
//   // console.log(event);
//   if (event.keyCode <48 || event.keyCode>57) {
//     console.log('net');
//     return false;
//   }
// }

// let str = '';
// document.getElementById('test').onkeypress = function (event) {
//   str = str + event.key;
//   console.log(str);
//   this.value += String.fromCharCode(getRandomInt(65, 122));
//   return false;
// }
// function getRandomInt(min, max) {
//   return Math.floor(Math.random()*(max-min))+min;
// }

// key down/up двигаем блок стрелками мыши
let block = document.getElementById('test');
let left = 0;
let top1 = 0;

document.onkeydown = function (event) {
  // console.log(event);
  if (event.key == 'ArrowRight') {
    block.style.left = left +'px';
    left ++;
  }
  if (event.key == 'ArrowDown') {
    block.style.top = top1 +'px';
    top1 ++;
  }
}
