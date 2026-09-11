//let is used to declare a variable
let name = "Sithumi";
let age = 21;
let university = "USJP";
let isStudent = true;

//We can print these variable values using console.log
console.log("Name: " + name);
console.log("Age: " + age);
console.log("University: " + university);
console.log("Status: Student - " + isStudent);

//when we store a variable value using let, the value can be changed
let marks = 90;
marks = 95;

console.log(marks);

//If we use const instead of let, the value cannot be changed
const universityName = "USJP";
console.log(universityName);
//universityName = "KDU"; //this will give an error because the variable define as const value can not be changed.
//console.log(universityName); 