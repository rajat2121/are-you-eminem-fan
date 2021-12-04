var readlineSync = require('readline-sync');


var questionOne = {
  question : "who many grammy Eminem win ?",
  answer : "15",
}
var questionTwo = {
  question : "In which country Eminem live? ",
  answer : "USA",
}

var questionThree = {
  question : "Eminem is also khown as beacuse of Rap? ",
  answer : "Rap god",
}

var questionFour = {
  question : "does Eminem do anny live performance in India ",
  answer : "No",
}
var questionFive = {
  question : "Eminem songs is gernally based on ",
  answer : "Motivation",
}
var questionSix = {
  question : "Does Eminem have any siblings ",
  answer : "No",
}
var questionSeven = {
  question : "Eminem biggest hit song name ?",
  answer : "Lose Yourself",
}
var questionEight = {
  question : "How many children Eminem have ",
  answer : "three",
}
var questionNine = {
  question : " What song does Eminem rap the fastest?",
  answer : "Gotzilla"
}
var questionTen = {
  question : "Eminem real name ? ",
  answer : "Marshall Bruce Mathers"
}
var scoreOne =0;

var questionArray =[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

function play(question,correctAnswer){
 userAnswer = readlineSync.question(question);
 if(userAnswer.toUpperCase() === correctAnswer.toUpperCase() ){
    console.log("You are right ");
    scoreOne = scoreOne + 1;
    
 } else {
     console.log("Your were wrong ");
    
    
 } 
   console.log("your score is : "+ scoreOne);

}

// --------------------------------------------------------
 var scoreHighest ={
    
  name : "Shreyash",
  score : 10
}
 

var scoreSecondHighest = {
  name : "Vicky",
  score : 9
}




var scoreArray = [scoreHighest,scoreSecondHighest];
// ---------------------------------------------------------------------------
console.log("Are you Eminem fan \n");
var userName = readlineSync.question("Enter your Name ");
console.log("Hello "+userName);

// --------------------------------------------------------------------------

for(i=0;i<questionArray.length;i++){
     
    play(questionArray[i].question,questionArray[i].answer)
}



console.log("-------------------------------------------------");
console.log("\nHighest score ");
for(i=0;i<scoreArray.length;i++){
   console.log("Name " +scoreArray[i].name + "\n Score : "+ scoreArray[i].score);
}


console.log("-------------------------------------------------");




console.log("Your Final score is : "+ scoreOne);
console.log("If you have beaten highest score, then send me the screenshot ");
