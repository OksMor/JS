window.onload = function () {
  let left = document.querySelector('.left');
  let right = document.querySelector('.right');

  function equalHeight () {
    left.style.height = 'auto';
    right.style.height = 'auto';
    let leftH = left.offsetHeight;
    let rightH = right.offsetHeight;
    let max = Math.max(leftH, rightH);
    left.style.height = max + 'px';
    right.style.height = max + 'px';
  }
  equalHeight();
  window.onresize = equalHeight;
  document.querySelector('#out').innerHTML = navigator.userAgent;
  console.log(navigator);

  if (navigator.userAgent.match('iPhone') || navigator.userAgent.match('Android') || navigator.userAgent.match('iPad') || navigator.userAgent.match('RIM')) {
    alert ('Mobile');
  }
  else {
    alert ('Desktop');
  }
}
