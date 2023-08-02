// syntactic sugar

class Instructor{
    name ;
    desigantion = 'web course Instructor'
    team = 'web team'
    location ;

    constructor(name,location){
        this.name=name;
        this.location= location; 
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)

    }
    createQuz(module){
        console.log(`Please create quiz for module ${module}`)
    }
}


const miraj = new Instructor('miraj','rangpur');
console.log(miraj);

miraj.startSupportSession('10.00');
miraj.createQuz(90);

const abdullah = new Instructor('Abdullah ','mithapukur');
console.log(abdullah);