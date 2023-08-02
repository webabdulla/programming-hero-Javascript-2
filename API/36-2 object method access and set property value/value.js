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