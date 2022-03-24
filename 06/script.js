/*function f1 () {
  let p;
  p = document.getElementById('out');
  p1 = document.getElementById('out1');
  // for (let i = 1; i <= 100; i++) {
    // p.innerHTML += i +' ';
    let i = 1;
    while (i <= 50) { // условие
      p.innerHTML += i +' ';
      i++;
    }
  // }
  let j=1;
  do {
    p1.innerHTML +=j +' ';
    j++;
  }
  while (j <= 30);
}*/
let m = [];
let m1 = [99, 33, 'hi'];
// console.log(m1[2]);
// alert (m1.length);
// for (let i = 0; i <m1.length; i++) {
//   document.getElementById('out').innerHTML += m1[i] + '<br>';
// }
function masOut() {
  let p = document.getElementById('out');
  let str ='';
  for (let i = 0; i<m1.length; i++) {
    str += i + ' --- ' + m1[i]+'<br>';
  }
  p.innerHTML = str;
}
masOut();
function p1() {
  let i1 = document.getElementById('i1').value;
  m1.push(i1);
  masOut();
}
function p2() {
  m1.pop();
  masOut();
}
