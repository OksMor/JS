// 1 ---------------------------------------------------------------------------
// setInterval(() => elem.hidden = !elem.hidden, 1000);
// 3 создает div ---------------------------------------------------------------
let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение 2.";

  document.body.append(div);
// 4 ---------------------------------------------------------------------------
  ol.before('before'); // вставить строку "before" перед <ol>
    ol.after('after'); // вставить строку "after" после <ol>

    let liFirst = document.createElement('li');
    liFirst.innerHTML = 'prepend';
    ol.prepend(liFirst); // вставить liFirst в начало <ol>

    let liLast = document.createElement('li');
    liLast.innerHTML = 'append';
    ol.append(liLast); // вставить liLast в конец <ol>
// 5 ---------------------------------------------------------------------------
    document.body.insertAdjacentHTML("afterbegin", `<div class="alert">
        <strong>Всем привет!</strong> Вы прочитали важное сообщение 3.
      </div>`);
// 6 ---------------------------------------------------------------------------
/*      function getListContent() {
        let result = [];

        for(let i=1; i<=3; i++) {
          let li = document.createElement('li');
          li.append(i);
          result.push(li);
        }

        return result;
      }

      ul.append(...getListContent()); // append + оператор "..." = друзья!
*/
// 7 создание списка на лету ---------------------------------------------------
let ul = document.createElement('ul');
document.body.append(ul);
while (true) {
  let data = prompt("Введите текст для элемента",'');
  if (!data) {break;}
  let li = document.createElement("li");
  li.textContent = data;
  ul.append(li);
};
