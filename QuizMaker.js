// Quiz Maker Algorithm 1.0

//variables to declare
/*
addBtn will request a text box to add a question
submitBtn will submit quetion (call setQuestion(question))
addBtn.listener call text box
submitBtn.listner call setQuestion(question)

create an new question object
Question testQuestion = new Question();


*Submission of questions*
User clicks button to add question
    eventListener with text box is connected to button
    
which ask user for question
    let question = questionText id from HTML

user clicks submit button
	User submits question
    testQueston.setQuestion(question);

Ask user for answer to question
	User submits correct answer
    testQuestion
Ask user for 3 false answers
    User submits 3 false answers
    
print question with answers in a form on page
    allow to edit or delete entry   
 
MySQL stores questions
 
*Generate quiz button*
	
QuizMaker populates page with questions

Answer key

*/

let addQuestionBtn = document.getElementById('addBtn');
let submitBtn = document.getElementById('submitBtn');
let newQueston = document.getElementById('question'); //text from question text box
let correctBtn = document.getElementById('correctBtn');

Question testQuestion = new Question();

submitBtn.addEventListener('submit', addQuestion);
correctBtn.addEventListener('submit', addCorrectAnswer);

function addQuestion(e){
    testQuestion.setQuestion(e);
    addCorrectAnswer();
}

function addCorrectAnswer(e){
    //variable for the input
    let answer = document.getElementById('item').value;

    //create correct answer box/button


    testQuestion.setCorrectAnswer(answer);
}