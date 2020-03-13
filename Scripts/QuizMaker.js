
 /*

*Generate quiz button*
	
QuizMaker populates page with questions

Answer key

*/

// testQuestion = new Question();
let quizArray= [typeof Question];


function getQuestions(questionArray){
    quizArray = questionArray;
    console.log(quizArray);
}

function printQuiz(){
    let currentDiv = document.getElementById("defaultDiv");
    for(let i = 0; i < quizArray.length; i++){
        let questionDiv = document.createElement("div", {is: "question" + i});
        questionDiv.appendChild(buildQuestion(quizArray[i]));
        document.body.insertBefore(questionDiv, currentDiv);
        
        let questionAnswers = [];
        questionAnswers = randomizeAnswers(quizArray[i].getFalseAnswer(), quizArray[i].getCorrectAnswer());
        for(let j = 0; j < questionAnswers.length; j++){
            let answerP = document.createElement("p", {is: "answer" + j});
            answerP.appendChild(document.createTextNode(questionAnswers[j]));
            document.body.insertBefore(answerP, currentDiv);
        }

        
    }
}

//creates a text node from the question variable from the Question obj
function buildQuestion(question){
    return document.createTextNode(question.getQuestion());
}

function randomizeAnswers(fAnswers, cAnswer){
    let empty = false;
    fAnswers.push(cAnswer);
    let answers = [];
    while(!empty){
        let index = Math.floor(Math.random() * fAnswers.length);
        answers.push(fAnswers[index]);
        fAnswers = swapToEnd(index, fAnswers);
        fAnswers.pop();
        if(fAnswers.length == 0){
            empty = true;
        }
    }

    return answers;
}

function swapToEnd(i, answer){
    let temp = answer[answer.length - 1];
    answer[answer.length] = answer[i];
    answer[i] = temp;
    return answer;
}

// function addQuestion(){
//     let newQueston = document.getElementById('questionInput').value;
//     console.log('addQuestoin executed');
//     try{
//         if(newQueston.length() == 0) throw "empty";
//     }
//     catch(err){
//         alert("The question is " + err);
//     }
//     finally{
//         testQuestion.setQuestion(newQuestion);
//         addCorrectAnswer();
//     }
// }

// function addCorrectAnswer(){
//     //variable for the input
//     let answer = document.getElementById('correctAnswerInput').value;
//     console.log('addCorrectAnswer executed');
//     try{
//         if(answer.length() == 0) throw "empty";
//     }
//     catch(err){
//         alert("The correct answer is " + err);
//     }
//     finally{
//         //create correct answer box/button
//         testQuestion.setCorrectAnswer(answer);
//     }
// }

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