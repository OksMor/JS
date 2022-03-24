window.onload = function () {
  let mas = document.getElementsByClassName('layer');
  let j = 0;
  let y = 0;
  document.querySelector('.jlehmann').onmousewheel = function (event) {

    y = y + Math.round(event.deltaY);
    console.log(y);

    mas[j].style.top = -(y*0.1) + 'px';
    if (y*0.1 >= 450) {
      j++;
      y = 0;
      if (j == mas.length) { //-1 останется на yellow
        document.querySelector('.jlehmann').onmousewheel = null;
      }
    }
  }
}
// 450px - 100%
//5000 - x ---> x = 0.1
let p = document.createElement('p');
p.innerHTML = 'Пример элемента';
p.classList.add('main', 'green');

document.body.insertAfter(p, document.querySelector('.jlehmann'));

console.log(p);
