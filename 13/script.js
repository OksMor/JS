// картинка кошка бегает за мышкой
// document.onmousemove = function () {
//   document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeEnd', '<img src="https://cdn1.iconfinder.com/data/icons/animals-95/300/cat-delete-animal-pet-wild-domestic-64.png" id="cat">');
//   let cat = document.getElementById('cat');
//   cat.style.position = 'fixed';
//
//   document.onmousemove = function(event) {
//     cat.style.left = event.clientX + 10 + 'px';
//     cat.style.top = event.clientY + 10 + 'px';
//   }
// }
document.getElementById('myslide').onmousemove = function (event) {
  let x = event.offsetX;//относительно родителя
  console.log(x);
  document.getElementById('two').style.width = x + 'px';
  document.getElementById('two').style.transition = 'all ease 0ms';
}
document.getElementById('myslide').onmouseleave = function (event) {
  document.getElementById('two').style.width = '375px';
  document.getElementById('two').style.transition = 'all ease 500ms';
}
