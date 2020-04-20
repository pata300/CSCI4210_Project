class Question{
    
    constructor(){
        this.question;
        this.correctAnswer;
        this.falseAnswers= new Array();
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
    setFalseAnswer(falseAnswers = new Array()){
        for (let i=0; i < falseAnswers.length; i++){
            this.falseAnswers[i] = falseAnswers[i];
        }
        // this.falseAnswers=falseAnswer;
        console.log(this.falseAnswers);
    }
    setNumFAnswers(num){
        
        this.numberOfFalseAnswers = num;
    }
    //setFalseAnswer(String)
    getFalseAnswer(){
        return this.falseAnswers;
    }

    toString(){
        return this.question + "/n" + "correct answer: " + this.correctAnswer + "/n" + "false answers" + this.falseAnswers + "/n";
    }
    
    //getFalseAnswer()
        //return falseAnswer
}