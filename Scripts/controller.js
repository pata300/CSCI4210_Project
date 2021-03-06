

let numberOfQuestions=0;
let questionArray=[Question];
let question;
let cAnswer;
let fAnswer= new Array();
let numFAnswers = 1;
let arrayPos;
let quizObj;
let quizArray = new Array();

let updateMsg = document.getElementById('userUpdate');
let submit = document.getElementById('submitBtn');
let submitNumOfFalse = document.getElementById('numOfFalse');
let quizBtn = document.getElementById('getQuizBtn');
questionObj = new Question();

submit.addEventListener('click',addQuestion);
submitNumOfFalse.addEventListener('click',showBoxes);
quizBtn.addEventListener('click', openQuiz);
saveBtn.addEventListener('click',save);




let addFalseBtn = document.getElementById('addFalseAnswerBtn');
addFalseBtn.addEventListener('click', incrementFalseAnswerCount);
let subtractFalseBtn = document.getElementById('subtractFAnswerBtn');
subtractFalseBtn.addEventListener('click', decrementFalseAnswerCount);

//currently only takes in the base 3 input boxes and doesnt allow adding extra false answers or creating a new question
//questions are stores as question objects in questionArray
function addQuestion(){
   submitQuestion();
   inputToString();

   incNumQuestions();
}


function submitQuestion(){
    questionObj= new Question(); //creates new Question obj each time you click the submit button
    question = document.getElementById('questionInput').value;
    cAnswer = document.getElementById("correctAnswerInput").value;
    
    setData(question, cAnswer);
    getFalseInput();
    addQuestionToArray(questionObj);
    setNumFAnswers2();
    
    updateMsg.innerText = "Question submitted";
    updateMsg.style = "color: green;";
    resetPage();

    setTimeout(clearUpdate, 5000);
}

function clearUpdate(){
    updateMsg.innerText = "";
}

function getFalseInput(){
     arrayPos=0;
    if(numFAnswers>=1){
        fAnswer[0]=document.getElementById('falseAnswerInput1').value;
        arrayPos++;
    }
    if(numFAnswers>=2){
        fAnswer[1]=document.getElementById('falseAnswerInput2').value;
        arrayPos++;
    }
    if(numFAnswers>=3){
        fAnswer[2]=document.getElementById('falseAnswerInput3').value;
        arrayPos++;
    }
    if(numFAnswers>=4){
        fAnswer[3]=document.getElementById('falseAnswerInput4').value;
        arrayPos++;
    }
    if(numFAnswers>=5){
        fAnswer[4]=document.getElementById('falseAnswerInput5').value;
        arrayPos++;
    }
    if(numFAnswers>=6){
        fAnswer[5]=document.getElementById('falseAnswerInput6').value;
        arrayPos++;
    }
    for(i=0;i<=numFAnswers-1;i++){    
        console.log("false answers " + fAnswer[i]);
       
    }
    questionObj.setFalseAnswer(fAnswer);
}
function inputToString(){
    question=question.value;
     cAnswer=cAnswer.value;
     for(i=0;i<=numFAnswers-1;i++){
     fAnswer[i]=fAnswer[i].value;
     }
}
function setData(question, cAnswer){
     questionObj.setQuestion(question);
     questionObj.setCorrectAnswer(cAnswer);
    
     
}
function setNumFAnswers2(){
    let temp = document.getElementById('numOfFalse');
    temp = temp.value;
    questionObj.setNumFAnswers(temp);
}

function incrementFalseAnswerCount(){
    numFAnswers++;
    if(numFAnswers == 6){
        addFalseBtn.style = 'display: none;';
    }
    if(numFAnswers > 1){
        subtractFalseBtn.style = 'display: true;';
    }
   
    submitNumOfFalse.value = numFAnswers;
    showBoxes();
}

function decrementFalseAnswerCount(){
    numFAnswers--;
    
    if(numFAnswers == 1){
        
        subtractFalseBtn.style = 'display: none;';
    }
    if(numFAnswers == 5){
        addFalseBtn.style = 'dipslay: true;';
    }

    submitNumOfFalse.value = numFAnswers;
    showBoxes();
}

function incNumQuestions(){
    numberOfQuestions++;
}

function addQuestionToArray(currentQuestion){
    questionArray[numberOfQuestions] = questionObj;
}

