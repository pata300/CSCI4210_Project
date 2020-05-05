class Question{
    
    constructor(){
        this.question;
        this.correctAnswer;
        this.falseAnswers= new Array();
        this.numberOfFalseAnswers=0;
    }

    setQuestion(question){
        this.question = question;
    }
    
    getQuestion(){
        if(this.question!=null){
            return this.question;
        }else{
            return "Error: question does not exist";
        }
        
    }
    
    setCorrectAnswer(correctAnswer){
        this.correctAnswer=correctAnswer;
    }
   
    getCorrectAnswer(){
        return this.correctAnswer;
    }
   
    setFalseAnswer(falseAnswers = new Array()){
        for (let i=0; i < falseAnswers.length; i++){
            this.falseAnswers[i] = falseAnswers[i];
        }
        console.log(this.falseAnswers);
    }
    setNumFAnswers(num){
        this.numberOfFalseAnswers = num;
    }
   
    getFalseAnswer(){
        return this.falseAnswers;
    }

    toString(){
        return this.question + "/n" + "correct answer: " + this.correctAnswer + "/n" + "false answers" + this.falseAnswers + "/n";
    }
}