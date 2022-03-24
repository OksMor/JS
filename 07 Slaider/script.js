/*document.getElementById('arrow next').onclick = sliderLeft;
let left = 0;

function sliderLeft() {
  let polosa = document.getElementById('polosa');
  left = left - 130;
  if (left < -910) {
    left = 0;
  }
  polosa.style.left = left +'px';
}
*/

let left = 0;
let timer;
autoSlider();

function autoSlider() {
  timer = setTimeout(function () {
    let polosa = document.getElementById('polosa');
    left = left - 130;
    if (left < -910) {
      left = 0;
      clearTimeout(timer);
    }
    polosa.style.left = left +'px';
    autoSlider();
  }, 1000);
}