function openQuiz(){
    
    localStorage.setItem('questions', JSON.stringify(questionArray));
    window.open("quiz.html", "_blank");
}

function resetPage(){
    box = [ document.getElementById('falseAnswerInput1'),
            document.getElementById('falseAnswerInput2'),
            document.getElementById('falseAnswerInput3'),
            document.getElementById('falseAnswerInput4'),
            document.getElementById('falseAnswerInput5'),
            document.getElementById('falseAnswerInput6')];
    
    let questionInput = document.getElementById('questionInput');
    let correctAnswerInput = document.getElementById('correctAnswerInput');

    questionInput.value = '';
    correctAnswerInput.value = '';

    for(i=0; i < 6; i++){
        element = box[i];
        element.style.display = "none";
        element.value = '';
    }

    addFalseBtn.style.display = 'true';
    subtractFalseBtn.style.display = 'none';

    firstFalse = box[0];
    firstFalse.style.display = "block";
    submitNumOfFalse.value = '1';
    numFAnswers = 1;

}
function save(){
     
     let numQuiz =1;
     quizObj = new Quiz();
     quizObj.addQuestionArrayToQuiz(questionArray);
     quizObj.setName(document.getElementById('nameInput').value);
     if(localStorage.getItem('quizes'!= null)){
         quizArray = JSON.parse(localStorage.getItem('quizes'));
     }
     if(localStorage.getItem('numQuiz' != null)){
         numQuiz = JSON.parse(localStorage.getItem('numQuiz'));
     }
     quizArray.push(quizObj);
     numQuiz++;
     localStorage.setItem('quizes',JSON.stringify(quizArray));
     localStorage.setItem('numQuiz',JSON.stringify(numQuiz));
}




function showBoxes(){
    numFAnswers = document.getElementById('numOfFalse');
    numFAnswers=numFAnswers.value;
    let box1 =document.getElementById('falseAnswerInput1');
    let box2 =document.getElementById('falseAnswerInput2');
    let box3 =document.getElementById('falseAnswerInput3');
    let box4 =document.getElementById('falseAnswerInput4');
    let box5 =document.getElementById('falseAnswerInput5');
    let box6 =document.getElementById('falseAnswerInput6');
    if(numFAnswers==1){
         
        if (box1.style.display === "none"|| box1.style.display =="") {
            box1.style.display = "block";
          } 
          
            if(box2.style.display === "block"){
                box2.style.display ="none";
            }
            if(box3.style.display === "block"){
                box3.style.display ="none";
            }
            if(box4.style.display === "block"){
                box4.style.display ="none";
            }
            if(box5.style.display === "block"){
                box5.style.display ="none";
            }
            if(box6.style.display === "block"){
                box6.style.display ="none";
            }
            question=1;
            test =box2.style.display;
        }
        if(numFAnswers==2){
            if(box2.style.display === "none" || box2.style.display ==""){
                box2.style.display ="block";
            }
              test =box2.style.display;
            if(box3.style.display === "block"){
                box3.style.display ="none";
            }
            if(box4.style.display === "block"){
                box4.style.display ="none";
            }
            if(box5.style.display === "block"){
                box5.style.display ="none";
            }
            if(box6.style.display === "block"){
                box6.style.display ="none";
            }
        }
        if(numFAnswers==3){
            if(box3.style.display === "none" || box3.style.display ==""){
                box3.style.display ="block";
            }
            if(box4.style.display === "block"){
                box4.style.display ="none";
            }
            if(box5.style.display === "block"){
                box5.style.display ="none";
            }
            if(box6.style.display === "block"){
                box6.style.display ="none";
            }
        }
        if(numFAnswers==4){
            if(box4.style.display === "none" || box4.style.display ==""){
                box4.style.display ="block";
            }
            if(box5.style.display === "block"){
                box5.style.display ="none";
            }
            if(box6.style.display === "block"){
                box6.style.display ="none";
            }
        }
        if(numFAnswers==5){
            if(box5.style.display === "none" || box5.style.display ==""){
                box5.style.display ="block";
            }
            if(box6.style.display === "block"){
                box6.style.display ="none";
            }
        }
        if(numFAnswers==6){
                if(box6.style.display === "none"|| box6.style.display ==""){
                    box6.style.display ="block";
                }
        }
    
}