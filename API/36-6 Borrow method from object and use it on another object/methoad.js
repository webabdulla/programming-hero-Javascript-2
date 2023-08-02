const student ={
    name: 'miraj',
    money: 15000,
    study : 'math',
    subject:['calculus','algebra','geometry'],
    exam: function(){
        console.log(this.name, 'is participating in an exam');
    }
}

student.exam();


const book ={
    shop : 'mithapukur,'
}

const result = student.exam.call(book,20);
const result2 =student.exam.apply(student,[20,15])
console.log(result);
console.log(result2);