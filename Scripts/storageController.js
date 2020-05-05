 let printBTN = document.getElementById('printBTN');
 let quizName = document.getElementById('quizName');
 let removeBTN = document.getElementById('removeBTN');
 let quizArray= new Array();
 
 printBTN.addEventListener('click',printQuiz);
 removeBTN.addEventListener('click',removeQuiz);
 
function displaySavedQuizes(){  
    parseQuiz();
    for(let i=0;i<quizArray.length;i++){
        if(quizArray[i]!=null){
            document.getElementById("quizes").children[0].innerHTML += "<li>"+quizArray[i].quizName+"</li>";
        }
    }
}
function printQuiz(){
    parseQuiz();
    for(let i=0;i<quizArray.length;i++){
        if(quizArray[i !=null]){
            if(quizArray[i].quizName==quizName.value){
                localStorage.setItem('questions',JSON.stringify(quizArray[i].quizQuestions));
                window.open("quiz.html", "_blank");
                console.log("quiz page is created"); 
            }else{
                console.log("quiz not found")
            }
        }else{
            console.log("there are no saved quizes")
        }
    }
}
function removeQuiz(){
    console.log('removing quiz from localstorage');
    parseQuiz();
    for(let i=0;i<quizArray.length;i++){
        if(quizArray[i]!=null){
            if(quizArray[i].quizName==quizName.value){
                delete quizArray[i];
                localStorage.setItem('quizes',JSON.stringify(quizArray));
                location.reload();
            }else{
                console.log("quiz not found")
            }
        }else{
            console.log("there are no saved quizes")
        }
    }
}

function parseQuiz(){
    quizArray = JSON.parse(localStorage.getItem('quizes')); //localStorage stores as strings must us JSON.parse to get any non string back
}

displaySavedQuizes();