var assert = require('assert');
describe('Quiz', function() {
  describe('setName', function() {
    it('should return quiz1', function() {
        var quiz = new Quiz()
        quiz.setName('quiz1');
      assert.equal(quiz.quizName,'quiz1');
    });
  });
  describe('addQuestionArrayToQuiz', function(){
      it('',function(){
          var quiz = new Quiz()
          questionArray = new Array()
          questionArray[0] = 'why is this testing framework weird to me?'
          questionArray[1] = 'this should acutally be holding question objects but strings are fine for testing purposes'
          quiz.addQuestionArrayToQuiz(questionArray)
          assert.equal(quiz.quizQuestions[0],questionArray[0])
          assert.equal(quiz.quizQuestions[1],questionArray[1])
      })
  })
});
describe('Question', function() {
    describe('setQuestion', function() {
      it('should return what?', function() {
        var questionObj = new Question;
        var question ='what?'
        questionObj.setQuestion(question)
        assert.equal(questionObj.question,'what?');
      });
    });

    describe('getQuestion', function() {
        it('should return what?', function() {
          var questionObj = new Question;
          var question ='what?'
          questionObj.setQuestion(question)
          assert.equal(questionObj.getQuestion(),'what?');
          
        });
        it('should return "Error: question does not exist"',function(){
          var questionObj2 = new Question;
          assert.equal(questionObj2.getQuestion(),"Error: question does not exist");
        });
    });
    describe('setCorrectAnswer', function() {
        it('should return answer', function() {
          var questionObj = new Question;
          var question ='answer'
          questionObj.setCorrectAnswer(question)
          assert.equal(questionObj.correctAnswer,'answer');
        });
    });
    describe('getCorrectAnswer', function() {
        it('should return answer', function() {
          var questionObj = new Question;
          var question ='answer'
          questionObj.setCorrectAnswer(question)
          assert.equal(questionObj.getCorrectAnswer(),'answer');
        });
    });
    describe('setFalseAnswer', function() {
        it('should return "b", "c"', function() {
            var questionObj = new Question;
            falseAnswers = new Array()
            falseAnswers[0] = 'b';
            falseAnswers[1] = 'c';
            questionObj.setFalseAnswer(falseAnswers)
            assert.equal(questionObj.falseAnswers[0],falseAnswers[0]);
            assert.equal(questionObj.falseAnswers[1],falseAnswers[1]);
        });
    });
    describe('getFalseAnswer', function() {
        it('should return "b", "c"', function() {
            var questionObj = new Question;
            falseAnswers = new Array()
            falseAnswers2 = new Array()
            falseAnswers[0] = 'b';
            falseAnswers[1] = 'c';
            questionObj.setFalseAnswer(falseAnswers)
            falseAnswers2 = questionObj.getFalseAnswer();
            assert.equal(falseAnswers2[0],falseAnswers[0]);
            assert.equal(falseAnswers2[1],falseAnswers[1]);
        });
    }); 
    describe('setNumFAnswers', function() {
        it('should return 6', function() {
          var questionObj = new Question;
          questionObj.setNumFAnswers(6)
          assert.equal(questionObj.numberOfFalseAnswers,6);
        });
    });
    describe('toString', function() {
        it("should return 'what is the first letter of old?/ncorrect answer: o/nfalse answersz,q/n'", function() {
          var questionObj = new Question;
          falseAnswers = new Array();
          falseAnswers[0] = 'z';
          falseAnswers[1] = 'q';
          questionObj.setNumFAnswers(6)
          questionObj.setQuestion('what is the first letter of old?')
          questionObj.setFalseAnswer(falseAnswers);
          questionObj.setCorrectAnswer('o');
          assert.equal(questionObj.toString(),'what is the first letter of old?/ncorrect answer: o/nfalse answersz,q/n');
        });
    });
});



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