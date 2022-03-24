/*function f1 () {
  let n, p;
  n = document.getElementById('num1').value;
  p = document.getElementById('out');
  n = parseInt(n);
  if (n == 100) {
    p.innerHTML = 'Число равно 100';
  }else if (n < 100) {
    p.innerHTML = 'Число меньше 100';
  }else {
    p.innerHTML = 'Число больше 100';
  }
}*/
let prNum, tempOut;
prNum = Math.floor((Math.random()*10) + 1);//случайное 1-10
tempOut = document.getElementById('temp-out');
tempOut.innerHTML = prNum;
function f1 () {
  let num, out;
  num = document.getElementById('mynum').value;
  out = document.getElementById('out');

  if (num == prNum) {
    out.innerHTML = 'Вы угадали';
  }
  else if (num > prNum) {
    out.innerHTML = 'многовато';
  }
  else {
    out.innerHTML = 'маловато';
  }
}
