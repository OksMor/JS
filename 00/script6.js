
// 6 ---------------------------------------------------------------------------
      function getListContent() {
        let result = [];

        for(let i=1; i<=3; i++) {
          let li = document.createElement('li');
          li.append(i);
          result.push(li);
        }

        return result;
      }

      ul.append(...getListContent()); // append + оператор "..." = друзья!
