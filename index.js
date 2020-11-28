var readlineSync = require('readline-sync');
// exercise one and two
var userName = readlineSync.question('May i know your name please? ');
console.log('Welcome ', userName);

// exercise 3,4 & 5
var userAge = readlineSync.question('Are you older than 25? ');
var score = 0;
if(userAge === 'yes'){
  console.log('right');
}else {
  console.log('wrong')
};

// exercise 6
var userCity = readlineSync.question('What is your  Hometown? ');
if(userCity === 'ashta' || userCity === 'Ashta'){
  console.log('right bro');
  score++;
} else{
  console.log('wrong bro');
};
console.log('Your score is ', score);

// exercise 7
function add(valueOne, valueTwo){    // addition function
  return `By adding ${valueOne} & ${valueTwo} we get ${valueOne+valueTwo}`;
};
console.log(add(10,35));

// exercise 8
function automate(question, answer){    //created function whcih takes in question and ansewr
  var questionz = readlineSync.question(question);
  if(questionz === answer){
    console.log('You are right')
    score++
  } else {
    console.log('wrong bro')
  }
};
automate('Any question can be asked here? ', 'yes');    //function call 

// exercise 9
for(var i=0; i<5; i++){
  console.log('printing Harsh '+ i + ' times')
}

// exercise 10 & 11
var groceryList = ['eggs', 'rice', 'pasta', 'bread', 'butter'];
console.log(groceryList[0]);
console.log(groceryList[2]);
console.log(groceryList[4]);
for(var i=0; i<groceryList.length; i++){
  console.log(groceryList[i]);
}

// exercise 12
var superman ={
  'real name': 'Kal-El',
  'created by': 'Jerry Siegel',
  strength: 100,
  'costume color': 'red-blue',
  'super power': 'yes',
  rating: 4.5
};
var batman ={
  'real name': 'Bruce Wayne',
  'created by': 'Bob Kane',
  strength:200,
  'costume color': 'black', 
  'super power': 'yes',
  rating:4.8
};
console.log(batman['real name']);

// exercise 13,14 & 15
var questionOne = {
   question: 'Which is the origin country of oneplus?  ', 
   answer:'china'
};
var questionTwo = {
   question:'Which is the origin country of samsung? ', 
   answer:'south korea'
};
var questionThree = {
   question:'Who is the parent company of google? ',
    answer:'alphabet'
};


function funThree(question, answer){    
  var questionz = readlineSync.question(question);
  if(questionz === answer){
    console.log('You are right')
    score++
  } else {
    console.log('wrong bro')
  }
  console.log('your score is '+ score)
};
var arrays = [questionOne, questionTwo, questionThree];
for(var i=0; i<arrays.length; i++){
  var currentQuestion = arrays[i];
  funThree(arrays[i].question, arrays[i].answer)
}; 

