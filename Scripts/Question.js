class Question{
    constructor(){
        this.question;
        this.correctAnswer;
        this.falseAnswers;
        this.numberOfFalseAnswers=0;
    }

//question object
    //String question
    //String correctAnswer
    //String[] falseAnswer
    setQuestion(question){
        this.question = question;
    }
    //setQuestion(String question)
    
    getQuestion(){
        if(this.question!=null){
            return this.question;
        }else{
            return "Error: question does not exist";
        }
        
    }
    //getQuestion()
        //return question
    
    setCorrectAnswer(correctAnswer){
        this.correctAnswer=correctAnswer;
    }
    //setCorrectAnswer(String)
    //could set all correct answers to the same index in the falseAnswer array?
    getCorrectAnswer(){
        return this.correctAnswer;
    }
    //getCorrectAnswer()
        //return correctAnswer
    setFalseAnswer(falseAnswer){
        this.falseAnswers[this.numberOfFalseAnswers]=falseAnswer;
        this.numberOfFalseAnswers++;
        
        
    }
    //setFalseAnswer(String)
    getFalseAnswer(index){
        return this.falseAnswer[0];
    }
    
    //getFalseAnswer()
        //return falseAnswer
}