
 /*

*Generate quiz button*
	
QuizMaker populates page with questions

Answer key

*/

// testQuestion = new Question();
let quizArray = [];

// document.addEventListener("DOMContentLoaded", startQuizMaker);
// window.addEventListener('load', startQuizMaker);


function printQuiz(){
    console.log("printing quiz");
    let currentDiv = document.getElementById("defaultDiv");
    let qNum;
    for(let i = 0; i < quizArray.length; i++){
        console.log(quizArray[i]);
        let questionDiv = document.createElement("div");
        questionDiv.id = "question" + i;
        qNum = i + 1;
        numToText = qNum.toString();
        questionDiv.appendChild(buildQuestion(quizArray[i], numToText));
        console.log(questionDiv);
        console.log(currentDiv);
        document.body.insertBefore(questionDiv, currentDiv);
        // document.body.innerText = quizArray[i].getQuestion();
        
        let questionAnswers = [];

        questionAnswers = randomizeAnswers(quizArray[i].getFalseAnswer(), quizArray[i].getCorrectAnswer());
        for(let j = 0; j < questionAnswers.length; j++){
            let answerP = document.createElement("p");
            answerP.id = "answer";
            answerP.style = "padding-left: 50px;";
            answerP.appendChild(document.createTextNode(questionAnswers[j]));
            document.body.insertBefore(answerP, currentDiv);
        }

        printKey(quizArray[i].getCorrectAnswer(), qNum);

    }
    console.log("printing complete");
}

function printKey(answer, questionNum){
    console.log(answer + " " + questionNum);
    let currentDiv = document.getElementById("keyDiv");
    let answerDiv = document.createElement("div");
    answerDiv.id = "answer";
    console.log(currentDiv);
    console.log(answerDiv);
    answerDiv.appendChild(document.createTextNode(questionNum + ") " + answer));
    document.body.insertBefore(answerDiv, currentDiv);
}

//TO-DO
//print answer function
//print formatting

//creates a text node from the question variable from the Question obj
function buildQuestion(question, number){
    console.log("Building question");
    console.log(question.getQuestion());
    console.log(number);
    return document.createTextNode(number + ") " + question.getQuestion());
}

function randomizeAnswers(fAnswers = [], cAnswer){
    let empty = false;
    console.log(fAnswers);
    fAnswers.push(cAnswer);
    console.log("fAnswer after: " + fAnswers);
    let answers = [];
    while(!empty){
        
        let rndIndex = Math.floor(Math.random() * fAnswers.length);
        answers.push(fAnswers[rndIndex]);
        fAnswers = swapToEnd(rndIndex, fAnswers);
        fAnswers.pop();
        
        if(fAnswers.length <= 0){
            empty = true;
        }
    }

    return answers;
}

function swapToEnd(i, answer = []){
    // console.log("swapping: " + answer);
    let temp = answer[answer.length - 1];
    answer[answer.length - 1] = answer[i];
    answer[i] = temp;
    return answer;
}

function convertToQuestion(questionArray){
    console.log("convert objects to questions")
    for(let i = 0; i < questionArray.length; i++){
        let currentQuestion = new Question();
        currentQuestion.setQuestion(questionArray[i].question);
        currentQuestion.setCorrectAnswer(questionArray[i].correctAnswer);
        currentQuestion.setFalseAnswer(questionArray[i].falseAnswers);
        console.log(currentQuestion);
        quizArray.push(currentQuestion);
    }
    console.log(quizArray);
    console.log("conversion complete");
}

window.onload = function startQuizMaker(){
    let questions = JSON.parse(localStorage.getItem('questions'));
    console.log(questions);
    //currently trying to figure out how ot make it a question object again
    //might have to do a while loop to parse JSON array into question array
    convertToQuestion(questions);
    printQuiz();
}

startQuizMaker();
