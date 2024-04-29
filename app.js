'use strict' ; 

let userName = prompt("Enter your Name...")
let userGender = prompt("Enter Your Gender (male/female)...")
let userAge = prompt("Enter Your Age ...");
let anss=[]
function storingAns () {
    anss.push(userName) ;
    anss.push(userGender);
    anss.push(userAge);
    return anss ;
}

if (userAge<=0) {
    alert("Age is not valid!");
}
if (confirm("Do you want to skip the welcoming message ?") == false) {
    if (userGender == "male") {
        alert("Hello Mr "+userName)}
    else if (userGender =="female")  {
    alert("Hello Ms "+userName)}
else {
    alert("Hello!")
}
}
function answerValidation(question) {
    let answer = prompt(question + "(yes/no)").toLowerCase(); 
  
    while (answer !== "yes" && answer !== "no") { 
      alert("Invalid answer please answer with 'Yes' or 'No'");
      answer = prompt(question + "(Yes/No)").toLowerCase(); 
    }
    return answer;
  }
  
  function askQuestion(question) {
    let answer = answerValidation(question);
    return answer;
  }
  
  function storeAnswers() { 
    let answerArray = [];
    const questions = ["Do you enjoy learning new things?", "Is staying organized important to you?", "Are you a good team player?"];
    for (let i = 0; i < questions.length; i++) {
      let answer = askQuestion(questions[i]);
      answerArray.push(answer);
    }
  
    return answerArray;
  }
  
  let allAnswers = storeAnswers();
  let firstAnswers = storingAns();

  console.log("2nd Answers="+allAnswers);
  console.log("1st Answer="+firstAnswers);