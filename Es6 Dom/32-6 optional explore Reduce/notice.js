const students = {
    name : 'Abdullah al miraj',
    age : 15,
    class: 'ten',
    marks :{
        bangla :70,
        english:80,
        math: 88,
        psychology:89,
    },
}
const totalMarks = students.marks.english;

const mark =students['marks']['math'];

const banglaMarks = 'bangla';
const subjectMarks = students.marks[banglaMarks];


console.log(subjectMarks);
console.log(mark);
console.log(totalMarks);