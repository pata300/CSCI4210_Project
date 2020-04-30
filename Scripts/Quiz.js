class Quiz{
    
    constructor(){
        this.quizName;
        this.numQuestions=0;
        this.quizQuestions= new Array();
    }
   

    setName(name){
        this.quizName=name;
    }

    addQuestionToQuiz(Question){
        this.quizQuestions[this.numQuestions] = Question;
        this.numQuestions++;
    }
    addQuestionArrayToQuiz(quesitonArray){
        this.quizQuestions=quesitonArray;
    }

}