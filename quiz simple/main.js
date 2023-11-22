const questions = [
    {
        question: "Вопрос 1",
        answers: ["1", "2", "3", "4"],
        correct: 1,
    },
    {
        question: "Вопрос 2",
        answers: ["1", "2", "3", "4"],
        correct: 2,
    },
    {
        question: "Вопрос 3",
        answers: ["1", "2", "3", "4"],
        correct: 3,
    },
    {
        question: "Вопрос 4",
        answers: ["1", "2", "3", "4"],
        correct: 4,
    },
];

const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

clearPage();
showQuestion();
submitBtn.onclick = checkAbswer;

function clearPage(){
    headerContainer.innerHTML = '';
    listContainer.innerHTML = '';
}
function showQuestion(){

    const headerTemplate = `<h2>%title%</h2>`;
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
    headerContainer.innerHTML = title;

    for ([index, item] of questions[questionIndex]['answers'].entries()) {

        const itemTemplete =
         `<li>
            <label> 
                <input type="radio" name="answer" value="%radioCount%"/>
                <span>%answer%</span>
            </label>
        </li>`;
        const answer = itemTemplete.replace('%answer%', item).replace('%radioCount%', index+1);

        listContainer.innerHTML += answer;
    }
}
function checkAbswer(){

    const checrRadio = listContainer.querySelector('input[type="radio"]:checked');

    if (!checrRadio) {
        console.log('?????????????????');
        return
    }

    const userAnswer = parseInt(checrRadio.value);
    //userAnswer === questions[questionIndex]['correct'] ? score++ : console.log('-')

    if (userAnswer === questions[questionIndex]['correct']) {
        score++;
    }

    if (questionIndex !== questions.length-1) {
        questionIndex++;
        clearPage();
        showQuestion();
    } else {
        clearPage();
        showResult();
    }
}
function showResult() {

    const resultsTemplate = `
        <h2>%title%</h2>
        <h3>%message%</h3>
        <p>%result%</p>
    `;
    let title, message;
    if (score === questions.length) {
        title = '4';
        message = '4';
    } else if ((score*100)/questions.length >= 50) {
        title = '/2';
        message = '/2';
    } else {
        title = '(((';
        message = '((((((((((';
    }
    let result = `${score} from ${questions.length}`;
    const resultHTML = resultsTemplate.replace('%title%', title).replace('%message%', message).replace('%result%', result);
    
    headerContainer.innerHTML = resultHTML;
    submitBtn.innerHTML = 'gogogo';
    submitBtn.onclick = () => history.go();
}