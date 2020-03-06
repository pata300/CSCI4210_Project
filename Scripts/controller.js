
let numberOfQuestions=0;
let questionArray=[Question];
let question;
let cAnswer;
let fAnswer= new [];
let numFAnswers=0;

let submit = document.getElementById('submit');
let submitNumOfFalse = document.getElementById('numOfFalse')
questionObj= new Question();
submit.addEventListener('click',addQuestion);

//currently only takes in the base 3 input boxes and doesnt allow adding extra false answers or creating a new question
//questions are stores as question objects in questionArray
function addQuestion(){
   getInitialThree();
   inputToString();
   setData();
   incNumQuestions();
}

function addMoreFalseAnswer(){

}
function getInitialThree(){
    question = document.getElementById('questionInput');
    cAnswer = document.getElementById("correctAnswerInput");
    fAnswer =document.getElementById("falseAnswerInput");
}
function inputToString(){
    question=question.value;
     cAnswer=cAnswer.value;
     fAnswer[0]=fAnswer.value;
}
function setData(){
     questionObj.setQuestion(question);
     questionObj.setCorrectAnswer(cAnswer);
     questionObj.setFalseAnswer(fAnswer);
     questionArray[numberOfQuestions] =questionObj;
}
function incNumQuestions(){
    numberOfQuestions++;
}

