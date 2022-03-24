window.onload = function () {
  // setInterval (fSec,1000);
  // let sec = 0;
  // let min = 0;
  //
  // function fSec () {
  //   document.querySelector('#sec').style.transform = 'rotate('+ sec +' deg)';
  //   document.querySelector('#min').style.transform = 'rotate('+ min +' deg)';
  //   if (sec + 6 == 366) {
  //   sec = 0;
  //   min = min + 6;
  // }
  //   sec = sec + 6;
  // }

document.querySelector('.tabs-header').addEventListener('click', fTabs);

  function fTabs(event) {
//    console.log(event);

    if (event.target.className == 'tab-h') {
//      console.log(event.target.getAttribute('data-tab'));
 // номер вкладки которую надо отобразить
      let dataTab = event.target.getAttribute('data-tab');
// отключаю класс active
      let tabH = document.getElementsByClassName('tab-h');
      for (let i = 0; i < tabH.length; i++) {
        tabH[i].classList.remove('active');
      }
      event.target.classList.add('active');
// все вкладки с содержимым
      let tabBody = document.getElementsByClassName('tab-b');
      for (let i = 0; i < tabBody.length; i++) {
        if (dataTab == i) {
          tabBody[i].style.display = 'block';
        }
        else {
          tabBody[i].style.display = 'none';
        }
      }
    }
  }

}
