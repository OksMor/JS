window.onload = function () {

if (localStorage.getItem('bgcolor') !== null) {
  let color = localStorage.getItem('bgcolor');
  document.getElementsByTagName('body')[0].style.background = color;
}

  document.getElementById('green').onclick = function () {

    document.getElementsByTagName('body')[0].style.background = 'green';
    localStorage.setItem('bgcolor', 'green');//строка
  }
  document.getElementById('red').onclick = function () {

    document.getElementsByTagName('body')[0].style.background = 'red';
    localStorage.setItem('bgcolor', 'red');//строка
  }
}
