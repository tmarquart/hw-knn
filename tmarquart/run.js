var exercise = require('./exercise.js');

var data = exercise.one();
//console.log(data);
// console.log(data.length);

var data = exercise.two(data);
//console.log(data);
// console.log(data.length);

var data = exercise.three(data);
console.log(data);
// console.log(Object.keys(data).length);

var data = exercise.four(data);
console.log(data);
// console.log(Object.keys(data).length);

var data = exercise.five(data);
console.log(data);
//console.log(correct + ' correct out of ' )
console.log(data.correct + ' correct out of ' + data.length);