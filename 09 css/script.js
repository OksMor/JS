/*
document.getElementById('r1').oninput = cssGenerator;

function cssGenerator() {
  let div = document.getElementById('test');
  let out = document.getElementById('out');
  // console.log(this.value);
  div.style.borderRadius = this.value + 'px';
  // border-radius: 30px;
  out.innerHTML = 'border-radius: ' +this.value + 'px;\n';
  out.innerHTML += '-webkit-border-radius: ' +this.value + 'px;';
}
*/
// radiobutton
let radio = document.getElementsByName('prim');

for (let i = 0; i < radio.length; i++) {
  radio[i].onchange = testRadio;
}

function testRadio() {
  console.log(this.value);
}

document.getElementById('one').onclick = checkRadio;

function checkRadio() {
  let m = document.getElementsByName('prim');
  for (let i = 0; i < m.length; i++) {
    if ( m[i].checked ) {
      alert(m[i].value);
      break;
    }
  }
}
