var userInputNumber = +prompt("Enter any number that you want know that this number should be divided by 3");
var result_1 = document.querySelector ("#result_1");

if(userInputNumber % 3 === 0){
    result_1.innerHTML = `The given number is divisible by 3`;
}
else {
    result_1.innerHTML = `The given number is not divisible by 3`;
}

var result_2 = document.querySelector ("#result_2");
var num1 = +prompt("Enter any number that you want know that this number is an Odd number or an Even number");

if (num1 % 2 === 0){
    result_2.innerHTML = `${num1} is an Even number`;
}
else {
    result_2.innerHTML = `${num1} is an Odd number`;
}

var result_3 = document.querySelector ("#result_3");
var age = +prompt ("Enter Your Age");

if (age >= 18) {
    result_3.innerHTML = "Old Enough";
}
else {
    result_3.innerHTML = "Too Young";
}

var result_4 = document.querySelector ("#result_4");
var username = prompt("Enter Your Name");

if (username === "Ayan"){
    result_4.innerHTML = "↠━━━━ღ◆ღ━━━━↞Welcome Ayan↠━━━━ღ◆ღ━━━━↞";
}
else{
    result_4.innerHTML = "";
}

var result_5 = document.querySelector ("#result_5");

var inputType = 7;
var inputValueType = typeof(inputType);

if (inputValueType == Number){
    result_5.innerHTML = `The Data type of the given Value is  ${inputValueType}`;
}
else {
    result_5.innerHTML = `The Data type of the given Value is  ${inputValueType}`;
}

var input = +prompt("Enter Any Value in Number");

if (input >=1 && input <= 64){
    result_6.innerHTML = `The given value is a Number`;
}
else if(input >= 65 && input <= 90){
    result_6.innerHTML = `The given value is a Uppercase Number`;
}
else if(input >= 97 && input <= 122){
    result_6.innerHTML = `The given value is a Lowercase Number`;
}
else{
    result_6.innerHTML = `The given value is a Number`;
}

var result_7 = document.querySelector ("#result_7");
var time = +prompt ("Enter Time in 4 Digits Value");

if (time >= 0 && time < 1200){
    result_7.innerHTML = "Good Morning!";
}
else if (time >= 1200 && time < 1700){
    result_7.innerHTML = "Good Afternoon!";
}
else if (time >= 1700 && time < 2100){
    result_7.innerHTML = "Good Evening!";
}
else if (time >= 2100 && time < 2359){
    result_7.innerHTML = "Good Night!";
}
else{
    result_7.innerHTML = "Please! Enter the correct Time";
}

var result_8 = document.querySelector ("#result_8");
var currentYear = +prompt("Enter Current Year to find that this is a Leap Year or Not");

if (currentYear % 4 === 0) {
    result_8.innerHTML = "It's a Leap Year";
}
else{
    result_8.innerHTML = "It's not a Leap Year";
}

var result_9 = document.querySelector("#result_9");
var password = 1357;
var userPassword = +prompt("Enter your Password");

if (userPassword == ""){
    result_9.innerHTML = "Please! Enter Your Password";
}
else if (password === userPassword){
    result_9.innerHTML = "Correct! The Password you entered matches the original password";
}
else{
    result_9.innerHTML = "Incorrect Password";
}

var result_10 = document.querySelector("#result_10");
var firstName = prompt("Enter Your name");

if (firstName === "Fahad"){
    result_10.innerHTML = "Hello Fahad";
}
else {
    result_10.innerHTML = "You are not Fahad";
}

var result_11 = document.querySelector("#result_11");

var greetings = "";
var greetHours = 13;

if(greetHours < 18){
    greetings = "Good Day!";
}
else{
    greetings = "Good Evening!";
}
result_11.innerHTML = greetings;

var result_12 = document.querySelector("#result_12");

var integer1 = +prompt("Enter Integer 1");
var integer2 = +prompt("Enter Integer 2");

if (integer1 > integer2){
    result_12.innerHTML = `${integer1} is a larger Number`;
}
else if (integer2 > integer1){
    result_12.innerHTML = `${integer2} is a larger Number`;
}
else{
    result_12.innerHTML = `${integer1} is Equal to ${integer2}`
}

var result_13 = document.querySelector ("#result_13");

var userInputValue = +prompt("Enter any Number to know that the value is Positive or Negative");

if(userInputValue > 0){
    result_13.innerHTML = "The Value Is Positive";
}
else if (userInputValue < 0){
    result_13.innerHTML = "The Value Is Negative";
}
else{
    result_13.innerHTML = "The Value Is 0";
}

var result_14 = document.querySelector ("#result_14");

var user_Time = +prompt("Write the current time in 0-24 to know your Shedule");

if(user_Time >= 6 && user_Time <= 9){
    result_14.innerHTML = "Breakfast is served";
}
else if(user_Time >= 11 && user_Time <= 13){
    result_14.innerHTML = "Time for Lunch";
}
else if(user_Time >= 17 && user_Time <= 20){
    result_14.innerHTML = "It's Dinner time";
}
else{
    result_14.innerHTML = "Sorry, you'll have to wait, or go get a snack";
}

var result_15 = document.querySelector ("#result_15");

var input_Type_Value = "Ayan";
var Type_Of_Value = typeof(input_Type_Value);

if (Type_Of_Value == "number"){
    result_15.innerHTML = `The Data type of the given Value is  ${Type_Of_Value}`;
}
else if (Type_Of_Value == "string"){
    result_15.innerHTML = `The Data type of the given Value is  ${Type_Of_Value}`;
}
else if (Type_Of_Value === "boolean"){
    result_15.innerHTML = `The Data type of the given Value is  ${Type_Of_Value}`;
}
else {
    result_15.innerHTML = `The Data type of the given Value is  ${Type_Of_Value}`;
}

var result_16 = document.querySelector ("#result_16");

var characterInput = prompt("Enter only One Alphabet to check this is a vowel or not");

if(characterInput == "a" || characterInput == "e" || characterInput == "i" || characterInput == "o" || characterInput == "u" || characterInput == "A" || characterInput == "E" || characterInput == "I" || characterInput == "O" || characterInput == "U"){
    result_16.innerHTML = "Vowel";
}
else{
    result_16.innerHTML = "False";
}

var result_17 = document.querySelector ("#result_17");

if (10 != 8){
    result_17.innerHTML = "True";
}
else{
    result_17.innerHTML = "False";
}

var result_18 = document.querySelector ("#result_18");
var age = +prompt ("Enter Your Age");

if (age >= 18) {
    result_18.innerHTML = "Old Enough";
}
else {
    result_18.innerHTML = "Too Young";
}