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

let addQuestionBtn = document.getElementById('addQuestionBtn');
let submitBtn = document.getElementById('submitBtn');
let addFalseBtn = document.getElementById('addFalseAnswerBtn');
 //text from question text box
// let correctAnswer = document.getElementById('correctAnswerInput').value;
// let falseAnswer = document.getElementById('falseAnswerInput').value;
// let correctBtn = document.getElementById('correctBtn');

testQuestion = new Question();

submitBtn.addEventListener('submit', addQuestion);
//addFalseBtn.addEventListener('click', addFalseAsnwer);

//TO-DO
// addQuestionBtn.addEventListener('click', makeNewQuestion);

// correctBtn.addEventListener('submit', addCorrectAnswer);

function addQuestion(){
    let newQueston = document.getElementById('questionInput').value;
    try{
        if(newQueston.length() == 0) throw "empty";
    }
    catch(err){
        alert("The question is " + err);
    }
    finally{
        testQuestion.setQuestion(newQuestion);
        addCorrectAnswer();
    }
}

function addCorrectAnswer(){
    //variable for the input
    let answer = document.getElementById('correctAnswerInput').value;
    
    try{
        if(answer.length() == 0) throw "empty";
    }
    catch(err){
        alert("The correct answer is " + err);
    }
    finally{
        //create correct answer box/button
        testQuestion.setCorrectAnswer(answer);
    }
}

/*function addFalseAsnwer(){
    let falseAnswer = document.getElementById('falseAnswerInput').value;
    try{
        if(falseAnswer.length() == 0) throw "empty";
    }
    catch(err){
        alert("The incorrect answer is " + err);
    }
    finally{
    testQuestion.setFalseAnswer(falseAnswer);
    }
}*/