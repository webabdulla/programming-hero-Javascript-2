// syntactic sugar

class TeamMember{
    name ;
    location ;
    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(`${this.name} thanks you for your feedback`)
    }
}


class Instructor extends TeamMember{

    desigantion = 'web course Instructor'
    team = 'web team'


    constructor(name,location){
        super(name,location)
    }
    startSupportSession(time){
        console.log(`start the support session at ${time}`)

    }
    createQuz(module){
        console.log(`Please create quiz for module ${module}`)
    }
  
}

class Developer extends TeamMember{
 
    desigantion = 'web course Instructor'
    team = 'web team'
    tech ;


    constructor(name,location){
        super(name,location)
        this.tech = tech;
    }
    developFeature(feature){
        console.log(`Please develop the ${feature}`)

    }
    release(version){
        console.log(`Please release the version ${version}`)
    }
   
}



class Jobplacement  extends TeamMember{

    desigantion = 'job placement commando'
    team = 'job placements'
    region  ;


    constructor(name,location){
        super(name,location)
        this.tech = this.tech;
        this.region =  region;
    }
    provideResume(feature){
        console.log(`Please develop the ${feature}`)

    }
    prepareStudent(version){
        console.log(`Please release the version ${version}`)
    }
}

const ikbal = new Developer('ikbal','mithapukur','react');
console.log(ikbal);
ikbal.Jobplacement();
ikbal.Instructor();