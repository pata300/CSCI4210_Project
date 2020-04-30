 let loadBtn= document.getElementById('loadBTN');
 let printBTN = document.getElementById('printBTN');
 printBTN.addEventListener('click',printQuiz);
 loadBtn.addEventListener('click',displaySavedQuizes);
 let quizName = document.getElementById('quizName');
 let quizArray= new Array();

function displaySavedQuizes(){  

   
    quizArray = JSON.parse(localStorage.getItem('quizes'));
    for(let i=0;i<quizArray.length;i++){
        document.getElementById("quizes").children[0].innerHTML += "<li>"+quizArray[i].quizName+"</li>";
    }
}
function printQuiz(){
    quizArray = JSON.parse(localStorage.getItem('quizes'));
    
    for(let i=0;i<quizArray.length;i++){
        if(quizArray[i].quizName==quizName.value){
            localStorage.setItem('questions',JSON.stringify(quizArray[i].quizQuestions));
            window.open("quiz.html", "_blank");
            console.log("quiz page is created"); 
        }
    }
    
}