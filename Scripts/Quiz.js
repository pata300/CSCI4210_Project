class Quiz{
    
    constructor(){
        this.quizName;
        this.quizQuestions= new Array();
    }
   

    setName(name){
        this.quizName=name;
    }

    addQuestionArrayToQuiz(quesitonArray){
        this.quizQuestions=quesitonArray;
    }

}