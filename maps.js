console.log("MAPS");
//MAPS
const question = new Map();
question.set('question','What is the official name of the latest JAVASCRIPT ver?');
question.set(1,'ES5');
question.set(2,'ES6');
question.set(3,'ES7');
question.set('correct',3);
question.set(true,'Correct');
question.set(false,'Wrong');

if(question.has('question')){
    console.log(question.get('question'));
}
// delete map
// question.clear();

// question.forEach(element => {
//     console.log(element);
// });

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));