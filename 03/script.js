function out() {
  var p;
  p = document.getElementById('out');
  // p.innerHTML = ' <b>hi</b>';
  // p.innerHTML += ' <b>hi</b>';
  // p.innerText += ' <b>hi</b>';
  // p.insertAdjacentHTML('beforeBegin','hi');
  p.outerHTML = '<div class="one">hello</div>';
}
