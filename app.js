// Chapter 9-11

// Q1
// var userCity = prompt("enter your city name");
// if (userCity === "karachi") {
//   alert("Welcome to city of lights");
// }

// Q2
// var userGender = prompt("Enter your gender");
// if (userGender === "male") {
//   alert("Good morning sir");
// }
// if(userGender === "female") {
//   alert("Good morning Ma'am");
// }

// Q3
// var signalColor = prompt("Enter color of road traffic signal");
// if (signalColor === "red") {
//   alert("Must stop");
// }
// if(signalColor === "yellow") {
//   alert("ready to move");
// }
// if(signalColor === "green"){
//   alert("move now");
// }

// Q4
// var fuel = +prompt("enter remaining fuel in your car");
// if (fuel < 0.25) {
//   alert("please refill the fuel in your car");
// }

// Q5
// a)
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// condition is True

// b)
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// condition is false

// c)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// condition 2 & 4 is true

// d)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// condition is true

// e)
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// condition 1 is true

// f)
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// condition is true

// Q6
// var total_marks = +prompt("Enter Total Marks of English, Urdu & Math");
// var obtained_marks = +prompt("Enter obtained Marks of English, Urdu & Math");
// var grade;
// var remarks;
// var percentage = (obtained_marks/total_marks) * 100;

// if (percentage >= 80){
//   grade = "A-one";
//   remarks = "Excellent";
// }
// if (percentage >= 70){
//   grade = "A";
//   remarks = "good";
// }
// if (percentage >= 60){
//   grade = "B";
//   remarks = "you need to improve";
// }else{
//   grade = "Fail"
//   remarks = "sorry";
// }
// document.write("<h2>Marks Sheet</h2> <br><br> <p>Total Marks : ", total_marks, "</p> <p>Marks obtained : ", obtained_marks, "</p> <p>percentage : ", percentage, "%</p><p>Grade : ", grade, "</p><p>Remarks : ", remarks, "</p> <br>");

// Q7
// var secretNumber = 7;
// var guessNumber = +prompt("guess the Secret number");
// a & b)
// if (guessNumber === secretNumber) {
//   alert("Bingo! Correct answer");
// }
// if (guessNumber + 1 === secretNumber){
//   alert("Close enough to the correct answer");
// }

// Q8
// var no = 8;
// if (no % 3 == 0) {
//   alert("the number is divisible by 3");
// }

// Q9
// var checkNo = +prompt("Enter a number");
// if (checkNo % 2 === 0) {
//   alert("the number is even");
// }
// if{
//   alert("the number is odd");
// }

// Q10
// var t = +prompt("enter a temprature");
// if (t > 40) {
//   alert("It is too hot outside.")
// }
// if (t > 30) {
//   alert("The Weather today is Normal.")
// }
// if (t > 20) {
//   alert("Today’s Weather is cool.")
// }
// if (t > 10) {
//   alert("OMG! Today’s weather is so Cool.")
// }

// Q11
// var firstNo = +prompt("enter first number");
// var secondNo = +prompt("enter second number");
// var operation = prompt("enter second operation");

// if (operation == "+") {
//   document.write(firstNo, " ", operation, " ", secondNo, " = ", firstNo + secondNo, "<br>");
// }
//  if (operation == "-") {
//   document.write(firstNo, " ", operation, " ", secondNo, " = ", firstNo - secondNo, "<br>");
// }
//  if (operation == "*") {
//   document.write(firstNo, " ", operation, " ", secondNo, " = ", firstNo * secondNo, "<br>");
// }
//  if (operation == "/") {
//   document.write(firstNo, " ", operation, " ", secondNo, " = ", firstNo / secondNo, "<br>");
// }
//  if (operation == "%") {
//   document.write(firstNo, " ", operation, " ", secondNo, " = ", firstNo - secondNo, "<br>");
// }

// Chapter 12-13

// Q1

// Q2

// Q3
// var npNo = +prompt("enter negative or positive number");
// if (npNo >= 0) {
//   alert("the number is positive");
// }else{
//   alert("the number is negative");
// }

// Q5
// a)
// var password = 12345;

// b)
// var enterPass = prompt("enter your password");

// c-i & ii)
// if (enterPass == "") {
//   alert("please enter your password");
//   var enterPass = prompt("enter your password");
// }else if (enterPass == password){
//   alert("correct");
// }else{
//   alert("Incorrect password");
// }

// Q6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// alert(greeting);

// Q7
// var time = +prompt("Enter time with  24 hours clock format like: 1900 = 7pm");

// if (time >= "0000" && time < "1200") {
//   alert("good morning")
// } else if (time >= 1200 && time < 1700) {
//   alert("good afternoon");
// }else if (time >= 1700 && time < 2100) {
//   alert("good evening");
// }else if (time >= 2100 && time < 2359) {
//   alert("good night");
// }