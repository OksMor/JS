let number = Math.floor(10*Math.random())+1;//случайное от 1 до 10
console.log(number);
let count = 3;

document.getElementById('check').onclick = function () {
  if (count > 0) {
    let username = document.getElementById('mynum').value;
    username = parseInt(username);
  var out = document.getElementById('out');
    if (username == number) {
      out.innerHTML = "отгадали";
    }
    else if (username > number) {
      out.innerHTML = "перебор";
    }
    else {
      out.innerHTML = "недолет";
    }
    count = count - 1;
    document.getElementById('count').innerHTML = 'Осталось попыток: ' + count;

  }
  else {
    alert ('перегруз');
    location.reload();
  }
}
