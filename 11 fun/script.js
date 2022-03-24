function one() {
  // alert("hi");
  return 9;
}
console.log(5+one());
function summa(a,b) {
  a = a || 10;
  b = b || 20;
  alert(a+b);
  // return (a+b);
}
// console.log(summa(6,5));
document.getElementById('b1').onclick = function () {
  summa(12, 6);
}
