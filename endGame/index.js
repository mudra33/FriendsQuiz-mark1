var readlineSync = require('readline-sync');
var score = 0;

var question = "Whats Your name? "

var userName = readlineSync.question(question);

console.log("Welcome " + userName + " do you know mudra?")


function play(question ,answer){
  var userAnswer = readlineSync.question(question);
//processing
if(userAnswer === answer){
  console.log("You are right")
  score = score + 1;
  
}
else{
  console.log("You are wrong")
  score = score - 1;
}
}


const questions = [ {question : "Where do I live? " , answer:"Ahmedabad" } , {
question : "Whats my favourite superhero? " , answer:"Superman"
  
}]

for(var i = 0 ; i < questions.length ; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer)
}

console.log(score , "Yayy !! Your Score is")