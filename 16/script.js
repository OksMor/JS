document.onwheel = function (event) {
  console.log(event);
  if (event.deltaY > 0) {
    document.getElementById('line').innerHTML = 'вниз';
  }
  else {
    document.getElementById('line').innerHTML = 'вверх';
  }
  let speed = event.deltaY;
  speed = Math.abs(speed);
  if (speed < 100) {
    document.getElementById('speed').innerHTML = 'низкая';
  }
  else if (speed < 150) {
    document.getElementById('speed').innerHTML = 'средняя';
  }
  else if (speed < 250) {
    document.getElementById('speed').innerHTML = 'высокая';
  }
  else  {
    document.getElementById('speed').innerHTML = 'оч высокая';
  }
}

let left = 290;
document.getElementById('test').onwheel = function (event) {
  let line = event.deltaY;
  left = left + 0.2*line;
  document.getElementById('test2').style.left = left + 'px';
  return false;
}

window.onload = function () {
  //window.scrollTo(x,y)
  let scrolled;
  let timer;

  document.getElementById('top').onclick = function () {
    scrolled = window.pageYOffset;// как много прокручена стр
    // window.scrollTo(0, 0);
    scrollToTop();
  }

  function scrollToTop () {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled-100 // скорость ролкрутки
      timer = setTimeout(scrollToTop, 100);
    }
    else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
}
