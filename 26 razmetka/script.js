const userEmotions = [
    'smile',
    'neutral',
    'crying',
  ];
  
  const emojiContainer = document.querySelector('.emojis');
  const emojiList = emojiContainer.querySelectorAll('.emoji');
  
  emojiList.forEach((emojiListItem) => {
    const isNecessary = userEmotions.some(
      (userEmotion) => emojiListItem.classList.contains('emoji--' + userEmotion),
    );
  
    if (!isNecessary) {
      emojiListItem.remove();
    }
  });
  
  
  // ЗАМЫКАНИЯ
  /*задача на попрошайку*/

function randomInteger(min, max) {
    let rand = min -0.5 + Math.random()*(max-min+1);
    return Math.round(rand);
}
function createBeggar(){ 
let s = 0;
return function beggar() {
    s += randomInteger(0, 100);
    console.log(s);
    if (s >=250) return;
    beggar();
}
}
let beggar1 = createBeggar();
beggar1();
