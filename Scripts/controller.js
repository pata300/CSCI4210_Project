

let numberOfQuestions=0;
let questionArray=[Question];
let question;
let cAnswer;
let fAnswer= new Array();
let numFAnswers;
let arrayPos

let submit = document.getElementById('submitBtn');
let submitNumOfFalse = document.getElementById('numOfFalse');
questionObj= new Question();
submit.addEventListener('click',addQuestion);
submitNumOfFalse.addEventListener('click',showBoxes);
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
   getFalseInput();
}
function getFalseInput(){
     arrayPos=0;
    if(numFAnswers>=1){
        fAnswer[0]=document.getElementById('falseAnswerInput1');
        arrayPos++;
    }
    if(numFAnswers>=2){
        fAnswer[1]=document.getElementById('falseAnswerInput2');
        arrayPos++;
    }
    if(numFAnswers>=3){
        fAnswer[2]=document.getElementById('falseAnswerInput3');
        arrayPos++;
    }
    if(numFAnswers>=4){
        fAnswer[3]=document.getElementById('falseAnswerInput4');
        arrayPos++;
    }
    if(numFAnswers>=5){
        fAnswer[4]=document.getElementById('falseAnswerInput5');
        arrayPos++;
    }
    if(numFAnswers>=6){
        fAnswer[5]=document.getElementById('falseAnswerInput6');
        arrayPos++;
    }
}
function inputToString(){
    question=question.value;
     cAnswer=cAnswer.value;
     for(i=0;i<=numFAnswers-1;i++){
     fAnswer[i]=fAnswer[i].value;
     }
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