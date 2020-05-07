To run testers make sure youre in the test directory and use the command ../node_modules/mocha/bin/mocha
Onyl the 2 class files were tested as the other files are deeply integrated with the ui and controlling those aspects using these two classes and you let me know that testing ui wasnt someting we had to do.
It should return:
$ ../node_modules/mocha/bin/mocha


  Quiz
    setName
      √ should return quiz1
    addQuestionArrayToQuiz
      √

  Question
    setQuestion
      √ should return what?
    getQuestion
      √ should return what?
      √ should return "Error: question does not exist"
    setCorrectAnswer
      √ should return answer
    getCorrectAnswer
      √ should return answer
    setFalseAnswer
[ 'b', 'c' ]
      √ should return "b", "c"
    getFalseAnswer
[ 'b', 'c' ]
      √ should return "b", "c"
    setNumFAnswers
      √ should return 6
    toString
[ 'z', 'q' ]
      √ should return 'what is the first letter of old?/ncorrect answer: o/nfalse answersz,q/n'


  11 passing (7ms)

