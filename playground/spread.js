// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Roxy', 'Fred'];
// var groupB = ['Patty'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

// He Andrew, you are 25

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
function greet (name, age) {
  console.log('Hi ' + name + ' you are ' + age);
}
greet(...person);
greet(...personTwo)

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
