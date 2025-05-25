//let username = "fazt";
//let age = 30;
//let hasHobbies = [10, 20, 30];
//let user = {
//  name: "ryan",
//  lastname: "ray",
//};
//const PI = 3.1416;
//
//console.log(username);
//console.log(age);
//console.log(hasHobbies);
//console.log(user);
//console.log(PI);

let age = 10;

if (age >= 18) {
  console.log("Eres un adulto");
} else if (age >= 13) {
  console.log("eres un adolescente");
} else {
  console.log("eres un niño");
}
const names = ["Joe", "John", "Marco"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

function showUserInfo(userName, userAge) {
  return `The username is ${userName}, the user is ${userAge} years old`;
}

console.log(showUserInfo("Maria", 30));
console.log(showUserInfo("Jose", 50));
