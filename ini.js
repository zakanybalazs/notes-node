console.log("starting ini.js...");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log("isstring?");
console.log(_.isString(2));

console.log("unique");
var filtered_array = _.uniq(['asd','asd','asd','asd',1,1,2,2,2,3,3,4,4,5,56,6,7]);
console.log(filtered_array);




/* second part */

// var res = notes.addNote();
// console.log(res);
// var res = notes.add(1,2);
// console.log(res);

/* first part */

// fs.appendFile("greets.txt","hello you age:" + notes.age + "\n", function(err) {
//   if (err) {
//     console.log("file append failed");
//   }
// });
// console.log("file appended");
