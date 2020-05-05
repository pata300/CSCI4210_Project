
 /*

*Generate quiz button*
	
QuizMaker populates page with questions

Answer key

*/

let quizArray = [];

//loops through the array of questions in the 'quiz'
//prints out the question
//  randomizes and prints potential questions
//prints answer key at end of page
function printQuiz(){

    let currentDiv = document.getElementById("defaultDiv");
    let qNum;
    for(let i = 0; i < quizArray.length; i++){
        
        qNum = i + 1;
        numToText = qNum.toString();
        printQuestion(quizArray[i], numToText, currentDiv);
        
        let questionAnswers = [];

        questionAnswers = randomizeAnswers(quizArray[i].getFalseAnswer(), quizArray[i].getCorrectAnswer());
        printAnswers(questionAnswers, currentDiv);

        printKey(quizArray[i].getCorrectAnswer(), qNum);

    }
}

function printQuestion(question, num, div){
    //creates a div
    let questionDiv = document.createElement("div");
    questionDiv.id = "question" + num;
        
    //inserts div into HTML
    questionDiv.appendChild(buildQuestion(question, num));
    document.body.insertBefore(questionDiv, div);
}

function printAnswers(answers, div){
    for(let j = 0; j < answers.length; j++){
        //creates a p element    
        let answerP = document.createElement("p");
        //gives the element a id and formatting
        answerP.id = "answer";
        answerP.style = "padding-left: 50px;";
        //inserts element into HTML
        answerP.appendChild(document.createTextNode(answers[j]));
        document.body.insertBefore(answerP, div);
    }
}

function printKey(answer, questionNum){
    let currentDiv = document.getElementById("keyDiv");
    let answerDiv = document.createElement("div");
    answerDiv.id = "answer";
    answerDiv.appendChild(document.createTextNode(questionNum + ") " + answer));
    document.body.insertBefore(answerDiv, currentDiv);
}

//creates a text node from the question variable from the Question obj
function buildQuestion(question, number){
    return document.createTextNode(number + ") " + question.getQuestion());
}

//randomizes given false answers along with a correct answers
function randomizeAnswers(fAnswers = [], cAnswer){
    let empty = false;
    fAnswers.push(cAnswer);//push the correct answer into the false answer array
    let answers = [];//create an empty array for the randomization
    while(!empty){
        //get a random number for the index between 0 and the length of false answers array
        let rndIndex = Math.floor(Math.random() * fAnswers.length);
        answers.push(fAnswers[rndIndex]);//push random selected answer into new array
        fAnswers = swapToEnd(rndIndex, fAnswers);//swap random selected element to the end
        fAnswers.pop();//remove it from the old array
        //checks if all elements have been popped/removed
        if(fAnswers.length <= 0){
            empty = true;
        }
    }

    return answers;
}

function swapToEnd(i, answer = []){
    let temp = answer[answer.length - 1];
    answer[answer.length - 1] = answer[i];
    answer[i] = temp;
    return answer;
}

function convertToQuestion(questionArray){
    for(let i = 0; i < questionArray.length; i++){
        let currentQuestion = new Question();
        currentQuestion.setQuestion(questionArray[i].question);
        currentQuestion.setCorrectAnswer(questionArray[i].correctAnswer);
        currentQuestion.setFalseAnswer(questionArray[i].falseAnswers);
        quizArray.push(currentQuestion);
    }
}

window.onload = function startQuizMaker(){
    let questions = JSON.parse(localStorage.getItem('questions'));
    convertToQuestion(questions);
    printQuiz();
}

startQuizMaker();
